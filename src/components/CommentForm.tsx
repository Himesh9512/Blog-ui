import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface CommentFormProps {
	username: string;
	text: string;
	handleUsernameOnInput: (e: ChangeEvent<HTMLInputElement>) => void;
	handleTextOnInput: (e: ChangeEvent<HTMLInputElement>) => void;
	handleOnSubmit: () => void;
}

const CommentForm = ({
	username,
	text,
	handleUsernameOnInput,
	handleTextOnInput,
	handleOnSubmit,
}: CommentFormProps) => {
	return (
		<Box component="form" onSubmit={handleOnSubmit}>
			<TextField
				fullWidth
				placeholder="Himesh"
				size="small"
				type="text"
				name="username"
				margin="normal"
				value={username}
				label="Username"
				variant="outlined"
				onInput={(e) => handleUsernameOnInput(e as ChangeEvent<HTMLInputElement>)}
			/>
			<TextField
				fullWidth
				placeholder="some text here"
				size="small"
				type="text"
				margin="normal"
				name="text"
				value={text}
				label="Text"
				variant="outlined"
				onInput={(e) => handleTextOnInput(e as ChangeEvent<HTMLInputElement>)}
			/>
			<Button type="submit" variant="contained">
				Add
			</Button>
		</Box>
	);
};

export default CommentForm;
