import styled from "styled-components";

export const Container = styled.main`
  background: var(--white-400);
  //height: 600px;
  
  section {
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      h2 {
        color: var(--gray-200);
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 3rem;

        span {
          color: var(--blue)
        }
      }
    }
  }

  
`