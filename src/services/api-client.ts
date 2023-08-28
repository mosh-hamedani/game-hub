import axios, { AxiosRequestConfig } from "axios";
import { API } from './API'

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
    key: API.API_KEY,
  },
});

export class apiClient<T>{
  endPoint : string;
  constructor(endPoint:string)
  {
    this.endPoint = endPoint;
  }

  getAll = ( config : AxiosRequestConfig )=>
  {
    return axiosInstance.get<FetchResponse<T>>(this.endPoint , config )
    .then((data) => data.data)
  }
  getDetail = ()=>{
    return axiosInstance.get<T>(this.endPoint).then((resp) => resp.data)
  }
}



