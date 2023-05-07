import {FC, useEffect, useState} from "react";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";

interface GoogleLoginButtonProps{

}

const GoogleLoginButton:FC = ()=>{
  const [ user, setUser ] = useState<any>();
  const [profile,setProfile] = useState([]);
  useEffect(()=>{
    if(user){
      console.log(jwtDecode(user.credential));
    }
  },[user]);

  const success = (a: CredentialResponse):void=>{
    console.log(a);
    setUser(a);
  }
  const err = () :void=>{
    console.log("error");
  }
  return(
    <GoogleLogin onSuccess={success} onError={err} type='icon' useOneTap={true} theme="filled_blue" shape="circle"/>

  )
}

export default GoogleLoginButton;
