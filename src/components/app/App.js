import "./App.css";
import React, { useState } from 'react';

import "../../tailwind.css"
import ClientsList from "../ClientsList"
import AddFormClients from "../AddFormClients"
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import EditFormClients from "../EditFormClients";


const queryClient = new QueryClient();

function App() {

  const clientsData = [
    { id: "1", firstName: 'Tania', lastName: 'aaaa', phone: 2324242424, avatarUrl: "http://ggfgyuegfyefg" },
    { id: "2", firstName: 'Max', lastName: 'qqqq', phone: 2324242424, avatarUrl: "http://ggfgyuegfyefg" },
    { id: "3", firstName: 'Max2', lastName: 'ssss', phone: 2324242424, avatarUrl: "http://ggfgyuegfyefg" },
    { id: "4", firstName: 'Max3', lastName: 'sseee', phone: 2324242424, avatarUrl: "http://ggfgyuegfyefg" },
  ]
  const [clients, setClients] = useState(clientsData);
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, firstName: "", lastName: "", phone: "", avatarUrl: ""  };
  const [currentClient, setCurrentClient] = useState(initialFormState);

  const addClient = client => {
    client.id = clients.length + 1
    setClients([ ...clients, client ])
  }

  const updateClient = (id, updatedClient) => {
    setEditing(false);
    setClients(clients.map(client => (client.id === id ? updatedClient : client)));
    console.log(updatedClient, clients)
  }

  const editRow = client => {
    setEditing(true)
    setCurrentClient({ id: client.id, firstName: client.firstName, lastName: client.lastName, phone: client.phone, avatarUrl:  client.avatarUrl });
  }


  return (
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <h1>Client's list</h1>
          <div className="wrapper__list">
            <ClientsList
                editRow={editRow}
                clients={clients}
            />
            { editing ? (
                <div>
                <h2>Edit Client</h2>
                <EditFormClients
                   editing={editing}
                   setEditing={setEditing}
                   currentClient={currentClient}
                   updateClient={updateClient}
                />
                </div>
            ): (
                <div>
                  <AddFormClients
                      addClient={addClient}
                      setEditing={setEditing}
                  />
                </div>
            )}
          </div>
        </div>
      </QueryClientProvider>
  );
}

export default App;
