import React,{useState} from 'react'
import EditView from './EditView';

function Todo({text,palltodos,ppsetTodos,pptodos,pid}) {
    const [view,setView] = useState(false);

    const editHandler = () => {
        setView(true);

        
    }
    
    const deleteHanadler = () => {
        ppsetTodos(pptodos.filter(elem => elem.id !== palltodos.id ))
    };
    
    return (
        <div>
            <li>{text}</li>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHanadler}>Delete</button>
            <EditView view={view} setView={setView} show={view} ppid={pid}  ppptodos={pptodos} pppsetTodos={ppsetTodos}  />
        </div>
    )
}

export default Todo;