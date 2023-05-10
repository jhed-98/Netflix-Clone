import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// Esta función se puede marcar como `async` si se usa `await` dentro
export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_JWT_SECRET });
  // Informacion sobre el usuario
  // console.log(session);

  if (!session) {
    const requestPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/sign-in`;
    url.search = `p=${requestPage}`;

    return NextResponse.redirect(url);
  }

  // return NextResponse.redirect(new URL('/home', req.url));
  return NextResponse.next();
}

// export default withAuth({
//   pages: {
//     signIn: "/",
//   },
// });

export const config = {
  matcher: [
    // "/browse/:path*",
    "/profiles",
    // "/films/:path*",
    // "/tvs/:path*",
  ]
};
