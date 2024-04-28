import { useState } from "react"
import Todoitem from "./Todoitem"

function TodoList(Props){
    const activity=Props.activity
    const setactivity=Props.setactivity
  
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        
        {activity.length===0?<p>You haven't added anything yet</p>:""}
        {
            activity.map(function(item,index){
                return <Todoitem id={item.id} item={item} index={index} activity={activity} setactivity={setactivity}/>
            })
        }
    </div>
    )
}
export default TodoList