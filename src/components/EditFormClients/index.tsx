import React, {useState, useEffect, useRef} from 'react';
import {useForm} from "react-hook-form";

type Fn<T> = (client: {}) => Array<T>;

interface Props {
    updateClient: Fn<Array<{}>>,
    refetch: any,
    editing: boolean,
    setEditing: any,
    currentClient: any,
}

const EditFormClients: React.FC<Props> = (props) => {

    interface IFormInput {
        firstName: string;
        lastName: string;
        age: string;
        phone: number;
        avatarUrl: string;
    }

    const [client, setClient] = useState(props.currentClient);
    const {register, errors, handleSubmit} = useForm<IFormInput>();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            setClient(props.currentClient);
        },
        [props]
    );

    const onSubmit = (data: IFormInput) => {
        props.updateClient(data);
    }

    const handleClickOutside = (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            props.setEditing(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div
            className="bg-gray-900 w-full h-full">
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bg-gray-900 inset-0 z-50 outline-none focus:outline-none">
                <div ref={wrapperRef}
                     className="relative w-auto my-6 mx-auto max-w-sm">
                    <div
                        className="border-0 rounded-lg p-10 bg-gray-800 relative w-full flex flex-col outline-none focus:outline-none">
                        <div className="flex flex-col items-start justify-between p-5 rounded-t">
                            <h2 className="text-3xl pb-2 mb-3 text-center border-b border-green-400 w-full">Edit
                                Customer</h2>
                            <form
                                className="border-0 relative flex flex-col w-full outline-none focus:outline-none"
                                onSubmit={handleSubmit(onSubmit)}>
                                <label className="pt-5 pb-1">First Name</label>
                                <input
                                    className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                    name="firstName"
                                    defaultValue={client.firstName}
                                    ref={register({required: true, maxLength: 20})}/>
                                <p className="text-red-700 pt-1">{errors.firstName && "First name is required. Please, enter letters only"}</p>
                                <label className="pt-5 pb-1">Last Name</label>
                                <input
                                    className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                    name="lastName"
                                    defaultValue={client.lastName}
                                    ref={register({required: true, pattern: /^[A-Za-z]+$/i})}/>
                                <p className="text-red-700">{errors.lastName && "Last name is required. Please, enter letters only"}</p>
                                <label className="pt-5 pb-1">Phone</label>
                                <input
                                    className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                    name="phone"
                                    defaultValue={client.phone}
                                    ref={register({
                                        minLength: 10,
                                        maxLength: 12,
                                        pattern: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
                                    })}/>
                                <p className="text-red-700">{errors.phone && "The phone's number has to start with 380.."}</p>
                                <label className="pt-5 pb-1">AvatarUrl</label>
                                <input
                                    className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                    name="avatarUrl"
                                    type="url"
                                    defaultValue={client.avatarUrl}
                                    ref={register({
                                        pattern: /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
                                    })}/>
                                <p className="text-red-700">{errors.avatarUrl && "Please enter the URL of your avatar"}</p>

                                <div className="flex flex-row justify-between">
                                    <button
                                        className="mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none"
                                        type="submit"
                                    >Update
                                    </button>
                                    <button
                                        className="mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none"
                                        onClick={() => props.setEditing(false)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditFormClients;
