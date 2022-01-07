import axios from "axios";
import Cookie from "js-cookie";

const AxiosInterceptors = axios.create({
	baseURL: "https://mitramas-test.herokuapp.com",
});

AxiosInterceptors.interceptors.request.use(
	function (config) {
		config.headers = {
			Authorization: `${Cookie.get("token")}`,
		};
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);
AxiosInterceptors.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default AxiosInterceptors;
