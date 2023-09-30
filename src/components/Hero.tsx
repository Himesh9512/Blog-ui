import Box from "@mui/material/Box";
import HeroDesktopImage from "../assets/hero-desktop.jpg";
import HeroMobileImage from "../assets/hero-mobile.jpg";

interface HeroProps {
	children: JSX.Element;
}
const Hero = ({ children }: HeroProps) => {
	const heroImage = window.innerWidth >= 650 ? HeroDesktopImage : HeroMobileImage;
	return (
		<Box
			width="100%"
			height={{ xs: "40vh", sm: "70vh", md: "80vh" }}
			sx={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: "cover",
			}}>
			{children}
		</Box>
	);
};

export default Hero;
