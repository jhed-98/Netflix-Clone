/* eslint-disable @next/next/no-img-element */
"use client"; // this is a client component 👈🏽

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Input from '../components/Input'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Signin = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            // router.push('/profiles');
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        <>
            <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-center">
                <div className="bg-gray-900 w-full h-full bg-opacity-50">
                    <nav className="px-12 py-5 flex justify-center lg:justify-start">
                        <img src="/images/logo.png" alt="logo" className='h-12' />
                    </nav>
                    <div className="flex justify-center">
                        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-lg rounded-md w-full'>
                            <h2 className='text-4xl text-white mb-8 font-semibold'>
                                {variant === 'login' ? 'Sig in' : 'Register'}
                            </h2>
                            <div className='flex flex-col gap-4'>
                                {variant === 'register' && (
                                    <Input
                                        disabled={isLoading}
                                        label="Username"
                                        onChange={(e: any) => { setName(e.target.value) }}
                                        id='name'
                                        value={name}
                                    />
                                )}
                                <Input
                                    disabled={isLoading}
                                    label="Email"
                                    onChange={(e: any) => { setEmail(e.target.value) }}
                                    id='email'
                                    type='email'
                                    value={email}
                                />

                                <Input
                                    disabled={isLoading}
                                    label="Password"
                                    onChange={(e: any) => { setPassword(e.target.value) }}
                                    id='password'
                                    type='password'
                                    value={password}
                                />

                            </div>

                            <button onClick={variant === 'login' ? login : register} disabled={isLoading} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                                {variant === 'Login' ? 'Login' : 'Sign up'}
                            </button>

                            <p className='text-neutral-500 mt-12'>
                                {variant === 'login' ? 'First time using Wolflix?' : 'Already have an account'}
                                <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                    {variant == 'login' ? 'Create an account' : 'Login'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signin
