import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Out Services in Dubai & UAE",
  description:
    "Design development, turnkey fit-outs, MEP, joinery and authority approvals for restaurants, retail, wellness and offices across the UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}