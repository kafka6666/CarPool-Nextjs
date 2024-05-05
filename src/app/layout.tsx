import Navbar from "@/components/Navbar";
import { UserSessionContextProvider } from "@/context/UserSessionContext";
import "@mantine/carousel/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarLink",
  description: "Rent cars for your office. Hop in, Ride on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <UserSessionContextProvider>
            <Navbar />
            {children}
          </UserSessionContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
