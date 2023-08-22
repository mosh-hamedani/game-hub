import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b32ff2a0d824d3595a410bc6da75c11",
  },
});
