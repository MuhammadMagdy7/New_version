// "use client";
// import React from "react";
// import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";
 
// const Navbar = () => {
//     const { data: session }: any = useSession();
//     return (
//         <div className="navbar bg-base-100">
//             <div className="flex-1">
//                 <a className="btn btn-ghost text-xl">Cairocoders</a>
//                 <Link href="/">
//                     Home
//                 </Link>
//             </div>
//             <div className="flex-none">
//                 {!session ? (
//                     <>
//                         <Link href="/login" className="btn btn-primary">
//                             Login
//                         </Link>
//                         <Link href="/register" className="btn btn-secondary ml-2">
//                             Register
//                         </Link>
//                     </>
//                 ) : (
//                     <>
//                         {session.user?.email}
//                             <div className="dropdown dropdown-end">
//                                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                     <div className="w-10 rounded-full">
//                                         <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                                     </div>
//                                 </div>
//                                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                     <li>
//                                         <a className="justify-between">
//                                             Profile
//                                             <span className="badge">New</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                     <Link href="/dashboard">
//                             Dashboard
//                         </Link>
//                                     </li>
//                                     <li>
//                                         <button
//                                             onClick={() => {
//                                                 signOut();
//                                             }}
//                                         >
//                                             Logout
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
 
// export default Navbar;