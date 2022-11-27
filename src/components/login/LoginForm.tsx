import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api";
import "../../index.css";
import { ErrorResponse, FormValues, User } from "../../types/types";
import Button from "../button/Button";
import Arrow from "/Arrow.svg";
import Loading from "/i24-loader.svg";
import Cross from "/Unionx.svg";
import { joinClassNames } from "../../utils/joinClassNames";

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
        setError,
    } = useForm<FormValues>({ mode: "onChange" });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        try {
            setLoading(true);
            const res = await login(data);
            if (!res.hasOwnProperty("error")) {
                onUser(res);
            } else {
                setError("email", { type: "manual", message: res.error });
                setError("password", { type: "manual", message: res.error });
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form
                className={joinClassNames(["flex-center", "gap-40"])}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={joinClassNames(["flex-start"])}>
                    <input
                        className={joinClassNames([
                            "input",
                            errors.email && "inputError",
                        ])}
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
                        <>
                            <img className="cross" src={Cross} alt="" />
                            <p className="errorMessage ">
                                {errors.email.message}
                            </p>
                        </>
                    )}
                </div>
                <div className={joinClassNames(["flex-start"])}>
                    <input
                        className={joinClassNames([
                            "input",
                            errors.password && "inputError",
                        ])}
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
                        <>
                            <img className="cross" src={Cross} alt="" />
                            <p className="errorMessage">
                                {errors.password.message}
                            </p>
                        </>
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
