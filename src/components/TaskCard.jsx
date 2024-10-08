/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import "./TaskCard.css"
import Tag from "./Tag"
import deleteIcon from "../assets/delete.png"
import editIcon from "../assets/edit.png"
import saveIcon from "../assets/done.png"
import { useState } from "react"

const TaskCard = ({
	title,
	tags,
	styles,
	handleDelete,
	index,
	setActiveCard,
	handleEdit,
	editingIndex,
	setEditingIndex,
}) => {
	const [editedTitle, setEditedTitle] = useState(title)
	const [error, setError] = useState("")
	const handleTitleChange = (e) => {
		// if (e.target.value.trim() !== "") {
		setEditedTitle(e.target.value) // Update the title state
		// } else {
		// 	setError("Task cannot be empty!")
		// 	setTimeout(() => setError(""), 1000)
		// }
	}
	const handleSaveClick = () => {
		if (editedTitle.trim() !== "") {
			setEditingIndex(null)
			// setEditedTitle(e.target.value) // Update the title state
		} else {
			setError("Task cannot be empty!")
			setTimeout(() => setError(""), 1000)
		}
	}

	return (
		<article
			className="task_card"
			draggable
			onDrag={() => setActiveCard(index)}
		>
			<div className="task_content">
				{editingIndex == index ? (
					<div className="mb-3">
						<input
							data-index={editingIndex}
							type="text"
							value={editedTitle}
							onChange={handleTitleChange}
							className="task_text input"
							onBlur={handleSaveClick} // Save changes when input loses focus
						/>
						{error && (
							<span className="text-xs block mt-2 text-red-500">{error}</span>
						)}
					</div>
				) : (
					<p
						className="task_text mb-3"
						data-index={editingIndex}
						style={{ ...styles }}
					>
						{editedTitle}
					</p>
				)}

				<div className="task_card_bottom_line">
					<div className="task_card_tags">
						{tags.map((tag, index) => (
							<Tag key={index} tagName={tag} selected />
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				{editingIndex == index ? (
					<span
						className="task_save task_icon_wrap"
						onClick={(e) => {
							e.stopPropagation()
							handleSaveClick()
						}}
					>
						<img
							src={saveIcon}
							className="save_icon w-[27px] task_icon"
							alt=""
						/>
					</span>
				) : (
					// <span onClick={handleSaveClick}>Save</span>
					<div
						className="task_edit task_icon_wrap"
						onClick={() => handleEdit(index)}
					>
						<img src={editIcon} className="edit_icon task_icon" alt="" />
					</div>
				)}
				<div
					className="task_delete task_icon_wrap"
					onClick={() => handleDelete(index)}
				>
					<img src={deleteIcon} className="delete_icon task_icon" alt="" />
				</div>
			</div>
		</article>
	)
}

export default TaskCard
