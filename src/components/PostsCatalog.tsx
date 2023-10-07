import PostCard from "./PostCard";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Post } from "../util/types";

interface PostsCatalogProps {
	posts: Post[];
}

const PostsCatalog = ({ posts }: PostsCatalogProps) => {
	return (
		<Container>
			<Grid container spacing={{ xs: 4, md: 10 }}>
				{posts.map((post, index) => {
					return (
						<Grid item key={index} xl={4}>
							<PostCard post={post}></PostCard>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default PostsCatalog;
