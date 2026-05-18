import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/ui";

export const metadata: Metadata = {
  title: "PureFlow Verified Impact System",
  description: "Mock-data MVP for PureFlow Amanzi rollout, follow-up, evidence, and funder reporting."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Shell>{children}</Shell></body></html>;
}
