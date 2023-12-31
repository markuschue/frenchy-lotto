import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MarkdownTemplate = ({ filename }: { filename: string }) => {
	const [markdown, setMarkdown] = useState("");

	fetch("files/" + filename)
		.then((response) => response.text())
		.then((text) => setMarkdown(text));

	return (
		<div className="p-10 w-full h-full">
			<Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
		</div>
	);
};
