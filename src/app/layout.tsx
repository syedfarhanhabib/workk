// // database pass: W5sC8AWmznzrbWfp
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { Inter, Urbanist } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/ui/navbar'
import { dark } from '@clerk/themes';

const urbanist = Urbanist({ subsets: ["latin"] });

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"} appearance={{ baseTheme: dark }}>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <body className={`${urbanist.className}`} >
            <Navbar />
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}