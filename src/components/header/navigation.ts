export type NavItem = {
  name: string;
  src: string;
};

export type NavItems = NavItem[];


export const NAV_ITEMS: NavItems = [
  { name: "Home", src: "/" },
  { name: "About Us", src: "/about" },
  { name: "Contact Us", src: "/contact-us" },
  { name: "Blog", src: "/blog" },
  { name: "FAQ", src: "/faq" },
];


export const MENU_ITEMS: NavItems = [
  { name: "Home", src: "/" },
  { name: "About Us", src: "/about" },
  { name: "Contact Us", src: "/contact-us" },
  { name: "Blog", src: "/blog" },
  { name: "FAQ", src: "/faq" },
  { name: "Register", src: "/auth/register" },
  { name: "Login", src: "/auth/login" },
];


export const LOGIN_ITEMS: NavItems = [
  { name: "Login", src: "/auth/login" },
  { name: "Register", src: "/auth/register" },
];