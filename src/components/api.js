import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

onRequest = async () => {
  try {
    const response = await axios.post("http://localhost:3001/users", {...this.state});
    return res.data;

  } catch (error) {
    console.log(error);
  }


export default api;
