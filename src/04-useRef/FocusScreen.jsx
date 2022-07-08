import { useRef } from "react"

export const FocusScreen = () => {
    const InputRef = useRef();

    const onClick= ()=>{
        //console.log(InputRef)
        InputRef.current.select();
    }

    return (
    <>   
        <h1>FocusScreen</h1> 
        <hr />

        <input
            ref={ InputRef } 
            type="text"
            placeholder="Ingrese su Nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
            >
            Set focus
        </button>
    </>
  )
}
