import { useState } from "react";
import { Button } from "./styles";
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"


export function SignInButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {
        isLoggedIn == false ? 
        <Button color="#0F9AFE">
          <div>
            <FaGithub className="github"/>
            Sign in with Github
          </div>
        </Button> 
        :
        <Button color="#6610F2">
          <div>
            <FaGithub className="github"/>
            João Vitor Lima
            <FiX className="close" />
          </div>
        </Button>
      }
    </>
  )
}