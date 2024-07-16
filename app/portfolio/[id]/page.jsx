"use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import moment from "moment";

// import {
// AiFillDelete,
// AiFillHeart,
// AiOutlineComment,
// AiOutlineHeart,
// AiTwotoneCalendar,
// } from "react-icons/ai";
// import { BsFillPencilFill, BsTrash } from "react-icons/bs";

// import demoImage from "@/public/img/demo_image.jpg";
// import Input from "@/components/Input";
// import { deletePhoto } from "@/actions/uploadActions";

// function splitParagraph(paragraph) {
// const MIN_LENGTH = 280;
// const sentences = paragraph.split(". ");

// let currentParagraph = "";
// let paragraphs = [];

// for (let i = 0; i < sentences.length; i++) {
// const sentence = sentences[i];
// const isLastSentence = i === sentences.length - 1;


// if (isLastSentence) {
//   currentParagraph += sentence + " "; // No dot after the last sentence
// } else if (currentParagraph.length + sentence.length + 2 <= MIN_LENGTH) {
//   currentParagraph += sentence + ". ";
// } else {
//   paragraphs.push(<p key={paragraphs.length}>{currentParagraph.trim()}</p>);
//   currentParagraph = sentence + ". ";
// }
// }

// if (currentParagraph) {
// paragraphs.push(<p key={paragraphs.length}>{currentParagraph.trim()}</p>);
// }

// return paragraphs;
// }

// const BlogDetails = ({ params }) => {
// const [blogDetails, setBlogDetails] = useState({});
// const [isDeleting, setIsDeleting] = useState(false);
// const [isLiked, setIsLiked] = useState(false);
// const [blogLikes, setBlogLikes] = useState(0);

// const [commentText, setCommentText] = useState("");
// const [isCommenting, setIsCommenting] = useState(false);
// const [blogComments, setBlogComments] = useState(0);

// const [error, setError] = useState("");
// const [success, setSuccess] = useState("")

// const router = useRouter();
// const { data: session, status } = useSession();

// async function fetchBlog() {
// try {
// const response = await fetch(
// `http://localhost:3000/api/blog/${params.id}`
// );
// const blog = await response.json();
// setBlogDetails(blog);
// setIsLiked(blog?.likes?.includes(session?.user?._id));
// setBlogLikes(blog?.likes?.length || 0);
// setBlogComments(blog?.comments?.length || 0);
// } catch (error) {
// console.log(error);
// }
// }

// useEffect(() => {
// fetchBlog();
// }, []);

// const timeStr = blogDetails?.createdAt;
// const time = moment(timeStr);
// const formattedTime = time.format("MMMM Do YYYY");

// return (
// <section className="container max-w-3xl">


//   <div className="flex flex-col items-center justify-center">
//     <Link href={`/user/${blogDetails?.authorId?._id.toString()}`}>
//       <div className="flex flex-col justify-center items-center py-10">
//         <Image
//           src={
//             blogDetails?.authorId?.avatar?.url
//               ? blogDetails?.authorId?.avatar?.url
//               : demoImage
//           }
//           alt="avatar image"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="w-20 h-20 rounded-full"
//         />

//         <div className="text-center">
//           <p className="text-whiteColor">{blogDetails?.authorId?.name}</p>
//           <p>{blogDetails?.authorId?.designation}</p>
//         </div>
//       </div>
//     </Link>

//     <div className="text-center space-y-3">
//       <h2>{blogDetails?.title}</h2>

//       <p>{blogDetails?.excerpt}...</p>

//       <p className="flex items-center justify-center gap-3">
//         <span className="text-primaryColor">{blogDetails?.category}</span>

//         <span className="flex items-center gap-1">
//           <AiTwotoneCalendar />
//           {formattedTime}
//         </span>
//       </p>

//       <div>
//         <Image
//           src={blogDetails?.image ? blogDetails?.image?.url : demoImage}
//           alt="blog details image"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="w-full h-full rounded-lg py-10"
//         />
//       </div>

//       <div className="text-start">
//         <div className="space-y-5">
//           {blogDetails?.description &&
//             splitParagraph(blogDetails?.description).map(
//               (paragraph, pIndex) => (
//                 <div key={pIndex}>
//                   {pIndex ===
//                     Math.floor(
//                       splitParagraph(blogDetails?.description).length / 2
//                     ) && (
//                     <blockquote className="border-l-4 border-primaryColor border-spacing-6 italic mb-5">
//                       <p className="ml-5">{blogDetails?.quote}</p>
//                     </blockquote>
//                   )}

//                   {paragraph}
//                 </div>
//               )
//             )}
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="py-12">
//     <div className="flex gap-10 items-center text-xl justify-center">
//       <div className="flex items-center gap-1">
//         <p>{blogLikes}</p>

//         {isLiked ? (
//           <AiFillHeart
          
//             size={20}
//             color="#ed5784"
//             cursor="pointer"
//           />
//         ) : (
//           <AiOutlineHeart size={20} cursor="pointer" />
//         )}
//       </div>

//       <div className="flex items-center gap-1">
//         <p>{blogComments}</p>

//         <AiOutlineComment size={20} />
//       </div>
//     </div>
//   </div>

//   <div>
//     {!session?.user && (
//       <h3 className="text-red-500">Kindly login to leave a comment.</h3>
//     )}

//     {session?.user && (
//       <form onSubmit={handleCommentSubmit} className="space-y-2">
//         <Input
//           onChange={(e) => setCommentText(e.target.value)}
//           value={commentText}
//           name="comment"
//           type="text"
//           placeholder="Type message..."
//         />

//         <button type="submit" className="btn">
//           {isCommenting ? "Loading..." : "Comment"}
//         </button>
//       </form>
//     )}

