import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { User} from "./types/types";

function App() {
    const [user, setUser] = useState<User| null>(null);
    console.log(user);
    const handleUser = (user: User | null): void => {
        setUser(user);
    };

    return (
        <div className="background">
          <div style={{position:"absolute",top:"32px"}}>

          <img  src="/Mercury-logotype.png" alt="" />
          </div>
            {user != null && !user.hasOwnProperty('error') ? (
                <ProfileScreen  onUser={handleUser} user={user}/>
                ) : (
                    <LoginScreen onUser={handleUser} user={user} />
            )}
        </div>
    );
}

export default App;
