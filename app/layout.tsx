import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outfit Switcher"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js" async />
      <html lang="en">
        <body>{ children }</body>
      </html>
    </>
  );
}
