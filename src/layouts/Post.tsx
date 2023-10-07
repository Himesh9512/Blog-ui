import { Link, useParams } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import { comments, posts } from "../util/data";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CommentForm from "../components/CommentForm";
import PostComment from "../components/PostComment";

const Post = () => {
	const { postId } = useParams();
	const post = posts.find((x) => x.id === postId);

	const [username, setUsername] = useState<string>("");
	const [text, setText] = useState<string>("");

	const handleUsernameOnInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setUsername(value);
	};
	const handleTextOnInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setText(value);
	};
	return (
		<>
			<Container>
				<Box component="div" paddingY={4}>
					<Link to="/">
						<Button size="large" variant="contained">
							back
						</Button>
					</Link>
				</Box>
				<Box component="div" paddingY={4}>
					<Typography variant="body2" component="span">
						{post?.date}
					</Typography>
					<Typography variant="h2" component="h1" fontWeight={600}>
						{post?.title}
					</Typography>
				</Box>
				<Typography variant="body1" component="p" align="justify">
					{post?.content}
				</Typography>
				<Box component="div" paddingY={6}>
					<Typography variant="h4" component="h2" fontWeight={500}>
						COMMENTS
					</Typography>
				</Box>
				<CommentForm
					username={username}
					text={text}
					handleUsernameOnInput={handleUsernameOnInput}
					handleTextOnInput={handleTextOnInput}
				/>
				<Box>
					{comments.map((comment, index) => {
						return (
							<PostComment
								key={index}
								id={comment.id}
								username={comment.username}
								text={comment.text}
								date={comment.date}
							/>
						);
					})}
				</Box>
			</Container>
		</>
	);
};

export default Post;
