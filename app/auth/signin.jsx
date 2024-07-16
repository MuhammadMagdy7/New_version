// 'use client';

// import { getProviders, signIn } from 'next-auth/react';
// import { useEffect, useState } from 'react';

// export default function SignIn() {
//   const [providers, setProviders] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       setProviders(res);
//     })();
//   }, []);

//   if (!providers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold">تسجيل الدخول</h1>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             تسجيل الدخول باستخدام {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


// // import { useState } from 'react';
// // import { signIn } from 'next-auth/react';

// // const SignIn = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const result = await signIn('credentials', {
// //       redirect: false,
// //       email,
// //       password,
// //     });

// //     if (result.error) {
// //       setError(result.error);
// //     } else {
// //       setError('');
// //       // Redirect to another page if needed
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-4xl font-bold">تسجيل الدخول</h1>
// //       {error && <p className="text-red-500">{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="email">البريد الإلكتروني</label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password">كلمة المرور</label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">تسجيل الدخول</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignIn;
