import { useEffect, useState } from "react";
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : 'strider',
        email : 'raul@google.com'
    });

    const { username , email } = formState;

    const onInputChange = ( { target } )=>{
        const { name , value } = target;
        //console.log({ name , value })

        setFormState({
            ... formState,
            [ name ]: value
        })
    }


    useEffect(() => {
      //console.log('useEffect called!');
    }, [] );

    useEffect(()=>{
        //console.log('formState called!');
    },[formState]);
    
    useEffect(()=>{
       // console.log('email called!');
    },[email]);


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange = { onInputChange}            

        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="raul@google.com"
            name="email"
            value={ email }
            onChange = { onInputChange}
        />
        {
            (username === 'strider2') && <Message />
        }

    </>
  )
}
