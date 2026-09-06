import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * Absolute base for canonical/OpenGraph URLs.
 *
 * Set NEXT_PUBLIC_SITE_URL to the custom domain in the Vercel project settings.
 * Without it, Vercel's own production URL is used at build time.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Rajni Kant Roy | Enterprise Technologist & Salesforce Architect',
  description:
    '11+ Years of Salesforce Development, Architecture & Leadership in Telecom, Media, and Airlines domains. Experienced in Salesforce Industries, OmniStudio, CPQ, AWS, and AI Integrations.',
  keywords: [
    'Rajni Kant Roy',
    'Enterprise Technologist',
    'Salesforce Architect',
    'Salesforce Technical Architect',
    'OmniStudio Developer',
    'Salesforce CPQ',
    'Vlocity',
    'LWC',
    'Pune',
    'Salesforce Lead',
  ],
  authors: [{ name: 'Rajni Kant Roy', url: 'https://github.com/rajnikantroy' }],
  openGraph: {
    title: 'Rajni Kant Roy | Enterprise Technologist & Salesforce Architect',
    description:
      '11+ Years of Salesforce Development, Architecture & Leadership in Telecom, Media, and Airlines domains.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rajni Kant Roy Portfolio',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}