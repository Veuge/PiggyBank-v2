import axios from "axios";

interface IRequestError {
  statusCode: number;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: "https://piggy-bank-90411.firebaseio.com/"
});

axiosInstance.interceptors.response.use(res => res, (error): Promise<IRequestError> => {
  console.log("[Axios => ErrorInterceptor]", error);
  return Promise.reject({
    statusCode: error.response.status,
    message: error.toJSON().message
  });
});

export {
  IRequestError
};

export default axiosInstance;
