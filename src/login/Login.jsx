import React from "react";
import style from './Login.module.css';
export function Login() {

  const handleClick = () => {
        alert('hola abner')
    }

    return(
        <div className={style.container}>
            <h2 className={style.title}>Acceso</h2>
            <label>
                <input type="email" name="email" id="email" placeholder="Email" />
            </label>
            <br />
            <label>
                <input type="password" name="password" id="password" placeholder="Contraseña" />
            </label>
            <button type="button" className={style.btn} onClick={handleClick}>Iniciar sesión</button>
        </div>
    )
}

export default Login;
