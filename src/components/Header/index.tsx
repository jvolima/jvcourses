import { SignInButton } from "../SignInButton";
import { Container } from "./styles";


export function Header() {
  return (
    <Container>
      <h2>JGcourses</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <SignInButton />
      </div>
    </Container>
  )
}