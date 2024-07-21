// src/components/Nav.js
"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const navLinks = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  privacy: { title: "Privacy", url: "/privacy" },
  stats: { title: "Stats", url: "/stats" },
  donate: { title: "Donate", url: "/donate" },
  X: { title: "X", url: "https://twitter.com/bodycalculator" },
};

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky bottom-0 w-full">
      <ul className="flex justify-evenly">
        {Object.entries(navLinks).map(([key, link]) => (
          <li key={key} className="text-white">
            {key === "X" ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
            ) : (
              <Link href={link.url} className="hover:underline">
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
