import type { NextPage } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import { Container } from './home'

const Home: NextPage = () => {
  return (
    <Container>
      <section>
        <div>
          <h2>
            Subscribe now to 
            have access to the best 
            <span> courses</span> available on 
            market for only $25 monthly
          </h2>
          <SubscribeButton />
        </div>
        <img src="/images/boyCoding.svg" alt="Boy coding" />
      </section>
    </Container>
  )
}

export default Home
