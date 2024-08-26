/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Fragment } from "react"

import "./TaskColumn.css"
import TaskCard from "./TaskCard"
import DropArea from "./DropArea"

const TaskColumn = ({
	title,
	icon,
	tasks,
	status,
	handleDelete,
	onDrop,
	setActiveCard,
	handleEdit,
	editingIndex,
	setEditingIndex,
}) => {
	return (
		<section className="task_column w-full sm:w-9/12 md:w-4/5 p-4 rounded-xl mt-8 overflow-hidden border-[3px] border-[#6457f9ab]">
			<h2 className="task_column_heading justify-center py-2 bg-[#6457f9ab] -m-4 mb-0 text-white border-b-[3px] border-[#6457f9ab]">
				<img className="task_column_icon" src={icon} alt="" /> {title}
			</h2>
			<DropArea onDrop={() => onDrop(status, 0)} />
			{tasks.map(
				(task, index) =>
					task.status === status && (
						<Fragment key={index}>
							<TaskCard
								title={task.task}
								tags={task.tags}
								styles={task.styles}
								handleDelete={handleDelete}
								index={index}
								setActiveCard={setActiveCard}
								handleEdit={handleEdit}
								editingIndex={editingIndex}
								setEditingIndex={setEditingIndex}
							/>
							<DropArea onDrop={() => onDrop(status, index + 1)} />
						</Fragment>
					)
			)}
		</section>
	)
}

export default TaskColumn
