// import { React, useState , useEffect } from "react";
// import { app } from "./Firebase";
// import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
// import { getDatabase, onValue, ref, set } from "firebase/database";



// const auth = getAuth(app);//creating an instances for user 

// function Signin() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setuser] = useState(null);

    
//     const signinUser = () => {
//         signInWithEmailAndPassword(auth, email, password).then(Value => console.log("success")
//         ).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//           });
        
    
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if(user){
//                 //yes you are logged in 
//                 setuser(user);
//             }
//             else{
//                 //user is not logged in 
//                 setuser(null);
//             }
//         });
//     },[]);
//     if(user===null){
//         return(
//             <div>
                
//             </div>
//         )
        
//     }

//     return (
//         <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-primary">
//             <div className="form-container p-5 rounded bg-white">
//                 <form>
//                     <h3 className="text-center">Signin</h3>
//                     <div className="mb-2">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} />
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="password">Password</label>
//                         <input className="form-control" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
//                     </div>

//                     <div className="d-grid">
//                         <button className="btn btn-primary" onClick={signinUser} type="submit">Sign in</button>
//                     </div>
//                     <p className="forgot-password text-end mt -2">
//                         Forgot <a href="">password?</a><a className="ms-2" href="">Sign in</a>
//                     </p>

//                 </form>
//             </div>
//         </div>
//     )
// }
// }
// export default Signin;
