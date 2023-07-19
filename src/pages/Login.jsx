import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    // Check if the email and password match any stored user data
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (
      storedUserData &&
      storedUserData.email === values.email &&
      storedUserData.password === values.password
    ) {
      // Successful login, redirect to the profile page
      // Replace "/profile" with the actual route path for your profile page
      window.location.href = "/profile";
    } else {
      // Failed login, show an error message
      alert("Invalid email or password");
    }
  };

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <div className="h-20 fixed  w-full bg-white py-2 px-6 flex justify-between items-center  z-50 shadow-2xl">
        <Link to="/">
          <h1 className="font-bold text-lg lg:text-3xl title text-primary cursor-pointer">
            Luxe
          </h1>
        </Link>

        <div className="flex justify-between w-[210px]"></div>
      </div>
      <div className="w-full h-[100vh] bg-white  flex justify-center items-center">
        <div className="w-[70%] lg:w-[30%] bg-primary py-4 px-6 rounded-2xl ">
          <h1 className="font-bold text-3xl mb-8 text-white  text-center">
            Login
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="text-white font-bold mb-2 text-lg"
                >
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full py-2 px-4 rounded-lg outline-none"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-light"
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="password"
                  className="text-white font-bold mb-2 text-lg"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full py-2 px-4 rounded-lg outline-none"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-light"
                />
              </div>

              <button
                type="submit"
                className="bg-light p-4 mb-4 mt-6 w-full rounded-2xl shadow-2xl font-bold"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
