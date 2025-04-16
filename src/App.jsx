

// import Comp1 from "./comp1";
// import { useState } from "react";

// const Appp=()=>{
//   const[user,setUser]=useState("muskan");
//   return(
//     <>
//     <h1>welcome:{user}!!!</h1>
//     <Comp1 user={user}/>
//     </>
//   )
// }
// export default Appp;








import Comp1 from "./comp1";
import { useState,createContext } from "react";
const myContext=createContext();


const App=()=>{
  const[user,setUser]=useState("sakshi");
  return(
    <>
    <h1>welcome:{user}!!!</h1>
    <button onClick={()=>{setUser("himanshi")}}>click here</button>
    <myContext.Provider value={{user,setUser}}>
    <Comp1/>
    </myContext.Provider>
    </>
  )
}
export default App;
export {myContext};














