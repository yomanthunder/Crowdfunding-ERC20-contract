import React from "react";
import { app } from "./Firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);//creatting an insance of firebase

function Login(){
   const putData =()=>{
       set(ref(db,"user/shrish"),{
           id :1,
           name : "shrish",
           age : 25,
       })
   }


    return(
        <div>
    <h1>Firebase integration </h1>
    <button onClick={putData}>put data</button>
        </div>
    )
}
export default Login;