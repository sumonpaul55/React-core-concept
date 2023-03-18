/* eslint-disable no-unused-vars */
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";

let signUpSchema = yup.object({
  firstname: yup.string().min(2).max(15).required("Please enter your name"),
  lastname: yup.string(),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(6).required("Please enter your password"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Formikcomponent = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <div className="container mx-auto p-4 flex h-screen items-center justify-center">
      <div className="flex max-w-[800px] mx-auto border p-3 rounded">
        <form onSubmit={handleSubmit}>
          <div className="my-3 flex items-center gap-x-4 justify-between  border p-8 shadow">
            <label htmlFor="firstname">Frist name </label>
            <div className="relative">
              <input
                className="md:w-[300px] p-2 outline-none py-1 rounded border"
                type="text"
                autoComplete="off"
                name="firstname"
                placeholder="First name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname ? <p className="text-red-500 absolute bottom-100 right-0">{errors.firstname}</p> : null}
            </div>
          </div>
          <div className="my-3 flex items-center gap-x-4 justify-between  border p-8 shadow">
            <label htmlFor="lastname">Last name </label>
            <input
              className="md:w-[300px] p-2 outline-none py-1 rounded border"
              type="text"
              autoComplete="off"
              name="lastname"
              placeholder="Name"
              id="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
          </div>
          <div className="my-3 flex items-center gap-x-4 justify-between  border p-8 shadow">
            <label htmlFor="email">Email address</label>
            <div className="ralative">
              <div className="relative">
                <input
                  className="md:w-[300px] p-2 outline-none py-1 rounded border"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? <p className="text-red-500 absolute bottom-100 right-0">{errors.email}</p> : null}
              </div>
            </div>
          </div>
          <div className="my-3 flex items-center gap-x-4 justify-between  border p-8 shadow">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                className="md:w-[300px] p-2 outline-none py-1 rounded border"
                type="password"
                autoComplete="off"
                name="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? <p className="text-red-500 absolute bottom-100 right-0">{errors.password}</p> : null}
            </div>
          </div>
          <div className="my-3 flex items-center gap-x-4 justify-between  border p-8 shadow">
            <label htmlFor="Confirm_password">Confirm password</label>
            <div className="relative">
              <input
                className="md:w-[300px] p-2 outline-none py-1 rounded border"
                type="password"
                autoComplete="off"
                name="confirm_password"
                placeholder="Confirm password"
                id="Confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
              />
              {errors.confirm_password && touched.confirm_password ? <p className="text-red-500 absolute bottom-100 right-0">{errors.confirm_password}</p> : null}
            </div>
          </div>
          <input className="outline-none py-1 rounded border ml-auto block px-7 cursor-pointer bg-indigo-500 text-white" type="submit" id="Confirm" />
        </form>
        <div className="bg-indigo-400"></div>
      </div>
    </div>
  );
};

export default Formikcomponent;
