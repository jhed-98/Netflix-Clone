'use client'
import { useRouter } from "next/navigation";
import { useCallback } from "react";

async function UserCard({ children }: {
    children: React.ReactNode,
}) {
    const router = useRouter();

    const selectProfile = useCallback(() => {
        router.push('/browse');
    }, [router]);

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => selectProfile()}>
                        {/* <DesktopNavbar currentUser={currentUser!} /> */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;