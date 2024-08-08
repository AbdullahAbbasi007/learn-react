import React from "react";
import { MainFooter, MainHeader } from "../components";

const MainLayout = ({ children, showHeader = true }) => {
	return (
		<>
			{showHeader && <MainHeader title={"My Todos List"} searchBar={false} />}
			<main>{children}</main>
			<MainFooter />
		</>
	);
};

export { MainLayout };
