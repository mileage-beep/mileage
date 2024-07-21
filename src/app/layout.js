// src/app/layout.js
import React from "react";
import Nav from "../components/Nav";
import "./globals.css"; // Update this path if your global CSS is located elsewhere

export const metadata = {
  title: "Female Mileage Calculator",
  description: "Calculate the mileage of a woman's body count",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between bg-[#fffdd6]">
          <div className="container mx-auto p-4">{children}</div>
          <Nav />
        </div>
      </body>
    </html>
  );
}
