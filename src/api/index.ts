
import { FormValues} from '../types/types'
export function login({ email , password} : FormValues) : Promise<any>{
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      }
      if(email === "jessica@mercdev.com" && password === "facebook"){
        resolve({data: {avatar : "/avatar2.jpg", name:"Jessica"}});
      }
      else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
