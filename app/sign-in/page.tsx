/* eslint-disable @next/next/no-img-element */
import AuthForm from './components/AuthForm'

const Signin = () => {

    return (
        <>
            <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-center">
                <div className="bg-gray-900 w-full h-full bg-opacity-50">
                    <nav className="px-12 py-5 flex justify-center lg:justify-start">
                        <img src="/images/logo.png" alt="logo" className='h-12' />
                    </nav>
                    <AuthForm />
                </div>

            </div>
        </>
    )
}

export default Signin
