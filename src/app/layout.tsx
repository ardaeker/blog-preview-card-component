import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "@/styles/tailwind.css";
import clsx from "clsx";

const figtree = Figtree({ subsets: ["latin"] });

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F4D04E",
};

export const metadata: Metadata = {
  title: "Arda Eker - Blog Preview Card Component",
  description:
    "This is a solution to the Blog Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
  metadataBase: new URL("fm-2024-blog-preview-card-component.vercel.app/"),
  openGraph: {
    title: "Arda Eker - Blog Preview Card Component",
    description:
      "This is a solution to the Blog Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    url: "fm-2024-blog-preview-card-component.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Arda Eker - Blog Preview Card Component",
    description:
      "This is a solution to the Blog Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={clsx("antialiased", figtree.className)} lang="en">
      <body>{children}</body>
    </html>
  );
}
