import axios from "axios";
const url = "http://127.0.0.1:8000/properties/api/list/all";

export const getAllProperties = async () => {
  const { data: res } = await axios.get(url);

  return res.map((re) => re.data());
};
