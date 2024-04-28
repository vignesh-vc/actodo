import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(Props) {

    const users = Props.users
    const setusers = Props.setusers
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    const Navigate=useNavigate()
    function handeluinput(event) {
        seteusername(event.target.value)
    }
    function handelpinput(event) {
        setepassword(event.target.value)
    }
    function adduser(){
        setusers([...users,{username:eusername,password:epassword}])
        Navigate("/")
    }

    return (
        <div className="bg-black p-10" >
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here:)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        placeholder="Username"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handeluinput}></input>
                    <input type="password"
                        placeholder="Password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handelpinput}></input>
                    <input type="password"
                        placeholder="Confirm Password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup