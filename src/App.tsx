import { ThemeProvider } from "@mui/material/styles";

import Layout from "./layouts/Layout";
import Home from "./layouts/Home";

import theme from "./util/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Home></Home>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
