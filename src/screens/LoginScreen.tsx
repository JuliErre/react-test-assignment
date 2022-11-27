import React from "react";
import LoginForm from "../components/login/LoginForm";
import { User } from "../types/types";
import { joinClassNames } from "../utils/joinClassNames";
interface Props {
    onUser: (user: User | null) => void;
    user: User | null;
}

const LoginScreen = ({ onUser, user }: Props) => {
    const loginContainerClass: Array<string> = [
        "container",
        "flex-center",
        "gap-32",
        "padding-login",
    ];
    const flexStyle: Array<string> = ["flex-center", "gap-4"];
    return (
        <>
            <div className={joinClassNames(loginContainerClass)}>
                <div className={joinClassNames(flexStyle)}>
                    <h5 className={joinClassNames(["title"])}>Welcome, Stranger!</h5>
                    <p className={joinClassNames(['description'])}>
                        Please log in to this form if you wish to pass the exam
                    </p>
                </div>
                <LoginForm onUser={onUser}  />
            </div>
        </>
    );
};

export default LoginScreen;
