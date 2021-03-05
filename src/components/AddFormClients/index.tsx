import {useForm} from "react-hook-form";
import React, {useState, useEffect, useRef} from 'react'
import {AddUpdateClient, ADD_CLIENT} from "../ClientsList/queries";


const addSVG = <svg height="50px" viewBox="0 0 512 512" width="50px" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="512">
        <stop offset="0" stopColor="#2af598"/>
        <stop offset="1" stopColor="#009efd"/>
    </linearGradient>
    <path
        d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0"
        fill="url(#a)"/>
</svg>

type Fn<T> = ({}) => Array<T>;

interface Props {
    addClient: Fn<Array<any>>,
    setEditing: any,
    refetch: any
}

const AddFormClients: React.FC<Props> = (props) => {

    interface IFormInput {
        firstName: string;
        lastName: string;
        phone: number;
        avatarUrl: string;
    }

    const {register, handleSubmit, errors} = useForm<IFormInput>();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    const {mutate} = AddUpdateClient(ADD_CLIENT, {firstName, lastName, phone, avatarUrl}, {
        onSuccess: () => {
            props.refetch();
        }
    });

    const onSubmit = (data: any) => {
        const {firstName, lastName, phone, avatarUrl} = data;
        setFirstName(firstName);
        setLastName(lastName);
        setPhone(String(phone));
        setAvatarUrl(String(avatarUrl));
        mutate();
        setIsFormOpen(false);
    }

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsFormOpen(() => !isFormOpen);
    };

    const handleClickOutside = (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsFormOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div>
            <button
                className="float-right p-10 outline-none focus:outline-none"
                type='button'
                onClick={handleClick}
                style={{transition: "all .15s ease"}}
            >
                {addSVG}
            </button>
            {isFormOpen && (
                <div
                    className="bg-gray-900 w-full h-full">
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bg-gray-900 inset-0 z-50 outline-none focus:outline-none">
                        <div ref={wrapperRef}
                             className="relative w-auto my-6 mx-auto max-w-sm">
                            <div
                                className="border-0 rounded-lg p-10 bg-gray-800 relative w-full flex flex-col outline-none focus:outline-none">
                                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                                    <h2 className="text-3xl pb-2 mb-3 text-center border-b border-green-400 w-full">Add
                                        Customer</h2>
                                    <form
                                        className="border-0 relative flex flex-col w-full outline-none focus:outline-none"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <label className="pt-5 pb-1">First Name</label>
                                        <input
                                            className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                            name="firstName"
                                            ref={register({required: true, pattern: /^[A-Za-z]+$/i})}/>
                                        <p className="text-red-700 pt-1">{errors.firstName && "First name is required. Please, enter letters only"}</p>
                                        <label className="pt-5 pb-1">Last Name</label>
                                        <input
                                            className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                            name="lastName"
                                            ref={register({required: true, pattern: /^[A-Za-z]+$/i})}/>
                                        <p className="text-red-700">{errors.lastName && "Last name is required. Please, enter letters only"}</p>
                                        <label className="pt-5 pb-1">Phone</label>
                                        <input
                                            className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                            name="phone"
                                            ref={register({
                                                minLength: 10,
                                                maxLength: 12,
                                                pattern: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
                                            })}/>
                                        <p className="text-red-700">{errors.phone && "The phone's number has to start with 380.."}</p>
                                        <label className="pt-5 pb-1">AvatarUrl</label>
                                        <input
                                            className="pl-2 text-black border-0 rounded-md p-1 w-64 outline-none focus:outline-none"
                                            type="url"
                                            name="avatarUrl"
                                            ref={register({
                                                pattern: /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
                                            })}/>
                                        <p className="text-red-700">{errors.avatarUrl && "Please enter the URL of your avatar"}</p>
                                        <div className="flex flex-row justify-between">
                                            <button
                                                className="mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none"
                                                type="submit"
                                            >
                                                Add
                                            </button>
                                            <button
                                                className="mt-8 w-28 py-1 border-0 rounded-md  border border-green-400 hover:bg-green-600 outline-none focus:outline-none"
                                                onClick={() => setIsFormOpen(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddFormClients;
