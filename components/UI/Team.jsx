
// import dbConnect from '../../lib/db';
// import Employee from '../../models/Employee';
// const Team = async () => {
//     await dbConnect();
//     const teamMembers = await Employee.find({});
//     console.log("teamMembers", teamMembers)
//     if (!teamMembers.length) return <span></span>;
//   return (
//     <div className="bg-blue-50">
//       <div className="container text-center p-5">
//         <h2 className="text-2xl font-bold mb-2">Our Team</h2>
//         <p className="text-gray-600 mb-5">Lorem ipsum</p>
//         <div className="flex flex-wrap justify-center">
//           {teamMembers ? teamMembers?.map((member, index) => (
//             <div key={index} className="m-2 w-48 text-center">
//               <div className="h-40 overflow-hidden rounded-lg mb-3">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold">{member.name}</h3>
//               <p className="text-gray-500">{member.title}</p>
//               <div className="flex justify-center mt-2 space-x-3">
//                 <a
//                   href={member.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src="img/twitter-icon.png"
//                     alt="Twitter"
//                     className="w-5 h-5"
//                   />
//                 </a>
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src="img/linkedin-icon.png"
//                     alt="LinkedIn"
//                     className="w-5 h-5"
//                   />
//                 </a>
//               </div>
//             </div>
//           )): (<h1>No Data</h1>)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
