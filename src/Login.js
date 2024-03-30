import React, { useState } from 'react';
import './Form.css'
const Login = ({toggleRegister, toggleAdminPage}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (username === "admin" && password === "admin") {
            toggleAdminPage(true);
        } else {
            console.log('Username:', username, 'Password:', password);
        }
    };



    return(
        <div className="container2">

            <form>
                <h1>Login</h1>
                <div className='group-form'>
                    <label className="">Username</label>
                    <input
                        type="text"
                        className="input-form"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>

                <div className='group-form'>
                    <label className="">Password</label>
                    <input
                        type="password"
                        className='input-form'
                        placeholder="**"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button className="subtn" id={"subbut"} onClick={handleSubmit}>Login</button>
                </div>

                <div>
                    <label>Dont have an account?</label>
                    <button className="btn" id={"loginbut"}  onClick={toggleRegister}>Register</button>
                </div>
            </form>

        </div>


    );
};

export default Login;