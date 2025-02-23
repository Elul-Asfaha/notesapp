import * as Yup from "yup";
const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please insert a valid email address.")
        .required("Email is required."),
    username: Yup.string()
        .min(3, "Please insert atleast 3 characters.")
        .required("Username is required."),
    password: Yup.string().required("Password is required."),
});

export default registerSchema;
