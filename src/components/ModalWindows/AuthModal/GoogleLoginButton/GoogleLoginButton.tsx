import { FC } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: FC = () => {
  // const [ user, setUser ] = useState();
  // const [profile,setProfile] = useState([]);
  // useEffect(()=>{
  //   if(user){
  //     console.log(jwtDecode(user.credential));
  //   }
  // },[user]);

  const success = (a: CredentialResponse): void => {
    console.log(a);
    //setUser(a);
  };
  const err = (): void => {
    console.log("error");
  };
  return (
    <GoogleLogin
      onSuccess={success}
      onError={err}
      type="icon"
      useOneTap={true}
      theme="filled_blue"
      shape="circle"
    />
  );
};

export default GoogleLoginButton;
