import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const LoginForm = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return(
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="form-label">
                    <label className="form-input" htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-input" placeholder="Enter username" value={values.username} onChange={handleChange}></input>
                </div>
                {errors.username  && <p>{errors.username}</p>}
                <div className="form-label">
                    <label className="form-input" htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-input" placeholder="Enter username" value={values.username} onChange={handleChange}></input>
                </div>
                {errors.password  && <p>{errors.password}</p>}
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;