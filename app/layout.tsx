import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import Modal from "./components/modals/Modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "WanderStay",
  description: "WanderStay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
          <Modal
            isOpen
            title="Hello World"
            secondaryActionLabel="Cancel"
            actionLabel="Submit"
          />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
