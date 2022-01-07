import React, { useState } from "react";
import Layout from "components/Layout";
import { getDataCookies } from "middleware/Authorization";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

// Proses pengecekan token atau udah login atau belum dilakukan di SSR
export async function getServerSideProps(context) {
	const dataCookie = await getDataCookies(context);
	if (dataCookie.isLogin) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// merge data login
			const setDataLogged = { email, password };
			// pengecekan ketika field email dan password kosong
			for (const value in setDataLogged) {
				if (setDataLogged[value] === "") {
					setError(true);
					setMessage("Lengkapi form yang kosong.");
					return false;
				}
			}
			setLoading(true);
			// proses login menggunakan axios
			const response = await axios.post("/auth/login", setDataLogged);
			setSuccess(true);
			setError(false);
			setLoading(false);
			Cookies.set("token", response.data.access_token);
			event.target.reset();
			router.push("/");
		} catch (error) {
			setSuccess(false);
			setError(true);
			setLoading(false);
			setMessage("Email & Password not valid.");
		}
	};
	return (
		<>
			<Layout title="Login Page">
				<section className="min-vh-100 d-flex justify-content-center align-items-center">
					<div className="card">
						<div className="card-header">
							<span>
								Hello,{" "}
								{isSuccess ? (
									<span className="text-success">Berhasil login, welcome</span>
								) : (
									"Please login first"
								)}
								!
							</span>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="email">Email</label>
									<input
										className="form-control"
										type="email"
										name="email"
										id="email"
										onChange={(event) => setEmail(event.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="password">Password</label>
									<input
										className="form-control"
										type="password"
										name="password"
										id="password"
										onChange={(event) => setPassword(event.target.value)}
									/>
								</div>
								{error ? (
									<p className="text-danger fs-6 fw-bold">{message}</p>
								) : null}
								<div className="mb-3">
									<button className="btn btn-outline-dark w-100">
										{isLoading ? "Loading..." : "Login"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
