import * as Yup from "yup";
const signInSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Please insert atleast 3 characters.")
        .required("Username is required."),
    password: Yup.string().required("Password is required."),
});

export default signInSchema;
