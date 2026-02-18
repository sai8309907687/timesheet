import { RouterListener } from '@/components/router-listener';
import DefaultLayout from '@/layouts/default-layout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ToastComponent from '../components/toast.comonent';
import '@/styles/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Timesheet',
    description: 'Timesheet',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const themeInitScript = `
    (function() {
      try {
        // Always start with light theme as default
        var finalTheme = 'light';

        document.documentElement.setAttribute('data-theme', finalTheme);
        document.documentElement.classList.remove('dark');
      } catch (e) {}
    })();
  `;

    return (
        <html lang='en' suppressHydrationWarning>
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
