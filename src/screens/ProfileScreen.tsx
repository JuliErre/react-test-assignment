import React from "react";
import Profile from "../components/profile/Profile";
import { ErrorResponse, User } from "../types/types";
import {joinClassNames} from "../utils/joinClassNames";
interface Props {
  onUser: (user: User | null) => void;
  user: User ;
}

const ProfileScreen = ({ onUser, user }: Props) => {

    const  profileContainerStyle : string = joinClassNames(["container","flex-center", "gap-32 ","padding-profile"]);

    return (
        <>
            <div className={profileContainerStyle}>
                <Profile onUser={onUser} user={user} />
            </div>
        </>
    );
};

export default ProfileScreen;
