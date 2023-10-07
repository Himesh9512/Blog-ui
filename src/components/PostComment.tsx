import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Comment } from "../util/types";

interface PostCommentProps {
	comment: Comment;
}
const PostComment = ({ comment }: PostCommentProps) => {
	const { username, text, date_formatted } = comment;

	return (
		<Box borderLeft="4px solid black" margin={3} marginLeft={0} paddingLeft={3}>
			<Typography component="div" variant="caption">
				{date_formatted}
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
