"use client";

import { useRef, useState } from "react";
import { SubmitButton } from "../SubmitButton";
import PhotoCard from "../PhotoCard";
import { uploadPhoto } from "@/Actions/uploadAction";
import { useRouter, usePathname  } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormUI = ({ path }) => {
  const formRef = useRef();
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const router = useRouter();
  const pathname = usePathname()



  const handleInputFile = (e) => {
    const files = e.target.files;
    const newFiles = [...files].filter(
      (file) => file.size < 1024 * 1024 && file.type.startsWith("image/")
    );
    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  };

  const handleDeleteFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const res = await uploadPhoto(formData);
      if (res) {
        const productRes = await fetch(`/api/${path}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, images: res, description: desc, ...(path === "products" && { date: startDate }) }),
        });
        if (productRes.ok) {
          router.push("/");
          setFiles([]);
          setName("");
          setDesc("");
        } else {
          const errorText = await productRes.text();
          console.error("Failed to create a Service: ", errorText);
          throw new Error("Failed to create a Service");
        }
      } else {
        throw new Error("Failed to upload images");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg bg-gray-100 p-8 shadow-lg m-auto max-w-[75vh] ">
      <form onSubmit={handleUpload} ref={formRef} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Name"
            type="text"
            id="name"
          />
        </div>

        {pathname === "/addEmployee" ? (
          ""
        ) : (
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>
        )}

        {pathname === "/addProduct" ? (
          <div>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        ) : (
          ""
        )}

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleInputFile}
        />

        {files?.map((file, index) => (
          <div className="flex min-h-44">
            <PhotoCard
              key={index}
              url={URL.createObjectURL(file)}
              onClick={() => handleDeleteFile(index)}
            />
          </div>
        ))}

        <div className="mt-4">
          <SubmitButton
            value="Upload to Cloudinary"
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default FormUI;
