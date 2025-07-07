import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Resturant",
  description:
    "Explore delicious dishes, manage menus, and streamline your dining experience with our modern restaurant app.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
