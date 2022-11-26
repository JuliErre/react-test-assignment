
import { FormValues, User} from '../types/types'
export function login({ email , password} : FormValues) : Promise<any >{
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
