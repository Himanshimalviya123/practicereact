
// const Comp5=({user})=>{
//     return(
//       <>
//       <h1>component-5</h1>
//       <h1>welcome:{user}</h1>
      
//       </>
//     )
  
//   }
//   export default Comp5;












import {useContext } from "react";
import { myContext } from "./App";


const Comp5=()=>{
    const{user,setUser}=useContext(myContext);
    return(
      <>
      <h1>component-5</h1>
      <h1>welcome:{user}</h1>
      <button onClick={()=>{setUser("himanshi")}}>click here</button>
          
      </>
    )
  
  }
  export default Comp5;
