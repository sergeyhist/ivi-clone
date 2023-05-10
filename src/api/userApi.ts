import axios from "axios";
import {IUser} from "/src/types/IUser";

export const createUser = async (userData: IUser):Promise<void>=>{
  try {
   await axios.post<IUser>("http://85.237.34.125:4000/login",userData);
  } catch (err){
    console.log(err);
  }
}

export const getUserByEmail = async (email: string): Promise<IUser | undefined>=>{
  try{
   const response =  await axios.get<IUser>(`${String(process.env.SERVER_HOST)}/users/${email}`,{
     headers:{
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjdiMmJjMTUtZWE0OS00NTNlLWE5MjQtYzBjMzJiMjFjZWUwIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6W3sicm9sZV9pZCI6ImFiMjBhYjU5LThhMjYtNDUwYy04MWYwLTliNWNiZTQ2YjNlNCIsInZhbHVlIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIn1dLCJpYXQiOjE2ODM3MTAyMjAsImV4cCI6MTY4Mzc5NjYyMH0.uy12G3Srn7tIhEFp3e0_kpK-jjc_e_qIz8bzygEe16k',
     }
   });
   return response.data
  }catch (err){
    console.log(err);
  }
}

export const login = async (email: string, password:string):Promise<string | undefined> =>{
  try {
    const data = JSON.stringify({
      "email": email,
      "password": password
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

   const response = await axios.request(config);
   return response.data as string;
  }catch (err){
    console.log(err);
  }
}