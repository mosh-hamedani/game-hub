import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next:string | null;
  results: T[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e9fa37ef569498da299de5a59e06105",
  },
});

export class apiClient<T>{
  endPoint : string;
  constructor(endPoint:string)
  {
    this.endPoint = endPoint;
  }

  getAll( config : AxiosRequestConfig )
  {
    return axiosInstance.get<FetchResponse<T>>(this.endPoint , config )
    .then((data) => data.data)
  }

}



