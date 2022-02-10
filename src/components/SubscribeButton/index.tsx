import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import { Button } from "./styles";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribeButton() {
    if(!session) {
      signIn("github")
      return
    }

    try {
      const response = await api.post("/subscribe")
      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Button onClick={handleSubscribeButton}>
      Subscribe now
    </Button>
  )
}