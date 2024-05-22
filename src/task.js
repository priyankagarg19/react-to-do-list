import './task.css';
import { FaTrash, FaCircle} from 'react-icons/fa';

 export const Tasks = (props)=>{
    const circlestyle = {
            color: props.completed? "#A16AE8": "white",
            border: props.completed ? 'none' : '2px solid grey',
            borderRadius: "50%", 
    };
    const taskstyle ={
        textDecoration: props.completed ? 'line-through 1px white' : 'none',
    };
    return(
        <div className="newtasks" >
            <div className="circles">
         <button onClick = {()=> props.completetask(props.id)} style={{ background: 'none', border: 'none' }} ><FaCircle size={20} style = {circlestyle}/></button>
         </div>
         <div className="todo" style = {taskstyle}> {props.taskName}</div>
        <button className="trashbox"onClick = {()=> props.deletetask(props.id)} style={{ background: 'none', border: 'none' }}><FaTrash size={15} color={"grey"}/></button>
      
      </div>
  )
};