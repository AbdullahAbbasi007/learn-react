import React from "react";
const MainFooter = () => {
	let parastyle = {
		margin: "0",
	};
	return (
		<footer className="bg-dark text-light mt-4">
			<p className="text-center py-3" style={parastyle}>
				Copyright &copy; MyTodosList.com
			</p>
		</footer>
	);
};

export { MainFooter };
