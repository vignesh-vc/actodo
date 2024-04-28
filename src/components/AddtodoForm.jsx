import { useState } from "react"

function AddTodoForm(Props) {
    const activity = Props.activity
    const setactivity = Props.setactivity

    const [newactivity, setnewactivity] = useState("")


    function changeactivity(event) {
        setnewactivity(event.target.value)
    }
    function addactivity(event){
     setactivity([...activity,{id:activity.length+1,activity:newactivity}])
     setnewactivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" value={newactivity} onChange={changeactivity} className="border border-black bg-transparent p-1" placeholder="Next activity?" />
                <button className="bg-black text-white p-1 border border-black" onClick={addactivity}>Add</button>

            </div>
        </div>
    )
}
export default AddTodoForm