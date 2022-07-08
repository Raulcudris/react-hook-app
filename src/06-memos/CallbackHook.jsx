import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
 const [counter, setCounter] = useState(10);

/*  const incrementFather =()=>{
    setCounter(counter + 1);
 }  */

const incrementFather = useCallback(
    () => {
        setCounter( (value) => value + 1);
    },
    [],
 )
 

 return (
    <>
        <h1>UseCallback Hook: { counter } </h1>
        <hr />
        <ShowIncrement increment ={ incrementFather } />
    </>
 )

}
