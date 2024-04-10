import Card from "@mui/material/Card";

import { Field, ErrorMessage, Formik, Form } from "formik";
import AuthorService from "../service/AuthorService";
import { useNavigate } from "react-router";
import NavBar from "../molecules/NavBar";

const CreateAuthor = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <NavBar />
      <Formik
        initialValues={{
          author_name: "",
          birth_date: "",
        }}

          
          validate={(values) => {
            const errors: { author_name?: string; birth_date?: number } = {};
          
            if (!values.author_name) {
              errors.author_name = "Required";
            }
            return errors;
          }}
          


        onSubmit={(values) => {
          console.log(values)
          
          AuthorService().postAuthor(values).then(() => (navigate(`/author`,{replace:true} ))).catch(); 
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            
            <Card
              sx={{
                maxWidth: 800,
                margin: "0 auto",
                padding: 5,
                height: 500,
                marginY: 12,
                textAlign: "left",
                backgroundColor: "beige",
              }}
            >
                <label htmlFor="author_name">
                  <br />
                  <br />
                  author name: 
                  <br />
                </label>
                <Field type="author_name" name="author_name" />
                <ErrorMessage name="author_name" component="div" />
                <label htmlFor="birth_date">
                  <br />
                  <br />
                  birth date: 
                  <br />
                </label>
                <Field type="birth_date" name="birth_date" />
                <ErrorMessage name="birth_date" component="div" />
                <br />
                <button className="submitName" type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </button>
            </Card>
          </Form>
        )}
      </Formik> 
    </>
  );
};

export default CreateAuthor;