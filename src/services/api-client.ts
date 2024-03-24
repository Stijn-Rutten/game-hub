import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0997cb2b4173461688e47a4e75196c17",
  },
});
