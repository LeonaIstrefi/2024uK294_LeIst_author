import { Formik, FormikHelpers, FormikValues } from "formik";
import { useNavigate } from "react-router-dom"

const PostAuthor = () => {
    const navigate = useNavigate(); 

    return ( 
        <>
            <Formik 
            initialValues={{
                author_name: "", 
                birth_date: "",
            }}
            
            validate={(values) => {
                const error: { author_name?: string; birth_date?: string} = {};

                if (!values.author_name){
                    error.birth_date = "Required"; 
                }

                if (!values.birth_date){
                    error.birth_date = "Required";
                }

                if (isNaN(Date.parse(values.birth_date))
                ){
            error.birth_date = "invalide Input";
        }

        return error; 
            }}

            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                AuthorService.postAuthor(values).then(response => (navigate(`/author/${response.id}`, {replace:true}))).catch();

            }}
        
        </>
    )
}