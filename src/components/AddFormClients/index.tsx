import { useForm } from "react-hook-form";
import React, {useState, useEffect, useRef} from 'react';


const addSVG = <svg height="50px" viewBox="0 0 512 512" width="50px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="512"><stop offset="0" stop-color="#2af598"/>
    <stop offset="1" stopColor="#009efd"/>
  </linearGradient><path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0" fill="url(#a)"/></svg>

type Fn<T> = ({}) => Array<T>;

interface Props {
  addClient: Fn<Array<any>>;
  setEditing: any;
}

const AddFormClients: React.FC<Props> = (props) => {

  interface IFormInput {
    firstName: string;
    lastName: string;
    phone: number;
    avatarUrl: string;
  }

  const initialFormState = { id: null, firstName: "", lastName: "", phone: "", avatarUrl: "" };
  const [ client, setClient ] = useState(initialFormState);

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    props.addClient(data)
    setClient(initialFormState)
  }

  const [isFormOpen, setIsFormOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);


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
      <div ref={wrapperRef}>
      <button type='button' onClick={handleClick}>
        {addSVG}
      </button>
  { isFormOpen && (
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
        >
          Add
        </button>
        <button onClick={()=> setIsFormOpen(false)}>
          Cancel
        </button>
      </form>)}
</div>
  );
}

export default AddFormClients;