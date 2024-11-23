import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

// https://dbtek.medium.com/add-code-formatting-with-prettier-to-next-js-project-b53c93ffdf91 Auto format setup

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'StoreIt',
  description: 'Store It - the only solution to store your data.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
