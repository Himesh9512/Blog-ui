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
			<Grid container justifyContent="center" spacing={{ xs: 4, md: 10 }}>
				{posts.map((post, index) => {
					return (
						<Grid item key={index} xs={12} sm={6} xl={4} height="100%">
							<PostCard post={post}></PostCard>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default PostsCatalog;
