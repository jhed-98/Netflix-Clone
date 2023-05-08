import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopNavbar from "./DesktopNavbar";

async function Navbar({ children }: {
    children: React.ReactNode,
}) {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <DesktopNavbar currentUser={currentUser!} />
            {children}
        </div>
    )
}

export default Navbar;