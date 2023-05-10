'use client';
/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
const TOP_OFFSET = 66;


const Navbar = () => {
    const session = useSession();
    const router = useRouter();
    const [showBackground, setShowBackground] = useState(false);
    const [access, setAccess] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        if (session?.status === 'authenticated') {
            setAccess(true);
        } else {
            setAccess(false);
            // router.push('/sign-in')
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [session?.status]);


    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row justify-between items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>

                <Link
                    href="/browse" passHref >
                    <img src="/images/logo.png" className="h-9 lg:h-10" alt="Logo" />
                </Link>

                <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                    {(() => {
                        if (access) {
                            return (
                                <button className="bg-red-700 py-2 px-4 rounded-md hover:bg-red-600" onClick={() => signOut()}>Cerrar session</button>
                            )
                        } else {
                            return (
                                <Link
                                    href="/sign-in" passHref className="bg-red-700 py-2 px-4 rounded-md hover:bg-red-600">
                                    Iniciar Session
                                </Link>
                            )
                        }
                    })()}

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
