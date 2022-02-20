import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginForm(): React.ReactElement {
  const {
    values, handleChange, handleSubmit, errors, touched, handleBlur,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
    onSubmit() {},
    validationSchema: Yup.object({
      username: Yup.string().required('The username field is required.'),
      password: Yup.string().required('The password field is required.'),
    }),
  });
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <label htmlFor="username" className="input">
        Username
        <input type="email" name="username" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
        { touched.username && errors.username ? <p>{errors.username}</p> : null }
      </label>
      <label htmlFor="password" className="input">
        Password
        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        { touched.password && errors.password ? <p>{errors.password}</p> : null }
      </label>
      <label htmlFor="rememberMe" className="inline-input">
        <input type="checkbox" name="rememberMe" id="rememberMe" checked={values.rememberMe} onChange={handleChange} />
        Remember Me
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
