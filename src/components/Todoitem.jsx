function Todoitem(Props) {
    const activity = Props.activity
    const setactivity = Props.setactivity

    function handeldel(removeid) {
        var temp = activity.filter(function (item) {

            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }

        })
            setactivity(temp)
    }
    return (
        <div className="flex justify-between">
            <p>{Props.index + 1}.{Props.item.activity}</p>
            <button className="text-red-500" onClick={() => handeldel(Props.id)}>Delete</button>

        </div>
    )
}
export default Todoitem