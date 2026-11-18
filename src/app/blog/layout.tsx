import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Out Insights & News",
  description:
    "Articles from Portalis Interiors on interior fit-out, design and approvals for restaurants, retail and offices in the UAE.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}