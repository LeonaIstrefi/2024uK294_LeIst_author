import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router/";
import UserService from "../service/UserService";


const Registration = () => {
    const navigate = useNavigate(); 

    return ( 
        <div className="Registration">
           <h2>Registration</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          enableReinitialize
          validate={(values) => {
            const errors: { email?: string } = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            UserService()
              .logIn(values.email, values.password)
              .then((response) => {
                localStorage.setItem("accessToken", response["accessToken"])
                navigate("/author", { replace: true });
              });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <label htmlFor="email">
                <br />
                E-Mail:
                <br />
              </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <label htmlFor="password">
                <br />
                <br />
                Password
                <br />
              </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <br />
              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default Registration;