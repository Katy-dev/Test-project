import "./App.css";
import React, {useState} from 'react';

import "../../tailwind.css"
import ClientsList from "../ClientsList"
import AddFormClients from "../AddFormClients"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import EditFormClients from "../EditFormClients";
import useClientsList from "../ClientsList/queries";
import qgl from "graphql-tag"


const client = new QueryClient();

function App() {

  const clientsData = [
    {
      id: "1",
      firstName: 'Kate',
      lastName: 'Smith',
      phone: 380673600000,
      avatarUrl: "http://ggfgyuegfyefg"
    },
    {
      id: "2",
      firstName: 'Max',
      lastName: 'Hock',
      phone: 380673600000,
      avatarUrl: "http://ggfgyuegfyefg"
    },
  ]


  const [clients, setClients] = useState(clientsData);
  const [editing, setEditing] = useState(false)
  const initialFormState = {id: null, firstName: "", lastName: "", phone: "", avatarUrl: ""};
  const [currentClient, setCurrentClient] = useState(initialFormState);

  const addClient = client => {
    client.id = clients.length + 1
    setClients([...clients, client])
  }

  const updateClient = (id, updatedClient) => {
    setEditing(false);
    setClients(clients.map(client => (client.id === id ? updatedClient : client)));
  }

  const editRow = client => {
    setEditing(true)
    setCurrentClient({
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      phone: client.phone,
      avatarUrl: client.avatarUrl
    });
  }


  return (
      <QueryClientProvider client={client}>
        <div className="md:container md:mx-auto relative">
          <h1 className="text-4xl text-center p-10">Customer's list</h1>
          <div className="bg-gray-800 p-5 border-0 rounded-lg">
            <ClientsList
                editRow={editRow}
                clients={clients}
            />
            {editing ? (
                <div>
                  <EditFormClients
                      editing={editing}
                      setEditing={setEditing}
                      currentClient={currentClient}
                      updateClient={updateClient}
                  />
                </div>
            ) : (
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
