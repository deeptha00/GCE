import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" />
        </div>
        <div className="form-group">
          <label htmlFor="institution-name">Institution Name</label>
          <input type="text" id="institution-name" name="institution-name" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="form-group">
          <label htmlFor="coordinator-name">Coordinator Name</label>
          <input type="text" id="coordinator-name" name="coordinator-name" />
        </div>
        <div className="form-group">
          <label htmlFor="whatsapp-number">Whatsapp Number</label>
          <input type="text" id="whatsapp-number" name="whatsapp-number" />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession</label>
          <input type="text" id="profession" name="profession" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City / Province</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
