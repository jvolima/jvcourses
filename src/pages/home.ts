import styled from "styled-components";

export const Container = styled.main`
  background: var(--white-400);
  //height: 600px;
  
  section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 0.5rem;
    height: 620px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      h2 {
        max-width: 410px;
        color: var(--gray-200);
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 3rem;

        span {
          color: var(--blue)
        }
      }
    }

    @media (max-width: 800px) {
      height: auto;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 2rem;

      div {
        h2 {
          text-align: center;
        }
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      img {
        order: -1
      }
    }
  }

  
`