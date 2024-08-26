/* eslint-disable react/prop-types */
import { useState } from "react"

import "./TaskForm.css"
import Tag from "./Tag"
import TextStyle from "./TextStyle"

const TaskForm = ({ tasks, setTasks }) => {
	const [taskData, setTaskData] = useState({
		task: "",
		status: "todo",
		tags: [],
		styles: {},
	})
	const [error, setError] = useState(false)

	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag)
	}
	const checkStyle = (style) => {
		style = style.toLowerCase()
		const taskStyles = Object.values(taskData.styles)
		return taskStyles.some((item) => item === style)
	}

	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag)
			setTaskData((prev) => {
				return { ...prev, tags: filterTags }
			})
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] }
			})
		}
	}
	const selectStyle = (styleKey, styleVal) => {
		if (
			Object.values(taskData.styles).some(
				(item) => item === styleKey.toLowerCase()
			)
		) {
			const filterStyles = Object.values(taskData.styles).filter(
				(item) => item !== styleKey.toLowerCase()
			)
			setTaskData((prev) => {
				return { ...prev, styles: filterStyles }
			})
		} else {
			setTaskData((prev) => {
				return { ...prev, styles: { ...prev.styles, ...styleVal } }
			})
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setTaskData((prev) => {
			return { ...prev, [name]: value }
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const taskExists = tasks.filter(
			(item) => item.task == taskData.task && item.status == taskData.status
		)
		const taskEmpty = taskData.task.trim() == ""
		if (!taskEmpty && taskExists.length == 0) {
			setTasks((prev) => {
				return [...prev, taskData]
			})
		} else {
			if (taskEmpty) {
				setError("Enter some text")
				// setTimeout(() => setError(false), 1000)
			} else {
				setError("Task Already exists")
			}
			setTimeout(() => setError(false), 1000)
		}
		setTaskData({
			task: "",
			status: "todo",
			tags: [],
			styles: {},
		})
	}
	return (
		<header className="app_header w-full bg-[#6457f9ab]">
			<form
				onSubmit={handleSubmit}
				className="w-full p-4 md:w-4/5 lg:w-3/5 lg:px-0"
			>
				<div className="task_input_wrap">
					<input
						type="text"
						name="task"
						value={taskData.task}
						className="task_input"
						placeholder="Enter your task"
						onChange={handleChange}
					/>
					<p className={`error ${error ? "show_error" : "hide_error"}`}>
						{error}
					</p>
				</div>
				<div className="grid min-[500px]:grid-cols-[2.5fr_1fr] md:items-center flex-col gap-3 sm:flex-row">
					<div className="flex flex-col justify-between w-full gap-3">
						<div className="flex gap-4">
							<TextStyle
								text="Bold"
								selectStyle={selectStyle}
								selected={checkStyle("Bold")}
							/>
							<TextStyle
								text="Italic"
								selectStyle={selectStyle}
								selected={checkStyle("Italic")}
							/>
							<TextStyle
								text="Underline"
								selectStyle={selectStyle}
								selected={checkStyle("Underline")}
							/>
							{/* Bold */}
							{/* </span> */}
							{/* <span onClick={selectStyle} selected={checkStyle("Italic")}>
							Italic
						</span>
						<span onClick={selectStyle} selected={checkStyle("Underline")}>
							Underline
						</span> */}
						</div>
						<div>
							<Tag
								tagName="HTML"
								selectTag={selectTag}
								selected={checkTag("HTML")}
							/>
							<Tag
								tagName="CSS"
								selectTag={selectTag}
								selected={checkTag("CSS")}
							/>
							<Tag
								tagName="JavaScript"
								selectTag={selectTag}
								selected={checkTag("JavaScript")}
							/>
							<Tag
								tagName="React"
								selectTag={selectTag}
								selected={checkTag("React")}
							/>
						</div>
					</div>
					<div className="flex flex-col items-end max-[500px]:items-start max-[500px]:flex-row max-[500px]:justify-between max-[500px]:mt-6 w-full gap-2">
						<select
							name="status"
							value={taskData.status}
							className="task_status"
							onChange={handleChange}
						>
							<option value="todo">To do</option>
							<option value="doing">Doing</option>
							<option value="done">Done</option>
						</select>
						<button type="submit" className="task_submit bg-[#5143f4]">
							+ Add Task
						</button>
					</div>
				</div>
			</form>
		</header>
	)
}

export default TaskForm
