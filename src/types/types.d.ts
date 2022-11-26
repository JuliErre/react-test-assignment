export interface FormValues  {
    email: string,
    password: string;
}


export interface User {
  data: {
    avatar: string;
    name: string;
  }
  error?:string;
  }
  
 export interface ErrorResponse {
    error: string
  }