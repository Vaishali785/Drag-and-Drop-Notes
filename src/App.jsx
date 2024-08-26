import { useState, useEffect } from "react"

import "./App.css"
import TaskForm from "./components/TaskForm"
import TaskColumn from "./components/TaskColumn"
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks")

const App = () => {
	const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
	const [activeCard, setActiveCard] = useState(null)
	const [editingIndex, setEditingIndex] = useState(null)
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks))
	}, [tasks])

	const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex)
		setTasks(newTasks)
	}
	const handleEdit = (index) => {
		setEditingIndex(index)
	}
	const onDrop = (status, position) => {
		if (activeCard == null || activeCard == undefined) return

		const taskToMove = tasks[activeCard]
		const updatedTasks = tasks.filter((task, index) => index != activeCard)

		updatedTasks.splice(position, 0, {
			...taskToMove,
			status: status,
		})

		setTasks(updatedTasks)
	}
	return (
		<div className="app2 ">
			<TaskForm tasks={tasks} setTasks={setTasks} />
			<main className="app_main2 flex max-md:items-center  flex-col p-4  md:flex-row md:gap-4">
				<TaskColumn
					title="To do"
					icon={todoIcon}
					tasks={tasks}
					status="todo"
					handleDelete={handleDelete}
					setActiveCard={setActiveCard}
					onDrop={onDrop}
					handleEdit={handleEdit}
					editingIndex={editingIndex}
					setEditingIndex={setEditingIndex}
				/>
				<TaskColumn
					title="Doing"
					icon={doingIcon}
					tasks={tasks}
					status="doing"
					handleDelete={handleDelete}
					setActiveCard={setActiveCard}
					onDrop={onDrop}
					handleEdit={handleEdit}
					editingIndex={editingIndex}
					setEditingIndex={setEditingIndex}
				/>
				<TaskColumn
					title="Done"
					icon={doneIcon}
					tasks={tasks}
					status="done"
					handleDelete={handleDelete}
					setActiveCard={setActiveCard}
					onDrop={onDrop}
					handleEdit={handleEdit}
					editingIndex={editingIndex}
					setEditingIndex={setEditingIndex}
				/>
			</main>
		</div>
	)
}

export default App
