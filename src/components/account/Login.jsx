import React from "react";
import './login.css';
import logo from '../../Assets/blglogo.png';
const Login = () => {
    return (
        <div className="main_parent" >
            <div className="login_page mt-10 p-[40px]" >
                <div className="item-center logo_img">
                    <img src={logo} alt="" />
                    <form action="">
                        <label htmlFor="firstName">Enter email:</label><br />
                        <input type="text" className="mt-0 rounded mb-5" placeholder="Email address" />
                        <label htmlFor="firstName" className="mt-10" >Enter Password:</label><br />
                        <input type="password" className="mt-0 rounded" placeholder="Password"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

