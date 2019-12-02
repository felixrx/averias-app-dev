import React, { Component } from 'react';
import './Login_SignUp.css';

document.body.style.backgroundColor = "#f2f2f2";

class Login extends Component {
    render() {
      return (
        <div className="box">
            <h2>Login</h2>
            <form>
                <div>
                    <input type="text" name required />
                    <label>Número de Empleado</label>
                </div>
                <div>
                    <input type="password" name required />
                    <label>Password</label>
                </div>
                <input type="submit" name="" value="Enter"  onclick="/inicio_averia"/>
            </form>
        </div>
      );
    }
}
export default Login;
