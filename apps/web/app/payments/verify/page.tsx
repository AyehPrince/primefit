import { Suspense } from "react"
import VerifyPaymentContent from "./VerifyPaymentContent"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPaymentContent />
    </Suspense>
  )
}