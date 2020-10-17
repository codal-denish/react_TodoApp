import React,{useState} from 'react';
import Todo from './Todo';

function EditView({show,ppptodos,pppsetTodos,ppid,setView,view}) {
    const [update,setUpdate] = useState('');

    const handleUpdateInput = (e) => {
        setUpdate(e.target.value);
    }
     const handleUpdateBtn = (e) => {
         e.preventDefault()
         console.log(ppid,ppptodos[ppid])
         console.log(ppptodos.filter(e => e.id===ppid)[0])
         let newList = ppptodos.map((e,index) => {
            if(e.id === ppid){
                e.text =update;
            }

            return e;
         })

         pppsetTodos(newList)
         setView(false)
    }
        
    
    return(
         
        <>
        {show && <div>
            <input  onChange={handleUpdateInput}/>
            <button  onClick={handleUpdateBtn}>Update</button>
        </div>}
        </>
    )
}
export default EditView;