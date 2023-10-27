import axios from "axios";

export const GetAudioUrl = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Fiverr");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dczyj0axu/auto/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default GetAudioUrl;
