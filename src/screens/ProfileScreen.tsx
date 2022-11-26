import React from "react";
import Profile from "../components/profile/Profile";
import { ErrorResponse, User } from "../types/types";
interface Props {
  onUser: (user: User | null) => void;
  user: User ;
}

const ProfileScreen = ({ onUser, user }: Props) => {
    return (
        <>
            <div className="container flex-center gap-32 padding-profile ">
                <Profile onUser={onUser} user={user} />
            </div>
        </>
    );
};

export default ProfileScreen;
