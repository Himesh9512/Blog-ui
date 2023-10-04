import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout";
import MainRoute from "./MainRoute";

import theme from "./util/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					<MainRoute />
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
