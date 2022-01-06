import React from "react";
import {
	company,
	users,
	boards,
	cube,
	scan,
	searchCircle,
	ticket,
	office,
} from "../assets/icons";
export default function MobileNavigation() {
	return (
		<>
			{/* Mobile Navigation */}
			<div className=" w-full shadow-lg fixed bottom-0 block md:hidden lg:hidden xl:hidden">
				<div className="mt-16 bg-gray-700  py-3 rounded-tr-xl rounded-tl-xl flex items-center justify-around">
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
					<div className="mt-9 w-1/12 md:w-full lg:w-full xl:w-full cursor-pointer border-l-0 md:border-l-4 lg:border-l-4 xl:border-l-4 rounded-full md:rounded-none lg:rounded-none xl:rounded-none border-green-600 bg-green-400 md:bg-green-100 lg:bg-green-100 xl:bg-green-100 md:h-12 lg:h-12 xl:-12">
						<img
							src={office}
							className="w-6 mx-auto md:pt-3 lg:pt-3 xl:pt-3"
							alt="Building"
						/>
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
			</div>
			{/* End Mobile Navigation */}
		</>
	);
}
