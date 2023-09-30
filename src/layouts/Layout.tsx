import Box from "@mui/material/Box";
import Header from "../components/Header";

interface LayoutProps {
	children: JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Box component="main">{children}</Box>
		</>
	);
};

export default Layout;
