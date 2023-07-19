import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    location: Yup.string().required("Location is required"),
    profilePicture: Yup.mixed(),
  });

  // Initial form values
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    location: "",
    profilePicture: null,
  };

  // Handle form submission
  const handleSubmit = (values) => {
    // Save the user data in local storage
    localStorage.setItem("user", JSON.stringify(values));
    // Redirect the user to the landing page after registration
    // Replace "/landing" with the actual route path for your landing page
    // For now, let's redirect to the profile page
    window.location.href = "/profile";
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
      <div className="w-full min-h-[100vh] mb-4 bg-white flex justify-center items-center">
        <div className="w-[70%] lg:w-[30%] bg-primary py-4 px-6 rounded-2xl mt-10 ">
          <h1 className="font-bold text-3xl mb-8 text-white  text-center">
            Register
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="w-full">
                <div className="w-full mb-4">
                  <label
                    htmlFor="firstname"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Firstname:
                  </label>
                  <Field
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="block w-full py-2 px-4 rounded-lg outline-none"
                    placeholder="Enter Firstname"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-light"
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="lastname"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Lastname:
                  </label>
                  <Field
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="block w-full py-2 px-4 rounded-lg outline-none"
                    placeholder="Enter Lastname"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-light"
                  />
                </div>
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
                    htmlFor="phoneNumber"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Phone Number:
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="block w-full py-2 px-4 rounded-lg outline-none"
                    placeholder="Enter Phone Number"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-light"
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="location"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Location:
                  </label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className="block w-full py-2 px-4 rounded-lg outline-none"
                    placeholder="Enter Location"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-light"
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="profilePicture"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Profile Picture:
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    onChange={(event) =>
                      setFieldValue(
                        "profilePicture",
                        event.currentTarget.files[0]
                      )
                    }
                    className="block w-full py-2 px-4 rounded-lg outline-none text-white"
                  />
                  <ErrorMessage
                    name="profilePicture"
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
                <div className="w-full mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="text-white font-bold mb-2 text-lg"
                  >
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="block w-full py-2 px-4 rounded-lg outline-none"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-light"
                  />
                </div>
                  <button
                    type="submit"
                    className="bg-light p-4 mb-4 mt-6 w-full rounded-2xl shadow-2xl font-bold"
                  >
                    Register
                  </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
