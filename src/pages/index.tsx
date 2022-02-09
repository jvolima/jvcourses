import type { GetStaticProps, NextPage } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import { Container } from './home'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home ({ product }: HomeProps) {
  return (
    <Container>
      <section>
        <div>
          <h2>
            Subscribe now to 
            have access to the best 
            <span> courses</span> available on 
            market for only {product.amount} monthly
          </h2>
          <SubscribeButton priceId={product.priceId} />
        </div>
        <img src="/images/boyCoding.svg" alt="Boy coding" />
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KRNTSFZVgbe4PVrsBQvMCQd")

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount as number / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
