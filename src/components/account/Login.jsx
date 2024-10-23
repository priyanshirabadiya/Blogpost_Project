import { useState } from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

import './login.css';
import logo from '../../Assets/blglogo.png';
const Login = () => {
    const [account, toggleAccount] = useState('login');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleSignup = () => {
        account === 'signUp' ? toggleAccount('login') : toggleAccount('signUp');
    }

    const handleLogin = async () => {
        try {
            let response = await fetch('http://localhost:1165/user/loginuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            console.log("First response is:", response);
            let data = await response.json();
            if (response.ok) {
                console.log("Registed user is:", data);
            }
            else {
                console.log('Register failed Error is:', data.message);
            }
        } catch (error) {
            console.log("Error on login:", error);
        }
    }

    const handleSignup = async () => {
        try {
            let response = await fetch("http://localhost:1165/user/adduser", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ fullname, email, password })
            })
            let data = response.json();
            if (response.ok) {
                console.log('Successfully register user...', data);
            }
            else {
                console.log('Error on register:', data.error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="main_parent" >
            <div className="login_page rounded-lg mt-10 p-[40px] pt-[0px]" >
                <div className="item-center">
                    <div className='logo_img flex justify-center ' >
                        <img src={logo} alt="" />
                    </div>
                    {account === 'login' ?
                        <div>
                            <form action="">
                                <label htmlFor="email">Enter email:</label><br />
                                <input
                                    type="text"
                                    className="mt-0 rounded mb-5"
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password" className="mt-10" >Enter Password:</label><br />
                                <input
                                    type="password"
                                    className="mt-0 rounded"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="m-5 mt-8 flex justify-center">
                                    <Box sx={{ flexWrap: 'wrap' }}>
                                        <Button className='w-[300px]' onClick={handleLogin} >Login Account</Button>
                                    </Box>
                                </div>
                            </form>
                            <div className="">
                                <p className='text-center'>OR</p>
                                <p className='mt-3'>Don't have an Account <button className='text-blue-500 ms-2 underline underline-offset-1' onClick={() => toggleSignup()} >Sign up</button> </p>
                            </div>
                        </div>
                        :
                        <form action="">
                            <label htmlFor="firstName">Enter Name:</label><br />
                            <input
                                type="text"
                                className="mt-0 rounded mb-5"
                                placeholder="Name"
                                onChange={(e) => setFullname(e.target.value)}
                            />
                            <label htmlFor="firstName">Enter email:</label><br />
                            <input
                                type="text"
                                className="mt-0 rounded mb-5"
                                placeholder="Email address"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <label htmlFor="firstName" className="mt-10" >Enter Password:</label><br />
                            <input
                                type="password"
                                className="mt-0 rounded"
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <div className="m-5 mt-8 flex justify-center">
                                <Box sx={{ flexWrap: 'wrap' }}>
                                    <Button className='w-[300px]' onClick={handleSignup} >Create an account</Button>
                                </Box>
                            </div>
                            <div className="">
                                <p className='text-center'>OR</p>
                                <p className='mt-3'>Already have an account<button className='text-blue-500 ms-2 underline underline-offset-1' onClick={() => toggleSignup()} >Log in</button> </p>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;

