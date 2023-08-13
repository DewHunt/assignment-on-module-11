import { Inter } from "next/font/google";
import TopNavbar from "./components/navigations/TopNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assignment",
  description: "this is the assignment for module 11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
