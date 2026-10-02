import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "./components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://litastech.in"),

  title: {
    default: "Litas Technologies | Web, Mobile & AI Solutions",
    template: "%s | Litas Technologies",
  },

  description:
    "Litas Technologies builds web applications, mobile applications, CRM solutions and AI automation solutions for service businesses.",

  applicationName: "Litas Technologies",

  keywords: [
    "Litas Technologies",
    "LitasTech",
    "web application development",
    "mobile application development",
    "AI automation",
    "CRM software",
    "business software",
    "salon software",
    "beauty parlour software",
  ],

  authors: [{ name: "Litas Technologies" }],
  creator: "Litas Technologies",
  publisher: "Litas Technologies",

  alternates: {
    canonical: "https://litastech.in/",
  },

  openGraph: {
    title: "Litas Technologies | Web, Mobile & AI Solutions",
    description:
      "Web applications, mobile applications, CRM solutions and AI automation for service businesses.",
    url: "https://litastech.in/",
    siteName: "Litas Technologies",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Litas Technologies | Web, Mobile & AI Solutions",
    description:
      "Web applications, mobile applications, CRM solutions and AI automation for service businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