//     {blogDetails?.comments && blogDetails?.comments.length === 0 && (
//       <p>No comments</p>
//     )}

//     {blogDetails?.comments && blogDetails?.comments.length > 0 && (
//       <>
//         {blogDetails.comments.map((comment) => (
//           <div key={comment._id} className="flex gap-3 py-5 items-center">
//             <Image
//               src={comment?.user?.avatar?.url ? comment?.user?.avatar?.url : demoImage}
//               alt="avatar image"
//               width={0}
//               height={0}
//               sizes="100vw"
//               className="w-10 h-10 rounded-full"
//             />

//             <div>
//               <p className="text-whiteColor">{comment?.user?.name}</p>
//               <p>{comment.text}</p>
//             </div>

//             {session?.user?._id === comment?.user?._id && (

//             <BsTrash onClick={() => handleDeleteComment(comment._id)} cursor="pointer" className="text-red-500 ml-10" />
//             )}

//           </div>
//         ))}
//       </>
//     )}
//   </div>
// </section>
// );
// };

// export default BlogDetails;


// BlogDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import moment from "moment";
import { AiFillHeart, AiOutlineHeart, AiTwotoneCalendar } from "react-icons/ai";
import demoImage from "@/public/img/demo_image.jpg";
import Input from "@/components/Input";
import { useBlogs } from "@/context/UserContext";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import moment from "moment";

// import {
// AiFillDelete,
// AiFillHeart,
// AiOutlineComment,
// AiOutlineHeart,
// AiTwotoneCalendar,
// } from "react-icons/ai";
// import { BsFillPencilFill, BsTrash } from "react-icons/bs";

// import demoImage from "@/public/img/demo_image.jpg";
// import Input from "@/components/Input";
// import { deletePhoto } from "@/actions/uploadActions";


function splitParagraph(paragraph) {
  const MIN_LENGTH = 280;
  const sentences = paragraph.split(". ");

  let currentParagraph = "";
  let paragraphs = [];

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const isLastSentence = i === sentences.length - 1;

    if (isLastSentence) {
      currentParagraph += sentence + " "; // No dot after the last sentence
    } else if (currentParagraph.length + sentence.length + 2 <= MIN_LENGTH) {
      currentParagraph += sentence + ". ";
    } else {
      paragraphs.push(<p key={paragraphs.length}>{currentParagraph.trim()}</p>);
      currentParagraph = sentence + ". ";
    }
  }

  if (currentParagraph) {
    paragraphs.push(<p key={paragraphs.length}>{currentParagraph.trim()}</p>);
  }

  return paragraphs;
}

const BlogDetails = ({ params }) => {
  const { singleBlog, fetchBlog, loading } = useBlogs();
  const [isLiked, setIsLiked] = useState(false);
  const [blogLikes, setBlogLikes] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [blogComments, setBlogComments] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (params?.id) {
      fetchBlog(params.id);
    }
  }, [params]);

  useEffect(() => {
    if (singleBlog) {
      setIsLiked(singleBlog?.likes?.includes(session?.user?._id));
      setBlogLikes(singleBlog?.likes?.length || 0);
      setBlogComments(singleBlog?.comments?.length || 0);
    }
  }, [singleBlog, session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!singleBlog) {
    return <p>Blog not found</p>;
  }

  const timeStr = singleBlog?.createdAt;
  const time = moment(timeStr);
  const formattedTime = time.format("MMMM Do YYYY");

  return (
    <section className="container max-w-3xl">
      <div className="flex flex-col items-center justify-center">
        <Link href={`/user/${singleBlog?.authorId?._id.toString()}`}>
          <div className="flex flex-col justify-center items-center py-10">
            <Image
              src={
                singleBlog?.authorId?.avatar?.url
                  ? singleBlog?.authorId?.avatar?.url
                  : demoImage
              }
              alt="avatar image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-20 h-20 rounded-full"
            />
            <div className="text-center">
              <p className="text-whiteColor">{singleBlog?.authorId?.name}</p>
              <p>{singleBlog?.authorId?.designation}</p>
            </div>
          </div>
        </Link>

        <div className="text-center space-y-3">
          <h2>{singleBlog?.title}</h2>
          <p>{singleBlog?.excerpt}...</p>
          <p className="flex items-center justify-center gap-3">
            <span className="text-primaryColor">{singleBlog?.category}</span>
            <span className="flex items-center gap-1">
              {/* <AiTwotoneCalendar /> */}
              {formattedTime}
            </span>
          </p>
          <div>
            <Image
              src={singleBlog?.image ? singleBlog?.image?.url : demoImage}
              alt="blog details image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-lg py-10"
            />
          </div>
          <div className="text-start">
            <div className="space-y-5">
              {singleBlog?.description &&
                splitParagraph(singleBlog?.description).map((paragraph, pIndex) => (
                  <div key={pIndex}>
                    {pIndex ===
                      Math.floor(splitParagraph(singleBlog?.description).length / 2) && (
                      <blockquote className="border-l-4 border-primaryColor border-spacing-6 italic mb-5">
                        <p className="ml-5">{singleBlog?.quote}</p>
                      </blockquote>
                    )}
                    {paragraph}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex gap-10 items-center text-xl justify-center">
          <div className="flex items-center gap-1">
            <p>{blogLikes}</p>
            {isLiked ? (
              // <AiFillHeart size={20} color="#ed5784" cursor="pointer" />
              ""
            ) : (
              // <AiOutlineHeart size={20} cursor="pointer" />
              ""
)}
          </div>
          <div className="flex items-center gap-1">
            <p>{blogComments}</p>
            {/* <AiOutlineComment size={20} />
             */}

             ""
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
