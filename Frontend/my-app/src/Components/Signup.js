import { React, useState } from "react";
import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";







const auth = getAuth(app);//creating an instances for user 
const provider = new GoogleAuthProvider();

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(Value => alert('Success')
        )
    }
    const Signupwithgoogle = () => {
        signInWithPopup(auth, provider).then(Value => console.log("success")
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-primary">
            <div className="form-container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Signup</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <br/>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={createUser} type="submit">Sign up</button>
                    </div>
                    <br/>
                    <div className="d-grid">
                        <button className="btn btn-outline-warning" onClick={Signupwithgoogle} type="submit">Sign up with google</button>
                    </div>
                    <br/>
                    <p className="forgot-password text-end mt -2">
                        Forgot <a href="">password?</a><a className="ms-2" href="">Sign in</a>
                    </p>

                </form>
            </div>
        </div>
    )
}
export default Signup;