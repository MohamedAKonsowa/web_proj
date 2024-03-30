import React, { useState } from 'react';
import './Form.css'
const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
    };


    return(
        <div className="container2" onSubmit={handleSubmit}>

            <form action="" method="post">
                <h1>Login</h1>
                <div className='group-form'>
                    <label className="">Username</label>
                    <input type="text" className="input-form" placeholder="Enter your username" required/>
                </div>

                <div className='group-form'>
                    <label className="">Password</label>
                    <input type="password" className='input-form' id="" placeholder="**" required/>
                </div>
                <div>
                    <button className="subtn" id={"subbut"}   type='submit'>Login</button>
                </div>

                <div >
                    <label>Dont have an account?</label>
                    <button className="btn"  id={"loginbut"}  onClick={props.onFromSwitch}>Register</button>
                </div>
            </form>

        </div>


    );
};

export default Login;