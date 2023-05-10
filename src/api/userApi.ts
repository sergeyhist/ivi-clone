import axios from "axios";
import {IUser} from "/src/types/IUser";

export const createUser = async (userData: IUser):Promise<void>=>{
  try {
   await axios.post<IUser>("http://85.237.34.125:4000/login",userData);
  } catch (err){
    console.log(err);
  }
}

export const getUserByEmail = async (email: string): Promise<void>=>{
  try{
    await axios.get(`${String(process.env.SERVER_HOST)}/users/${email}`)
  }catch (err){
    console.log(err);
  }
}