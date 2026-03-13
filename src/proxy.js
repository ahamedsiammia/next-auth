import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privetRoute = ["/privet", "/dashboard", "/secret"];
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req });
  const isAuthenticated = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  // const isUser = token.role === "user";
  const isPrivet = privetRoute.some((route) => reqPath.startsWith(route));

  if (!isAuthenticated && isPrivet) {
    const loginUrl = new URL("/api/auth/signin", req.url);
    loginUrl.searchParams.set("callbackUrl",reqPath)
    return NextResponse.redirect(loginUrl);
  }

  console.log({ isAuthenticated, reqPath, isPrivet });
  //   return NextResponse.redirect(new URL('/home', req.url))
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/privet/:path*", "/dashboard/:path*", "/secret/:path*"],
};
