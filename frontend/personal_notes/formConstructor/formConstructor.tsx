import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const FormConstructor = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    formData,
    isSubmitting,

    button,
}: {
    values: Record<string, string>;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    formData: {
        type: string;
        label: string;
        name: string;
    }[];
    button: string;
    isSubmitting: boolean;
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleConstructForm = (formItem: {
        type: string;
        label: string;
        name: string;
    }) => {
        const { type } = formItem;
        switch (type) {
            case "text":
                return (
                    <div key={formItem.name}>
                        <Label>{formItem.label}:</Label>
                        <Input
                            name={formItem.name}
                            value={values[formItem.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <p className='text-red-500'>
                            {errors[formItem.name] &&
                                touched[formItem.name] &&
                                errors[formItem.name]}
                        </p>
                    </div>
                );
            case "password":
                return (
                    <div key={formItem.name}>
                        <Label>{formItem.label}:</Label>
                        <div className='flex gap-2'>
                            <Input
                                type={showPassword ? "text" : "password"}
                                name={formItem.name}
                                value={values[formItem.name]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <Button
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash />
                                ) : (
                                    <FaRegEye />
                                )}
                            </Button>
                        </div>
                        <p className='text-red-500'>
                            {errors[formItem.name] &&
                                touched[formItem.name] &&
                                errors[formItem.name]}
                        </p>
                    </div>
                );
            default:
                <div>
                    <Label>{formItem.label}:</Label>
                    <Input
                        name={formItem.name}
                        value={values[formItem.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className='text-red-500'>
                        {errors[formItem.name] &&
                            touched[formItem.name] &&
                            errors[formItem.name]}
                    </p>
                </div>;
        }
    };
    return (
        <>
            {formData.map((formItem) => handleConstructForm(formItem))}
            <Button type='submit' disabled={isSubmitting}>
                {button}
            </Button>
        </>
    );
};

export default FormConstructor;
