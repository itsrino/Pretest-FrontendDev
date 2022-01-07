import React from "react";
import Head from "next/head";
export default function Layout({ title, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</>
	);
}
