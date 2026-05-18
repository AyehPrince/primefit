"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import api from "@/lib/api"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export default function VerifyPaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading")
  const [details, setDetails] = useState<any>(null)

  useEffect(() => {
    const reference = searchParams.get("reference") || searchParams.get("trxref")
    if (!reference) {
      setStatus("failed")
      return
    }

    api.get(`/payments/verify/${reference}`)
      .then((res) => {
        if (res.data.verified) {
          setStatus("success")
          setDetails(res.data)
        } else {
          setStatus("failed")
        }
      })
      .catch(() => setStatus("failed"))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-orange-500 p-3 rounded-xl">
            <Dumbbell className="h-8 w-8 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white">PrimeFit</h1>
            <p className="text-slate-400 text-sm">Payment Verification</p>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          {status === "loading" && (
            <div className="space-y-4">
              <Loader2 className="h-16 w-16 text-orange-500 mx-auto animate-spin" />
              <p className="text-white text-lg font-medium">Verifying payment...</p>
              <p className="text-slate-400 text-sm">Please wait a moment</p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <p className="text-white text-2xl font-bold">Payment Successful!</p>
              {details && (
                <div className="bg-slate-700/50 rounded-lg p-4 text-left space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Member</span>
                    <span className="text-white text-sm font-medium">{details.member?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Amount</span>
                    <span className="text-green-400 text-sm font-bold">
                      {details.currency} {Number(details.amount).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Status</span>
                    <span className="text-green-400 text-sm font-medium">Confirmed</span>
                  </div>
                </div>
              )}
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4"
                onClick={() => router.push("/dashboard/payments")}
              >
                Go to Dashboard
              </Button>
            </div>
          )}

          {status === "failed" && (
            <div className="space-y-4">
              <XCircle className="h-16 w-16 text-red-500 mx-auto" />
              <p className="text-white text-2xl font-bold">Payment Failed</p>
              <p className="text-slate-400 text-sm">
                Something went wrong with your payment. Please try again.
              </p>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4"
                onClick={() => router.push("/dashboard/payments")}
              >
                Back to Payments
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}