import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import CommentForm from "../components/CommentForm";
import PostComment from "../components/PostComment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Comment, Post as PostInterface } from "../util/types";

const Post = () => {
	const { postId } = useParams();

	const [post, setPost] = useState<PostInterface>();
	const [comments, setComments] = useState<Comment[]>();
	const [username, setUsername] = useState<string>("");
	const [text, setText] = useState<string>("");

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/posts/${postId}`)
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get(`http://localhost:3000/api/posts/${postId}/comments`)
			.then((res) => {
				setComments(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [postId]);

	const handleUsernameOnInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setUsername(value);
	};

	const handleTextOnInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setText(value);
	};

	const handleOnSubmit = () => {
		axios({
			method: "POST",
			url: `http://localhost:3000/api/posts/${postId}/comments`,
			data: {
				username: username,
				text: text,
			},
		})
			.then((res) => {
				console.log("Comment Added: ", res.data);
			})
			.catch((err) => console.log("Erro while fetching Comments: ", err));
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
						{post?.date_formatted}
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
					handleOnSubmit={handleOnSubmit}
				/>
				<Box>
					{comments?.map((comment, index) => {
						return <PostComment key={index} comment={comment} />;
					})}
				</Box>
			</Container>
		</>
	);
};

export default Post;
