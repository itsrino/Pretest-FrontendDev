import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
	pencil,
	mail,
	phone,
	web,
	building,
	tool,
	house,
	plus,
	trash,
	share,
} from "../assets/icons";
import { Link } from "react-router-dom";
import MobileNavigation from "../components/MobileNavigation";

export default function Dashboard() {
	return (
		<>
			<main className="flex bg-green-50 w-full min-h-screen relative">
				<section className="w-1/12 bg-white shadow-md hidden md:block lg:block xl:block">
					<Sidebar />
				</section>

				{/* Mobile Navigation */}
				<MobileNavigation />
				{/* End Mobile Navigation */}
				<section className="w-full px-4 md:px-12 lg:px-12 xl:px-12 py-4">
					<section className="flex justify-between items-center">
						{/* Header */}
						<Header />
						{/* End Header */}
					</section>
					{/* Content */}
					<section className="block md:flex lg:flex xl:flex mt-8">
						<section className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
							<img
								src="https://images.unsplash.com/photo-1430417934865-589b63ad5c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
								className="w-full rounded-md h-28 object-cover"
								alt="Banner Company"
							/>
							<div className="shadow-lg py-4 px-6 bg-white rounded-md">
								<div className="bg-white shadow-md rounded-full w-24 h-24 absolute top-40 left-32 md:left-40 lg:left-48 xl:left-72">
									<img
										src="https://static.wixstatic.com/media/e817ec_be43f247d0d4454f9d29e2d22f8d4ff7~mv2.png/v1/fill/w_194,h_75,al_c,q_85,usm_0.66_1.00_0.01/mig.webp"
										className="mx-auto w-24 h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-42 xl:h-42 object-contain"
										alt="Profile Company"
									/>
								</div>
								<div className="text-center mt-24 md:mt-24 lg:mt-24 xl:mt-28 mb-5">
									<h2 className="text-xl md:text-xl lg:text-lg xl:text-xl text-gray-700 font-bold">
										Mitramas Infosys Global
									</h2>
									<p className="mt-3 text-gray-400">Layanan IT</p>
								</div>
								<div className="flex items-center justify-center cursor-pointer hover:underline">
									<img src={pencil} className="w-4 h-4" alt="Edit Profile" />
									<span className="text-sm text-green-700 font-semibold mx-2">
										Sunting profil
									</span>
								</div>
								<div className="flex flex-col mt-10">
									<div>
										<p className="text-gray-400 mb-2">Status Perushaan</p>
										<div className="flex items-center justify-between">
											<h5 className="text-sm text-green-700 font-bold">
												Aktif
											</h5>
											<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
												<input
													type="checkbox"
													name="toggle"
													id="toggle"
													className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
												/>
												<label
													htmlFor="toggle"
													className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
												></label>
											</div>
										</div>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">Singkatan</p>
										<h5 className="text-sm text-gray-500 font-semibold">MIG</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">Alamat Perusahaan</p>
										<h5 className="text-sm text-gray-500 font-semibold">
											Jl. Tebet Raya No 42, Jakarta Selatan
										</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">
											Penanggung Jawab (PIC)
										</p>
										<h5 className="text-sm text-gray-500 font-semibold">
											Jhon Doe
										</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">Tanggal PKP</p>
										<h5 className="text-sm text-gray-500 font-semibold">
											03 Maret 2021
										</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">Email</p>
										<h5 className="text-sm text-green-700 underline cursor-pointer font-semibold flex items-center">
											<img src={mail} className="w-4 h-4 mr-1" alt="Email" />
											mid@mitrasolusi.group
										</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">No. Telp</p>
										<h5 className="text-sm text-green-700 underline cursor-pointer font-semibold flex items-center">
											<img src={phone} className="w-4 h-4 mr-1" alt="Phone" />
											021-5678-1234
										</h5>
									</div>
									<div>
										<p className="text-gray-400 mb-2 mt-4">Situs Web</p>
										<h5 className="text-sm text-green-700 underline cursor-pointer font-semibold flex items-center">
											<img src={web} className="w-4 h-4 mr-1" alt="Web" />
											mitramas.com
										</h5>
									</div>
								</div>
							</div>
						</section>
						<section className="w-full px-0 md:px-6 lg:px-6 xl:px-6 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
							<div className="bg-white shadow-md rounded-md py-4 px-6">
								<div className="flex justify-between items-center">
									<h5 className="font-bold text-gray-700">Lokasi</h5>
									<Link to="/" className="text-green-600 hover:underline">
										Lihat Semua
									</Link>
								</div>

								<div className="block md:block lg:flex xl:flex gap-3 mt-4 text-white">
									<div className="px-4 mt-2 md:mt-2 lg:mt-0 xl:mt-0 bg-green-700 w-full h-auto rounded-md flex items-center justify-between">
										<img src={building} className="w-10 h-20" alt="Location" />
										<div>
											<h2 className="text-right font-bold text-2xl">20</h2>
											<p className="text-sm text-gray-200">Induk</p>
										</div>
									</div>
									<div className="px-4 mt-2 md:mt-2 lg:mt-0 xl:mt-0 bg-green-600 w-full h-auto rounded-md flex items-center justify-between">
										<img src={tool} className="w-10 h-20" alt="Tool" />
										<div>
											<h2 className="text-right font-bold text-2xl">3</h2>
											<p className="text-sm text-gray-200">
												Sub Lokasi Level 1
											</p>
										</div>
									</div>
									<div className="px-4 mt-2 md:mt-2 lg:mt-0 xl:mt-0 bg-green-500 w-full h-auto rounded-md flex items-center justify-between">
										<img src={house} className="w-10 h-20" alt="House" />
										<div>
											<h2 className="text-right font-bold text-2xl">1</h2>
											<p className="text-sm text-gray-200">
												Sub Lokasi Level 2
											</p>
										</div>
									</div>
								</div>
							</div>
							<section className="block md:block lg:block xl:flex">
								<div className="flex flex-col">
									<section className="bg-white py-3 px-6 mx-1 rounded-md mt-3 w-full">
										<div className="block md:flex lg:flex xl:flex items-center justify-between">
											<h1 className="text-xl md:text-base lg:text-lg xl:text-xl font-bold text-gray-700 mr-16 md:mr-2 lg:mr-2 xl:mr-16">
												Akun Bank
											</h1>
											<button className="bg-green-700 py-1 px-2 text-white text-xs rounded-md flex items-center mt-4 md:mt-0 lg:mt-0 xl:mt-0">
												<img src={plus} className="w-5 h-5" alt="Create Bank" />
												Tambah Akun Bank
											</button>
										</div>
										<div className="flex flex-col mt-2">
											<div className="block md:flex lg:flex xl:flex mt-6 md:mt-4 lg:mt-4 xl:mt-4">
												<div className="bg-gradient-to-br from-yellow-500 to-green-300 rounded-2xl w-full h-auto"></div>
												<div className="mx-2 w-full">
													<div className="flex justify-between">
														<h4 className="text-gray-700 w-full text-sm font-bold mb-10 truncate">
															Bank KB Bukopoin
														</h4>
														<div className="flex">
															<img
																src={pencil}
																className="w-4 h-5 cursor-pointer mx-1"
																alt="Update Account Bank"
															/>
															<img
																src={trash}
																className="w-4 h-5 cursor-pointer"
																alt="Delete Account Bank"
															/>
														</div>
													</div>
													<p className="text-gray-400 w-full text-sm">
														**** 0876 - Yusron Taufiq
													</p>
													<span className="text-gray-400 w-full text-sm">
														IDR
													</span>
												</div>
											</div>
											<div className="block md:flex lg:flex xl:flex mt-6 md:mt-4 lg:mt-4 xl:mt-4">
												<div className="bg-gradient-to-br from-blue-400 to-blue-300 rounded-2xl w-full h-auto"></div>
												<div className="mx-2 w-full">
													<div className="flex justify-between">
														<h4 className="text-gray-700 w-full text-sm font-bold mb-10 truncate">
															Citibank, NA
														</h4>
														<div className="flex">
															<img
																src={pencil}
																className="w-4 h-5 cursor-pointer mx-1"
																alt="Update Account Bank"
															/>
															<img
																src={trash}
																className="w-4 h-5 cursor-pointer"
																alt="Delete Account Bank"
															/>
														</div>
													</div>
													<p className="text-gray-400 w-full text-sm">
														**** 5525 - Si Tampan
													</p>
													<span className="text-gray-400 w-full text-sm">
														USD
													</span>
												</div>
											</div>
										</div>
									</section>
									<section className="bg-white py-3 px-6 mx-1 rounded-md mt-3 w-full">
										<div className="flex items-center justify-between">
											<h1 className="text-xl font-bold text-gray-700">
												Relasi
											</h1>
											<Link to="/" className="text-green-600 hover:underline">
												Lihat Semua
											</Link>
										</div>
										<div>
											<div className="flex items-center mt-4">
												<img src={share} className="w-7 h-7" alt="Relation" />
												<div className="mx-2">
													<span className="text-2xl font-bold text-gray-600">
														20
													</span>
													<p className="text-gray-400 text-sm">Memiliki</p>
												</div>
											</div>
											<div className="flex items-center mt-4">
												<img src={share} className="w-7 h-7" alt="Relation" />
												<div className="mx-2">
													<span className="text-2xl font-bold text-gray-600">
														108
													</span>
													<p className="text-gray-400 text-sm">Menggunakan</p>
												</div>
											</div>
											<div className="flex items-center mt-4">
												<img src={share} className="w-7 h-7" alt="Relation" />
												<div className="mx-2">
													<span className="text-2xl font-bold text-gray-600">
														67
													</span>
													<p className="text-gray-400 text-sm">Meminjam</p>
												</div>
											</div>
										</div>
									</section>
								</div>
								<section className="bg-white py-3 px-6 mx-0 md:mx-0 lg:mx-4 xl:mx-4 rounded-md mt-3 w-full md:w-full lg:w-full xl:w-2/4 mb-20 md:mb-0 lg:mb-0 xl:mb-0">
									<h1 className="font-bold text-xl text-gray-700 mb-10">
										Aktivitas
									</h1>

									<div className="flex flex-col">
										<div className="mt-5">
											<p>
												Yusron baru saja menambahkan lokasi baru Kantor Cabang
												Jagakarsa
											</p>
											<span className="text-gray-300 text-sm">
												Hari ini, 06:00
											</span>
										</div>
										<div className="mt-5">
											<p>
												Bintang baru saja menghapus sublokasi KCP Tebet 4 dari
												induk Kantor Cabang Tebet
											</p>
											<span className="text-gray-300 text-sm">
												Kemaren, 17:32
											</span>
										</div>
										<div className="mt-5">
											<p>
												Yusron melakukan perubahan profil pada induk Kantor
												Cabang Bekasi
											</p>
											<span className="text-gray-300 text-sm">
												Kemaren, 17:32
											</span>
										</div>
									</div>
								</section>
							</section>
						</section>
					</section>
					{/* End Content */}
				</section>
			</main>
		</>
	);
}
