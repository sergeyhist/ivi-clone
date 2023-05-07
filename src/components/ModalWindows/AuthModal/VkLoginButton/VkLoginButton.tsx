import {FC, MouseEvent} from "react";
import {SocialIcon} from "react-social-icons";
import styles from "./VkLoginButton.module.sass";

const VkLoginButton:FC = ()=>{
  const cbLink = `http://localhost:3000/en`;
  const clientId = process.env.REACT_APP_VK_AUTH_CLIENT_ID;

  const handleRedirect = (e: MouseEvent):void=>{
    e.preventDefault()
    if(!clientId){
      console.error("REACT_APP_VK_AUTH_CLIENT_ID is undefined");
      return;
    }
    window.open(`https://oauth.vk.com/authorize?client_id=${clientId}&display=popup&redirect_uri=${cbLink}&scope=email&response_type=code&v=5.120&state=4194308`);
  }

  return(
      <SocialIcon onClick={handleRedirect} className={styles.icon} url="https://vk.com/feed" target="_blank" fgColor="white"/>
  )
}

export default VkLoginButton;
