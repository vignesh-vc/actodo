import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(Props) {

    const Navigate = useNavigate()
    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [ruser, setruser] = useState(true)
    const users = Props.users

    var userfound = false
    function check() {
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("login successful")
                userfound = true
                Navigate("/landing",{state:{user:eusername}})
            }

        })
        if (userfound === false) {
            console.log("Login Failed")
            setruser(!ruser)
        }

    }

    function handeluinput(event) {
        seteusername(event.target.value)
    }
    function handelpinput(event) {
        setepassword(event.target.value)
    }


    return (
        <div className="bg-black p-10" >
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activities after you login:)</p> : <p className="text-red-500">Please Sign up Before you Login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        placeholder="Username"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handeluinput}></input>
                    <input type="password"
                        placeholder="Password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handelpinput}></input>
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={check}>Login</button>
                    <p>Don't  have an account? <Link to={"/signup"} className="underline">signup</Link></p>
                </div>
            </div>
        </div>)
}
export default Login