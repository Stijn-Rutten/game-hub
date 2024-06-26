import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class ApiClient<T> {
  constructor(private readonly _endpoint: string) {}

  getAll = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> =>
    axiosInstance
      .get<FetchResponse<T>>(this._endpoint, config)
      .then((res) => res.data);

  get = (id: number | string): Promise<T> =>
    axiosInstance.get<T>(`${this._endpoint}/${id}`).then((res) => res.data);
}

export default ApiClient;
