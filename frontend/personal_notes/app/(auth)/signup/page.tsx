"use client";
import Navbar from "@/components/navbar/navbar";
import registerSchema from "@/schema/register";
import { registerTypes } from "@/types/formDataTypes";
import { useFormik } from "formik";

import signupData from "@/formData/auth/signup.json";
import FormConstructor from "@/formConstructor/formConstructor";
import { toast } from "sonner";
import { signupEndoint } from "@/endpoints";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };
    const handleSignUp = async (data: registerTypes) => {
        const { username, email, password } = data;

        try {
            const response = await fetch(signupEndoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            const result = await response.json();
            if (response.status === 201) {
                toast.success("Registration Successful");
                router.push("/signin");
            } else {
                toast.error(result.error);
            }
        } catch (err) {
            toast.error("Network Error");
            console.log(err);
        }
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: initialValues,
        onSubmit: handleSignUp,
        validationSchema: registerSchema,
    });

    // const URL = process.env.NEXT_PUBLIC_API_URL + "/users" || "";

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
                        Sign Up
                    </p>
                    <FormConstructor
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        formData={signupData.formFields}
                        button={signupData.button}
                        isSubmitting={isSubmitting}
                    />
                </form>
            </div>
        </div>
    );
};

export default Page;
