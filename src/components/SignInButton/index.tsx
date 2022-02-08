import { useState } from "react";
import { Button } from "./styles";
import { FaGithub } from "react-icons/fa"


export function SignInButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {
        isLoggedIn == false ? 
        <Button>
          <div>
            <FaGithub className="github"/>
            Sign in
          </div>
        </Button> 
        :
        <Button>
          <div>
            <FaGithub className="github"/>
            João Vitor
          </div>
        </Button>
      }
    </>
  )
}