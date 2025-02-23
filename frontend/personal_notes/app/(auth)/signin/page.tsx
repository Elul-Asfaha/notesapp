"use client";
import Navbar from "@/components/navbar/navbar";
import FormConstructor from "@/formConstructor/formConstructor";
import registerSchema from "@/schema/register";
import { signInTypes } from "@/types/formDataTypes";
import { useFormik } from "formik";
import signinData from "@/formData/auth/signin.json";
import { toast } from "sonner";
import { signinEndpoint } from "@/endpoints";

const Page = () => {
    const initialValues = {
        username: "",
        password: "",
    };
    const handleSignUp = async (data: signInTypes) => {
        const { username, password } = data;

        console.log(data);
        try {
            const response = await fetch(signinEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.status === 200) {
                toast.success("");
            }
        } catch (err) {
            console.log(err);
            toast.error("Network Error");
        }
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting,
        touched,
    } = useFormik({
        initialValues: initialValues,
        onSubmit: handleSignUp,
        validationSchema: registerSchema,
    });

    return (
        <div className='min-h-screen w-full flex justify-center items-center px-5 md:px-10'>
            <Navbar />

            <div className='w-full max-w-[900px] max-h-fit min-h-[500px] rounded-lg shadow-lg shadow-slate-300 grid md:grid-cols-2 overflow-clip'>
                <div className='bg-lime-200 px-5 py-10 hidden md:block'></div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className='px-5 py-10 flex flex-col justify-center gap-5'
                >
                    <p className='text-2xl font-semibold text-center'>
                        Sign In
                    </p>

                    <FormConstructor
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        formData={signinData.formFields}
                        button={signinData.button}
                        isSubmitting={isSubmitting}
                    />
                </form>
            </div>
        </div>
    );
};

export default Page;
