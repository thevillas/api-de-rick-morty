import React, { useState } from 'react';
import { UseUserForm } from '../../hooks/custom';

function UserForm() {
  
  const initialState = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const { form, setform, handleChange } = UseUserForm(initialState);  
  const [ areEquals, setAreEquals] = useState(true);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password !== form.passwordConfirmation) {
      setAreEquals(false);
    } else {
      setAreEquals(true);
      console.log(form); // Muestra el estado del formulario en la consola
    }
  }

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)">
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        {/* Aquí va el código del menú desplegable */}
      </div>

      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <div className="form-floating">
            <input type="email" className="form-control" onChange={handleChange} name="email" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" onChange={handleChange} name="password" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" onChange={handleChange} name="passwordConfirmation" id="floatingPasswordConfirmation" placeholder="Password"/>
            <label htmlFor="floatingPasswordConfirmation">Confirm Password</label>
          </div>
          
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          {!areEquals && <p>Passwords do not match</p>}
          <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default UserForm;