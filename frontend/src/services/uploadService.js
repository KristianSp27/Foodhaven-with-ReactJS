import { toast } from "react-toastify";

export const uploadImage = async (event) => {
  let toastId = null;

  const image = await getImage(event);
};

const getImage = async (event) => {
  const files = event.target.files;

  if (!files || files.length <= 0) {
    toast.warning("Upload file is not selected!", "File upload");
    return null;
  }

  const file = files[0];

  if (file.type != "image/jpeg") {
    toast.error("Only JPG type is allowed!", "File type error");
    return null;
  }

  return file;
};
