import Box from "@mui/material/Box";
import { Comment } from "../util/types";
import Typography from "@mui/material/Typography";

const PostComment = ({ username, text, date }: Comment) => {
	return (
		<Box borderLeft="4px solid black" margin={3} marginLeft={0} paddingLeft={3}>
			<Typography component="div" variant="caption">
				{date}
			</Typography>
			<Typography component="h3" variant="h4">
				{username}
			</Typography>
			<Typography component="p" variant="body1">
				{text}
			</Typography>
		</Box>
	);
};

export default PostComment;