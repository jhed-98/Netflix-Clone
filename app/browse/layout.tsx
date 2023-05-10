import Navbar from "../components/navbar/Navbar";

export default async function BrowsesLayout({
  children
}: {
  children: React.ReactNode,
}) {

  return (
    // @ts-expect-error Server Component
    <Navbar>
      <div className="">
        {children}
      </div>
    </Navbar>
  );
}
