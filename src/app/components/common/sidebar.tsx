"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavigationBar from "./navigationbar";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const handleChange = () => {
    setOpen(!open);
  };
  const sideLinks = [
    { href: "/", src: "/sidebar/home.svg" },
    { href: "/github", src: "/sidebar/github.svg" },
    { href: "/projects", src: "/sidebar/projects.svg" },
    { href: "/articles", src: "/sidebar/articles.svg" },
    { href: "/contact", src: "/sidebar/contact.svg" },
  ];

  const navLinks = [
    { name: "home.jsx", href: "/", src: "/images/reactlogo.svg" },
    { name: "about.html", href: "/about", src: "/images/htmllogo.svg" },
    { name: "contact.css", href: "/contact", src: "/images/csslogo.svg" },
    { name: "projects.js", href: "/projects", src: "/images/jslogo.svg" },
    { name: "articles.json", href: "/articles", src: "/images/json.png" },
    { name: "github.md", href: "/github", src: "/images/markdown.png" },
  ];
  const route = usePathname();
  const activeLink = sideLinks.find((link) => link.href === route);
  return (
    <div className="w-72 h-[92vh] flex ">
      <div className="flex flex-col">
        {sideLinks.map((link) => {
          return (
            <Link
              href={link.href}
              className={`${
                activeLink === link
                  ? "border-l-2 border-white bg-[#0e1018] "
                  : ""
              } px-3 py-3 w-fit`}
              key={link.href}
            >
              <Image src={link.src} alt="logo" width={26} height={26} />
            </Link>
          );
        })}
      </div>
      <div className="px-5 py-2">
        <h1 className="text-gray-100 ">EXPLORER</h1>
        <div className="mt-3">
          <input
            type="checkbox"
            name="dropdown"
            id="dropdown"
            className="hidden"
            onChange={handleChange}
          />
          <label
            htmlFor="dropdown"
            className="text-gray-100 font-semibold text-sm cursor-pointer space-x-1"
          >
            <Image
              src="/downarrow.png"
              alt="logo"
              width={12}
              height={12}
              className={`inline-block mb-1 ${
                open ? "" : "-rotate-90"
              } transition-all transform`}
            />
            <span className="inline-block">PORTFOLIO</span>
          </label>
          {open && (
            <div className="mt-2 space-y-1">
              {navLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    className="flex items-center justify-start px-2  text-sm bg-opacity-90 text-white space-x-1"
                    key={link.name}
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
