import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e9fa37ef569498da299de5a59e06105",
  },
});
