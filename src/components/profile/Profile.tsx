import React from "react";
import { ErrorResponse, User } from "../../types/types";
import Button from "../button/Button";
import exit from "/exit.svg";
import {joinClassNames} from "../../utils/joinClassNames";

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
        <div className={joinClassNames(["flex-center","gap-20"])}>
            <div className={joinClassNames(["flex-center" ,"gap-8"])}>
                <img
                    src={avatar}
                    className={joinClassNames(["profileImg"])}
                    alt=""
                />
                <h5 className={joinClassNames(["title"])}>That's it, {name}!</h5>
            </div>
            <Button onClick={handleLogout} title='Logout' leftIcon={exit} />
        </div>
    );
};

export default Profile;
