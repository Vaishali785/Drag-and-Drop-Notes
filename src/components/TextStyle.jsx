/* eslint-disable react/prop-types */
import bold from "../assets/bold.png"
import italic from "../assets/italic.png"
import underline from "../assets/underline.png"

const TextStyle = ({ text, selectStyle, selected }) => {
	const textStyle = {
		Bold: { fontWeight: "bold" },
		Italic: { fontStyle: "italic" },
		Underline: { textDecoration: "underline" },
		default: {
			fontWeight: "unset",
			fontStyle: "unset",
			textDecoration: "unset",
		},
	}

	const tagImg = {
		Bold: bold,
		Italic: italic,
		Underline: underline,
	}
	return (
		<div
			className={`inline-block w-8 p-2 rounded-sm bg-white ${
				selected ? "invert" : "invert-0"
			}`}
			onClick={() => selectStyle(text, textStyle[text])}
		>
			<img src={tagImg[text]} alt={text} />
		</div>
	)
}

export default TextStyle
