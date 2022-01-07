import Layout from "components/Layout";
import Cookies from "js-cookie";
import { getDataCookies } from "middleware/Authorization";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "utils/axios";

export async function getServerSideProps(context) {
	const dataCookie = await getDataCookies(context);
	// jika token nya tidak ada
	if (!dataCookie.isLogin) {
		// kembalikan ke login
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}

export default function Home() {
	const router = useRouter();
	const [animals, setAnimals] = useState([]);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const [status, setStatus] = useState("");
	const [show, setShow] = useState(false);
	const [showInput, setShowInput] = useState(false);
	const [message, setMessage] = useState("");
	const [confirmData, setConfirmData] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [isError, setError] = useState(false);

	const [dataForm, setDataForm] = useState({
		id: "",
		name: "",
		description: "",
		status: "",
	});

	const changeText = (event) => {
		setDataForm({ ...dataForm, [event.target.name]: event.target.value });
	};

	const getDataAnimal = async () => {
		try {
			const response = await axios.get("/binatang");
			setAnimals(response.data.data);
		} catch (error) {
			new Error(error.response);
		}
	};

	const FindAnimals = async () => {
		try {
			if (search === "") {
				getDataAnimal();
			} else {
				const findAnimal = animals.filter((value) => value.name === search);
				setAnimals(findAnimal);
			}
		} catch (error) {
			new Error(error.response);
		}
	};

	const showManageAction = (id) => {
		const showAnimalsManage = animals.filter((value) => value.id === id);
		setAnimals(showAnimalsManage);
		setShow(true);
	};

	const showInputManage = (data, id) => {
		setShowInput(true);
		setDataForm(data);
	};

	const ShowActionDelete = async (id) => {
		const question = confirm("Are you sure delete this animals?");
		if (question) {
			try {
				const response = await axios({
					method: "DELETE",
					url: "/binatang",
					data: {
						id,
					},
				});
				await getDataAnimal();
				setMessage(response.data.message);
				setConfirmData(true);
			} catch (error) {
				setShow(false);
				new Error(error.response);
			}
		} else {
			setConfirmData(false);
		}
	};

	const ShowFormCreate = () => {
		if (showForm === false) {
			setShowForm(true);
		} else {
			setShowForm(false);
		}
	};

	const createAnimal = async (event) => {
		try {
			event.preventDefault();
			const { name, description, status } = dataForm;
			const setDataAnimal = {
				name,
				description,
				status: Boolean(status),
			};

			for (const value in setDataAnimal) {
				if (setDataAnimal[value] === "") {
					setShowForm(true);
					setError(true);
					setMessage("Lengkapi form yang kosong.");
					return false;
				}
			}

			const response = await axios.post("/binatang", setDataAnimal);
			await getDataAnimal();
			event.target.reset();
			setShowInput(false);
			setShowForm(false);
			setConfirmData(true);
			setMessage(response.data.message);
		} catch (error) {
			new Error(error.response);
		}
	};

	const updateAnimal = async (event) => {
		try {
			event.preventDefault();
			const { id, name, description, status } = dataForm;
			const setDataUpdateAnimal = { id, name, description, status };
			// for(const value in setDataUpdateAnimal){
			// 	if(setDataUpdateAnimal[value] === ''){
			// 		set
			// 	}
			// }
			const response = await axios.put("/binatang", setDataUpdateAnimal);
			await getDataAnimal();
			event.target.reset();
			setShowForm(false);
			setConfirmData(true);
			setMessage(response.data.message);
			setShow(false);
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		} catch (error) {
			new Error(error.response);
		}
	};

	useEffect(() => {
		getDataAnimal();
	}, []);

	return (
		<>
			<Layout title="Home Page">
				<header className="text-center">
					<div className="d-flex justify-content-center">
						<Link href={"/"} passHref>
							<span className="text-dark mt-5 mb-3">
								Made with: Rino Satya Putra
							</span>
						</Link>
					</div>
					{confirmData ? (
						<span className="text-success fw-bold">{message}</span>
					) : null}
				</header>

				<section className="container mt-5">
					<div className="row">
						<div className="col-md-3">
							<button
								className="btn btn-outline-dark btn-sm mb-3"
								onClick={() => {
									Cookies.remove("token");
									router.push("/auth/login");
								}}
							>
								Logout
							</button>
							<h4>{showForm ? "Create Data Animal" : "List All Animals"}</h4>
							{showForm ? null : (
								<div className="d-flex align-items-center mt-2">
									<input
										type="text"
										name="search"
										className="form-control"
										onChange={(event) => setSearch(event.target.value)}
										placeholder="Find Animal by 'name'"
									/>
									<button className="btn btn-dark" onClick={FindAnimals}>
										Find
									</button>
								</div>
							)}
							<div className="d-flex justify-content-between align-items-center">
								{showForm ? null : <h5 className="mt-4">Sort Animals</h5>}
								<span
									className={`btn ${
										!showForm ? "btn-dark" : "btn-danger"
									} mt-4`}
									onClick={ShowFormCreate}
								>
									{!showForm ? "+" : "x"}
								</span>
							</div>
							{showForm ? null : (
								<>
									<div className="d-flex align-items-center mt-2">
										<input
											type="radio"
											name="sort"
											value="ascending"
											onChange={() => {
												setSort("ascending");
												const hasil = animals.sort(
													(a, b) => (a.name > b.name) - (a.name < b.name)
												);
												setAnimals(hasil);
											}}
											className="form-check-input"
											checked={sort === "ascending"}
										/>
										<label htmlFor="ascending" className="mx-3">
											A - Z
										</label>
									</div>
									<div className="d-flex align-items-center mt-2">
										<input
											type="radio"
											name="sort"
											value="descending"
											onChange={() => {
												setSort("descending");
												const hasil = animals.sort(
													(a, b) => (b.name > a.name) - (b.name < a.name)
												);
												setAnimals(hasil);
											}}
											className="form-check-input"
											checked={sort === "descending"}
										/>
										<label htmlFor="descending" className="mx-3">
											Z - A
										</label>
									</div>
									<div className="d-flex align-items-center mt-2">
										<input
											type="radio"
											name="status"
											value={status}
											onChange={() => {
												setStatus("active");
												const filterAnimalsActive = animals.filter((data) => {
													return data.status;
												});
												setAnimals(filterAnimalsActive);
											}}
											className="form-check-input"
											checked={status === "active"}
										/>
										<label htmlFor="active" className="mx-3">
											Active
										</label>
									</div>
									<div className="mt-4">
										<span>
											<b>Note</b>: Untuk Action Update & Delete Silahkan Select
											salah satu card.
										</span>
									</div>
								</>
							)}
						</div>
						<div className="col-md-9">
							{showForm ? (
								<>
									<form onSubmit={createAnimal}>
										{isError ? (
											<p className="fw-bold text-danger text-center">
												{message}
											</p>
										) : null}
										<div className="mb-3">
											<label htmlFor="name">Name</label>
											<input
												type="text"
												name="name"
												onChange={changeText}
												className="form-control"
												placeholder="Please write name animal..."
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="description">Description</label>
											<textarea
												name="description"
												onChange={changeText}
												className="form-control"
												cols="30"
												rows="7"
												placeholder="Please write description about animal..."
											></textarea>
										</div>
										<div className="mb-3">
											<label htmlFor="status">Status</label>
											<select
												name="status"
												onChange={changeText}
												className="form-select"
											>
												<option hidden>Choose Status Animal</option>
												<option value="true">Active</option>
												<option value="false">InActive</option>
											</select>
										</div>
										<div className="mb-3">
											<button className="btn btn-outline-dark" type="submit">
												Create Animal
											</button>
										</div>
									</form>
								</>
							) : animals.length > 0 ? (
								animals.map((animal) => (
									<div
										className="card mt-2"
										key={animal.id}
										onClick={() => showManageAction(animal.id)}
									>
										<div className="card-body">
											<form onSubmit={updateAnimal}>
												{showInput ? (
													<input
														type="text"
														className="form-control"
														name="name"
														onChange={(e) => changeText(e)}
														value={dataForm.name}
													/>
												) : (
													<h3>{animal.name}</h3>
												)}
												<p>
													{showInput ? (
														<textarea
															name="description"
															onChange={changeText}
															className="form-control mt-3"
															cols="30"
															rows="7"
															value={dataForm.description}
														></textarea>
													) : (
														<span>{animal.description}</span>
													)}
												</p>
												<p className="d-flex align-items-center">
													Status Animal:{" "}
													{showInput ? (
														<>
															<select
																name="status"
																onChange={changeText}
																className="form-select w-25"
															>
																<option value="true">Active</option>
																<option value="false">InActive</option>
															</select>
														</>
													) : (
														<span
															className={
																animal.status === false
																	? "text-danger"
																	: "text-success"
															}
														>
															{animal.status === false ? "InActive" : "Active"}
														</span>
													)}
												</p>
												{showInput ? (
													<button
														type="submit"
														className="btn btn-outline-dark mb-4"
													>
														Update
													</button>
												) : null}
											</form>
											{show ? (
												<>
													<div className="d-flex align-items-center">
														<div>
															<i
																onClick={() =>
																	showInputManage(animal, animal.id)
																}
																className="bi bi-pen"
																style={{ color: "green", cursor: "pointer" }}
															></i>
														</div>
														<div onClick={() => ShowActionDelete(animal.id)}>
															<i
																className="bi bi-trash mx-2"
																style={{ color: "red", cursor: "pointer" }}
															></i>
														</div>
													</div>
												</>
											) : null}
										</div>

										<div className="card-footer">
											<p>
												Created: {new Date(animal.created_at).toDateString()}
											</p>
											<p>
												Updated: {new Date(animal.updated_at).toDateString()}
											</p>
										</div>
									</div>
								))
							) : (
								<p className="text-center fw-bold">Data Belum tersedia.</p>
							)}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
