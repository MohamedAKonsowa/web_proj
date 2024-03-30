import React,{useState} from "react";

const Register = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
    };

    return (
        <div className="container2" onSubmit={handleSubmit}>
            <form action="" method="post">

                <h1>Register</h1>
                <div className="group-form">
                    <label>Username</label>
                    <input className="input-form" type="text" placeholder="Enter your username" required/>
                </div>
                <div className="group-form">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="input-form" placeholder="**" required/>
                </div>
                <div>
                    <div>
                        <button type="submit" id={"subbut"} className="subtn">Signup</button>
                    </div>
                    <label>Have an account?</label>
                    <button className="btn"  id={"loginbut"}  onClick={props.onFromSwitch}>Login</button>
                </div>

            </form>

        </div>
    )
};
export default Register;