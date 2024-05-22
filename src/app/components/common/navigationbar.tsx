"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavigationBar = ({ className }: { className?: string }) => {
  const navLinks = [
    { name: "home.jsx", href: "/", src: "/images/reactlogo.svg" },
    { name: "about.html", href: "/about", src: "/images/htmllogo.svg" },
    { name: "contact.css", href: "/contact", src: "/images/csslogo.svg" },
    { name: "projects.js", href: "/projects", src: "/images/jslogo.svg" },
    { name: "articles.json", href: "/articles", src: "/images/json.png" },
    { name: "github.md", href: "/github", src: "/images/markdown.png" },
  ];
  const route = usePathname();
  const activeLink = navLinks.find((link) => link.href === route);
  return (
    <div className={`flex ${className}`}>
      {navLinks.map((link) => (
        <div
          key={link.name}
          className={`${
            activeLink === link ? "border-t-2 border-orange-500" : ""
          } text-white flex`}
        >
          <Link
            href={link.href}
            className="flex items-center justify-center px-2 py-1 space-x-2 text-sm w-32 h-8 bg-opacity-90"
          >
            <Image
              className="w-5 h-5"
              src={link.src}
              alt={link.name}
              width={20}
              height={20}
            />
            <span>{link.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
