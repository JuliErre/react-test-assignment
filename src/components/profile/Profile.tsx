import React from "react";
import { ErrorResponse, User } from "../../types/types";
import Button from "../button/Button";
import exit from "/exit.svg";

interface Props {
  onUser: (user: User |  null) => void;
  user: User ;
}
const Profile = ({ onUser, user }: Props) => {
    const { avatar, name } = user.data;
    user.data


    const handleLogout = () => {
        onUser(null);
    };
    return (
        <div className="flex-center gap-20">
            <div className="flex-center gap-8">
                <img
                    src={avatar}
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "40px",
                    }}
                    alt=""
                />
                <h5 className="title">That's it, {name}!</h5>
            </div>
            <Button onClick={handleLogout} title='Logout' leftIcon={exit} />
        </div>
    );
};

export default Profile;
