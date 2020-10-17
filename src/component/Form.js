import React from 'react';

function Form({pinput,psetInput,psetTodos,ptodos}) {

    const changeHandler=(e)=>{
        psetInput(e.target.value)
    }

    const generateTodo = (e) =>{
         e.preventDefault();
         psetTodos([...ptodos,{text:pinput,id:parseInt(Math.random()*1000)}]);
         psetInput('');
         console.log(pinput)
    }

    return (
        <div>
            <input value={pinput} onChange={changeHandler}/>
            <button onClick={generateTodo}>Submit</button>
        </div>
    )
}
export default Form;