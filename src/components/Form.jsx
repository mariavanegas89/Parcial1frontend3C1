import React, { useState } from "react";
import Message from "./Message";

const Form = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [animal, setAnimal] = useState({
        cod: "",
        name: "",
        type: "",
    });
    const handleChangeCod = (e) => {
        setAnimal({ ...animal, cod: e.target.value });
    };
    const handleChangeName = (e) => {
        setAnimal({ ...animal, name: e.target.value });
    };
    const handleChangeType = (e) => {
        setAnimal({ ...animal, type: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(animal)
        if (animal.cod.trim().length <= 3 &&
            animal.name.trim().length >= 2 &&
            animal.type.trim().length >= 6) {
            setShow(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    const reset = () => {
        setAnimal({
            cod: "",
            name: "",
            type: "",
        });
    };
    console.log(show);
    return (
        <div>
            {show ?
                <Message animal={animal} /> :
                <form>
                    <label>Cod:</label>
                    <input
                        type="text"
                        value={animal.cod}
                        onChange={handleChangeCod}
                    />
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={animal.name}
                        onChange={handleChangeName}
                    />
                    <label>Tipo:</label>
                    <input
                        type="text"
                        value={animal.type}
                        onChange={handleChangeType}
                    />
                    <button onClick={handleSubmit}>Enviar</button>
                    <button onClick={reset}>Reset form</button>
                </form>
            }
            {error ? <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4> : null}
        </div>
    );
};

export default Form;