import React, {useState} from 'react';
import "../../tailwind.css"
import ClientsList from "../ClientsList"
import AddFormClients from "../AddFormClients"
import EditFormClients from "../EditFormClients";
import {useClientsList, GET_CLIENT, AddUpdateClient, UPDATE_CLIENT} from "../ClientsList/queries"


function App() {

    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, firstName: "", lastName: "", phone: "", avatarUrl: ""};
    const [currentClient, setCurrentClient] = useState(initialFormState);
    const [clients, setClients] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const {id} = currentClient;

    const {data, refetch} = useClientsList("getClients", GET_CLIENT, {
        poolInterval: 500,
        onSuccess: (data) => {
            const {getClients} = data;
            setClients(getClients)
        }
    });

    const {mutate} = AddUpdateClient(UPDATE_CLIENT, {id, firstName, lastName, phone, avatarUrl}, {
        onSuccess: () => {
            refetch();
        }
    });

    const updateClient = (updatedClient) => {
        setEditing(false);
        const {firstName, lastName, phone, avatarUrl} = updatedClient;
        setFirstName(firstName);
        setLastName(lastName);
        setPhone(String(phone));
        setAvatarUrl(String(avatarUrl));
        mutate(updatedClient);
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
                            setEditing={setEditing}
                            refetch={refetch}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
