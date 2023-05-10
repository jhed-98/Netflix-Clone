import getCurrentUser from "../actions/getCurrentUser";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

export default async function ProfilesLayout({
    children
}: {
    children: React.ReactNode,
}) {
    const currentUser = await getCurrentUser();

    return (
        //   @ts-expect-error Server Component   
        <UserCard>
            <UserList currentUser={currentUser!} />
            {children}
        </UserCard>

    );
}
