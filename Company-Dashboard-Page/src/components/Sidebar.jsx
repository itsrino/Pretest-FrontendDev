import React from "react";
import {
	ticket,
	company,
	users,
	boards,
	cube,
	scan,
	searchCircle,
	office,
} from "../assets/icons";
import logo from "../assets/images/logo.png";
export default function Sidebar() {
	return (
		<>
			<section className="flex flex-col">
				<div className="mt-10">
					<img src={logo} width={100} alt="Mitramas Infosys Global" />
				</div>
				<div className="mt-16">
					<div className="mt-9">
						<img src={company} className="w-6 mx-auto" alt="Company" />
					</div>
					<div className="mt-9">
						<img src={ticket} className="w-6 mx-auto" alt="Ticket" />
					</div>
					<div className="mt-9">
						<img src={users} className="w-6 mx-auto" alt="Users" />
					</div>
					<div className="mt-9">
						<img src={boards} className="w-6 mx-auto" alt="Boards" />
					</div>
					<div className="mt-9 w-full cursor-pointer border-l-4 border-green-600 bg-green-100 h-12">
						<img src={office} className="w-6 mx-auto pt-3" alt="Building" />
					</div>
					<div className="mt-9">
						<img src={cube} className="w-6 mx-auto" alt="cube" />
					</div>
					<div className="mt-9">
						<img src={scan} className="w-6 mx-auto" alt="scan" />
					</div>
					<div className="mt-9">
						<img src={searchCircle} className="w-6 mx-auto" alt="Search" />
					</div>
				</div>
			</section>
		</>
	);
}
