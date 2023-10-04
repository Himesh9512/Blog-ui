import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Post } from "../util/types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<Paper elevation={3} sx={{ width: "100%" }}>
			<Card>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{post.date}
					</Typography>
					<Typography variant="h3" component="div">
						{post.title}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="large" variant="contained" sx={{ width: "100%" }}>
						VIEW
					</Button>
				</CardActions>
			</Card>
		</Paper>
	);
};

export default PostCard;
