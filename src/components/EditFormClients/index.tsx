import React, {useState, useEffect, useRef} from 'react';
import {useForm} from "react-hook-form";


type Fn<T> = (id:string, client: any) => Array<T>;

interface Props {
  updateClient: Fn<Array<any>>;
  editing: boolean;
  setEditing: any;
  currentClient:any;
}

const EditFormClients: React.FC<Props> = (props) => {

  interface IFormInput {
    firstName: string;
    lastName: string;
    age: string;
    phone: number;
    avatarUrl: string;
  }

  const [ client, setClient ] = useState(props.currentClient);
  const { register, handleSubmit } = useForm<IFormInput>();
  const wrapperRef = useRef<HTMLDivElement>(null);


  useEffect(
      () => {
        setClient(props.currentClient)
      },
      [props]
  )

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


  const onSubmit = (data: IFormInput) => {
    props.updateClient(client.id, data)
  }

  return (
      <div ref={wrapperRef}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
          <label>Last Name</label>
          <input name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
          <label>Phone</label>
              <input name="phone" ref={register({ minLength: 2, maxLength: 12, pattern: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/ })}/>
          <label>AvatarUrl</label>
          <input name="avatarUrl" ref={register({ pattern: /^[A-Za-z]+$/i })} />
          <button
              type="submit"
          >Update
          </button>
              <button onClick={()=> props.setEditing(false)}>
                Cancel
              </button>
        </form>
      </div>
  )
}

export default EditFormClients;
