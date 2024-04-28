import AddTodoForm from "./AddtodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function Todocontainer() {
       
    const [activity,setactivity]=useState([
        {
            id:1,activity:"Go for walk"
        },{
            id:2,activity:"Have a breack Fast"
        }
    ])
    return (
        <div>

            <div className="flex flex-wrap justify-between gap-5">
               <AddTodoForm activity={activity} setactivity={setactivity}/>
               <TodoList activity={activity} setactivity={setactivity}/>
              
            </div>
        </div>
    )
}
export default Todocontainer