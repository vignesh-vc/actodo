// import Header from "../components/Header";
// import Card from "../components/Card";
// import Todocontainer from "../components/TodoContainer";
// import { useLocation } from "react-router-dom"
// function Landing() {
//     const data = useLocation()
//     return (<div className="bg-black p-16">
//         <div className="bg-[#EFEFEF] p-10 border rounded-md">
//             {/*Header */}
//             <Header name={data.state.user}/>
//             {/*card*/}
//             <div className="flex justify-between gap-7 my-5 flex-wrap" >

            


//                 <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
//                 <Card bgcolor={"#FD6663"} title={"April"} subtitle={"03:40:04"} />
//                 <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

//             </div>
//             {/*Todocontainer*/}
//             <Todocontainer />
//         </div>
//     </div>)
// }
// export default Landing

import Header from '../components/Header';
import Card from '../components/Card';
import LiveTimeCard from '../components/LiveTimeCard';
import LiveDateCard from '../components/LiveDateCard';
import Todocontainer from '../components/TodoContainer';
import { useLocation } from 'react-router-dom';

function Landing() {
  const data = useLocation();
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user} />
        {/* Cards */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <LiveDateCard/>
          <LiveTimeCard />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        {/* TodoContainer */}
        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;
