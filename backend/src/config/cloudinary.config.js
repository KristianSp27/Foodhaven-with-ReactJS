import { v2 as cloudinary } from "cloudinary";

export const configCloudinary = () => {
  cloudinary.config({
    cloud_name: proccess.env.CLOUDINARY_CLOUD_NAME,
    api_key: proccess.env.CLOUDINARY_API_KEY,
    api_secret: proccess.env.CLOUDINARY_API_SECRET,
  });
  return cloudinary;
};
