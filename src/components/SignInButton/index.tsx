import { useState } from "react";
import { Button } from "./styles";
import { signIn, signOut, useSession } from "next-auth/react"
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"


export function SignInButton() {
  const { data: session } = useSession();

  return (
    <>
      {
        session ? 
          <Button color="#6610F2">
            <div>
              <FaGithub className="github"/>
              {session.user?.name}
              <FiX onClick={() => signOut()} className="close" />
            </div>
          </Button>
        :
          <Button onClick={() => signIn("github")} color="#0F9AFE">
            <div>
              <FaGithub className="github"/>
              Sign in with Github
            </div>
          </Button>
      }
    </>
  )
}