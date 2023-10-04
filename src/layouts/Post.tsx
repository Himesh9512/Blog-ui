import { useParams } from "react-router-dom";

const Post = () => {
	const { postId } = useParams();
	console.log(postId);

	return <div>this is blog</div>;
};

export default Post;
