import { signOut } from 'next-auth/react';
import React from 'react';
import { User } from "@prisma/client";


interface UserListProps {
    currentUser: User;
}

const images = [
    '/images/default-blue.png',
    '/images/default-red.png',
    '/images/default-slate.png',
    '/images/default-green.png'
]

const UserList: React.FC<UserListProps> = ({ currentUser }) => {
    const imgSrc = images[Math.floor(Math.random() * 4)];

    return (
        <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img draggable={false} className="w-max h-max object-contain" src={imgSrc} alt="" />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{currentUser?.name}</div>
        </div>
    )
}

export default UserList;
