'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { Component, useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar';

export default function Home() {
    const session = useSession();
    const router = useRouter();
    const [access, setAccess] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            setAccess(true);
        } else {
            setAccess(false);
            // router.push('/sign-in')
        }
    }, [session?.status, router]);

    return (
        <>
            {!access && (
                <div>
                    <p>
                        Home
                    </p>
                </div>

            )}
            {access && (
                <div>
                    <p>
                        Hello user
                    </p>
                </div>

            )}
        </>
    )
}
