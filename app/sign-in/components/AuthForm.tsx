'use client';

import axios from "axios";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
// import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

import InputNew from "@/app/components/InputNew";
import { toast } from "react-hot-toast";
import AuthSocialButton from "./AuthSocialButton";

//Variable Global
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/profiles')
        }
    }, [session?.status, router]);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
                .then(() => signIn('credentials', {
                    ...data,
                    redirect: false,
                }))
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok) {
                        router.push('/profiles')
                    }
                })
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok) {
                        router.push('/profiles')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials!');
                }

                if (callback?.ok) {
                    router.push('/profiles')
                }
            })
            .finally(() => setIsLoading(false));
    }


    return (
        <div className="flex justify-center">
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-lg rounded-md w-full'>
                <h2 className='text-4xl text-white mb-8 font-semibold'>
                    {variant === 'LOGIN' ? 'Sig in' : 'Register'}
                </h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-4'>
                            {variant === 'REGISTER' && (
                                <InputNew
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="name"
                                    label="Name"
                                />
                            )}
                            <InputNew
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="email"
                                label="Email address"
                                type="email"
                            />

                            <InputNew
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="password"
                                label="Password"
                                type="password"
                            />

                        </div>

                        <button disabled={isLoading} type="submit" className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'LOGIN' ? 'Login' : 'Sign up'}
                        </button>
                    </form>
                </div>
                <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                    {/* <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                        <FcGoogle size={32} />
                    </div>
                    <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                        <FaGithub size={32} />
                    </div> */}

                    <AuthSocialButton
                        icon={BsGoogle}
                        onClick={() => socialAction('google')}
                    />
                    {/* <AuthSocialButton
                        icon={BsGithub}
                        onClick={() => socialAction('github')}
                    /> */}

                </div>

                <p className='text-neutral-500 mt-12'>
                    {variant === 'LOGIN' ? 'First time using Wolflix?' : 'Already have an account'}
                    <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                        {variant == 'LOGIN' ? 'Create an account' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AuthForm
