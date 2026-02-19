import { RouterListener } from "@/components/router-listener";
import DefaultLayout from "@/layouts/default-layout";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ToastComponent from "../components/toast.comonent";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timesheet",
  description: "Timesheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    (function() {
      try {
        var finalTheme = 'light';
        var storedTheme = null;

        if (typeof window !== 'undefined') {
          storedTheme = window.localStorage.getItem('AS-THEME');
        }

        if (storedTheme === 'dark' || storedTheme === 'light') {
          finalTheme = storedTheme;
        } else if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          finalTheme = 'dark';
        }

        document.documentElement.setAttribute('data-theme', finalTheme);
        if (finalTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <ToastComponent />
        <RouterListener />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
