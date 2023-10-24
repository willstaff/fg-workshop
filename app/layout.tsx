import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import "../globals.css";
import Page from "@/components/Page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Next.js app directory workshop</title>
      </head>
      <body className={inter.className}>
        <Page>{children}</Page>
      </body>
    </html>
  );
}