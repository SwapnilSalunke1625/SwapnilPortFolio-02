"use client";
import { Moon, Sun } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar.jsx";
import { useState } from "react";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "Education",
      link: "#Education",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Achievement",
      link: "#Achievement",
    },
    {
      name: "Experience",
      link: "#Experience",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="
    px-2 py-2 rounded-full
    bg-gray-50 text-gray-600
    shadow-md hover:shadow-lg
    transition-all duration-300 ease-out
    cursor-pointer
    flex items-center justify-center
    hover:-translate-y-1 hover:scale-110
    active:scale-125 active:shadow-xl
  "
            >
              {theme === "light" ? (
                <Sun className="size-5 transition-all duration-300 ease-out active:scale-110 cursor-pointer" />
              ) : (
                <Moon className="size-5 transition-all duration-300 ease-out active:scale-110 cursor-pointer" />
              )}
            </button>

            <NavbarButton variant="primary">Connect</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              {/* Theme Toggle for Mobile */}
              <div className="w-full flex items-center justify-start">
                {theme === "light" ? (
                  <button
                    onClick={() => setTheme("dark")}
                    className="
         px-2 py-2 rounded-full
        bg-gray-100 text-gray-700
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-out
        cursor-pointer
        flex items-center justify-center
        hover:-translate-y-1 hover:scale-110
        active:scale-125 active:shadow-xl
      "
                  >
                    <Sun className="size-4 transition-all duration-300" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("light")}
                    className="
         px-2 py-2 rounded-full
        bg-gray-50 text-gray-600
        shadow-md hover:shadow-xl
        transition-all duration-300 ease-out
        cursor-pointer
        flex items-center justify-center
        hover:-translate-y-1 hover:scale-110
        active:scale-125 active:shadow-2xl
      "
                  >
                    <Moon className="size-4 transition-all duration-300" />
                  </button>
                )}
              </div>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Connect
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto px-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
