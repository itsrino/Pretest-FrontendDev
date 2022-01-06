import React from "react";
import { arrowNext, search, notification } from "../assets/icons";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<section className="flex justify-between md:flex lg:flex xl:flex items-center">
				<div className="flex text-sm items-center md:flex lg:flex xl:flex md:text-base lg:text-base xl:text-base">
					<Link to="/">
						<span className="text-gray-400">Perusahaan</span>
					</Link>
					<img src={arrowNext} width={14} height={14} alt="Dashboard Page" />
					<h5 className="font-semibold text-gray-700 truncate md:whitespace-normal lg:whitespace-normal xl:whitespace-normal w-36 md:w-full lg:w-full xl:w-full">
						Mitramas Infosys Global
					</h5>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
						className="rounded-full h-12 w-12 md:h-7 md:w-7 lg:h-7 lg:w-7 xl:w-7 xl:h-7 object-cover block md:hidden lg:hidden xl:hidden"
						alt="Profile"
					/>
				</div>
			</section>
			<section className="flex">
				<img
					src={search}
					width={20}
					height={20}
					className="hidden md:block lg:block xl:block"
					alt="Search"
				/>
				<img
					src={notification}
					width={20}
					height={20}
					className="mx-6 hidden md:block lg:block xl:block"
					alt="Notification"
				/>
				<div className="flex items-center cursor-pointer">
					<img
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
						className="rounded-full h-12 w-12 md:h-7 md:w-7 lg:h-7 lg:w-7 xl:w-7 xl:h-7 object-cover hidden md:block lg:block xl:block"
						alt="Profile"
					/>
					<span className="mx-2 text-gray-500 font-semibold hidden md:block lg:block xl:block">
						Jhon Doe
					</span>
				</div>
			</section>
		</>
	);
}
