import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api";
import "../../index.css";
import { FormValues, User } from "../../types/types";
import Button from "../button/Button";
import Arrow from "/Arrow.svg";
import Loading from "/i24-loader.svg";

interface Props {
    onUser: (user: User | null) => void;
    user: User | null;
}

const LoginForm = ({ onUser, user }: Props) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ mode: "onBlur" });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        setLoading(true);
        const res = await login(data);
        onUser(res);
        setLoading(false);

        // .then((res) => {
        //     onUser(res);
        //     console.log(res);
        // })
    };

    return (
        <div>
            <form
                className="flex-center gap-40"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex-start">
                    <input
                        className={`input ${errors.email && "inputError"}`}
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="errorMessage ">{errors.email.message}</p>
                    )}
                </div>
                <div className="flex-start">
                    <input
                        className={`input ${errors.password && "inputError"}`}
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must have at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="errorMessage">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                {loading ? (
                    <Button leftIcon={Loading} />
                ) : (
                    <Button title="Login" rightIcon={Arrow} />
                )}
            </form>
        </div>
    );
};

export default LoginForm;
