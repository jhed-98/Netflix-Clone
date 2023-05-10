import Navbar from "../components/navbar/Navbar";

export default async function BrowsesLayout({
  children
}: {
  children: React.ReactNode,
}) {

  return (
    // @ts-expect-error Server Component
    <Navbar>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6 pb-20">
        {children}
      </div>
    </Navbar>
  );
}
