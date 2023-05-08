'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {
    return (
        <div>
            Profiles

            <button className="bg-gray-200 p-4" onClick={() => signOut()}>
                Logout
            </button>
        </div>
    )
}

export default page
