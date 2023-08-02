import React, { useState } from 'react';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    checkboxChecked: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      checkboxChecked: e.target.checked,
    }));
  };

  const toggleShowPassword = (fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [`show${fieldName}`]: !prevData[`show${fieldName}`],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (!formData.checkboxChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checkbox: 'You must accept the Terms and Conditions',
      }));
    }

    // if (Object.keys(validationErrors).length === 0 && formData.checkboxChecked) {
    //   // Form is valid - perform form submission or API call here
    //   console.log('Form submitted:', formData);
    // }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate first name field
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    // Validate last name field
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    // Validate email field
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    // Validate password field
    if (data.password.length < 12) {
      errors.password = 'Password must be at least 12 characters long';
    } else {
      const uppercaseLetters = data.password.match(/[A-Z]/g) || [];
      const numbers = data.password.match(/[0-9]/g) || [];
      const symbols = data.password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g) || [];

      if (uppercaseLetters.length < 2 || numbers.length < 2 || symbols.length < 2) {
        errors.password =
          'Password must contain at least 2 uppercase letters, 2 numbers, and 2 symbols';
      }
    }

    // Validate confirm password field
    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="container-fluid mt-4">
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <div className="input-group">
          <input
            type={formData.showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary btn-custom"
              onClick={() => toggleShowPassword('Password')}
            >
              {formData.showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="input-group">
          <input
            type={formData.showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary btn-custom"
              onClick={() => toggleShowPassword('ConfirmPassword')}
            >
              {formData.showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className={`form-check-input ${errors.checkbox ? 'is-invalid' : ''}`}
            checked={formData.checkboxChecked}
            onChange={handleCheckboxChange}
            required
          />
          <label className="form-check-label" htmlFor="checkbox">
            I accept the Terms and Conditions
          </label>
        </div>
        {errors.checkbox && <div className="invalid-feedback">{errors.checkbox}</div>}
      </div>
      <button type="submit" className="btn btn-primary btn-custom">
        Submit
      </button>
    </form>
  </div>
);
};


export default FormValidation;
