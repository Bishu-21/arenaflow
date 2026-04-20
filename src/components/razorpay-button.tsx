"use client";

import { useState } from "react";
import Script from "next/script";

export function RazorpayButton({
  amount,
  className,
  children,
}: {
  amount: number;
  className: string;
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "ArenaFlow Inc.",
        description: "Deploy Omniscient Infrastructure",
        order_id: order.id,
        handler: function (response: any) {
          alert(
            `Infrastructure Deployment Initiated! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        theme: {
          color: "#0058bd",
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initialize payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button onClick={handlePayment} disabled={loading} className={className}>
        {loading ? "Processing..." : children}
      </button>
    </>
  );
}
