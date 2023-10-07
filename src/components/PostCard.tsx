import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { Post } from "../util/types";

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	const { id, title, date_formatted } = post;

	return (
		<Paper elevation={3} sx={{ width: "100%" }}>
			<Card>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{date_formatted}
					</Typography>
					<Typography variant="h3" component="div">
						{title}
					</Typography>
				</CardContent>
				<CardActions>
					<Link to={`./${id}`} style={{ width: "100%" }}>
						<Button size="large" variant="contained" sx={{ width: "100%" }}>
							VIEW
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Paper>
	);
};

export default PostCard;
