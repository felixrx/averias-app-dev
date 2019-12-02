import React, { Component } from 'react';
import './Login_SignUp.css';

document.body.style.backgroundColor = "#f2f2f2";

class SignUp extends Component {
    render() {
      return (
        <div className="box">
            <h2>Sign Up</h2>
            <form>
                <div>
                    <input type="text" name required />
                    <label>Número de Empleado</label>
                </div>
                <div>
                    <input type="text" name required />
                    <label>Nombre</label>
                </div>
                <div>
                    <input type="text" name required />
                    <label>Apellido</label>
                </div>
                <div>
                    <input type="text" name required />
                    <label>Número de Teléfono</label>
                </div>
                <div>
                    <input type="email" name required />
                    <label>Email</label>
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
export default SignUp;
