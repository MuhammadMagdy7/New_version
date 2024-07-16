"use server";

import path from 'path'
import fs from 'fs/promises'
import {v4 as uuidv4} from 'uuid'
import cloudinary from 'cloudinary'
import os from 'os'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

async function saveFilesToLocal(formData) {  
    
  const files = formData.getAll("files");

  const multipleBuffersPromise = files.map(file => (
    file.arrayBuffer()
    .then(data => {  
        const buffer=Buffer.from(data)
        const name = uuidv4()
        const ext = file.type.split('/')[1]

        // const uploaderDir = path.join(process.cwd(), "public", `/${name}.${ext}`) 
        // Doesn't work in Vercel

        const tempdir = os.tmpdir();
        const uploaderDir = path.join(tempdir, `/${name}.${ext}`) // work in Vercel

        fs.writeFile(uploaderDir, buffer)

        return {filepath: uploaderDir, filename: file.name }
    }
    )))
    return await Promise.all(multipleBuffersPromise)
}

async function uploadPhotosToCloudinary(newFiles){
   const multiplePhotosPromise = newFiles.map(file => (
    cloudinary.v2.uploader.upload(file.filepath, {folder: 'nextjs_upload'})
   ))
   return await Promise.all(multiplePhotosPromise)
}

export async function uploadPhoto(formData) {
  try {
    const newFiles = await saveFilesToLocal(formData);
    const photos = await uploadPhotosToCloudinary(newFiles)
    const urls = photos.map((photo) => photo.url);
    return(urls)
    
  } catch (error) {
    return { errMsg: error.massage };
  }
}
