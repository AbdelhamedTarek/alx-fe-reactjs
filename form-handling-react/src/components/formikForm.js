import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted successfully:", values);
          alert("Registration successful!");
          resetForm(); // Clear the form after submission
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage
                name="username"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage
                name="email"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage
                name="password"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ padding: "10px 20px" }}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
