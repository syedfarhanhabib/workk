import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import {
    // ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import ThemeSwitch from './theme'

const Navbar = () => {
    return (
        <header className='fixed w-full flex items-center justify-between px-5 py-2' >

            <nav className='flex items-center gap-3'>
                <Link href={"/"} className='font-bold' >Workk</Link>
                <div className='w-[1px] h-3 bg-muted ml-3' />
                <Button variant={"ghost"}><Link href={"/"}>Talent</Link></Button>
                <Button variant={"ghost"}><Link href={"/companies"}>Companies</Link></Button>
                <Button variant={"ghost"}><Link href={"/jobs"}>Jobs</Link></Button>
            </nav>
            <nav className="flex items-center gap-3">
                {/* <ThemeSwitch defaultTheme='light'/> */}
                <Button variant={"outline"}>
                    <SignInButton />
                </Button>
                <Button>
                    <UserButton />
                </Button>
            </nav>
        </header>
    )
}

export default Navbar