"use client"
import { useFormStatus } from "react-dom"
import { addTask } from "./actions"

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            {pending ? "กำลังเพิ่ม..." : "เพิ่ม"}
        </button>
    )
}

const AddTaskForm = () => {
    const { pending } = useFormStatus()
    
    return (
        <form action={addTask} className="flex gap-2">
            <input name="title" placeholder="งานใหม่..." className="border p-2 flex-1" disabled={pending} />
            <SubmitButton />
        </form>
    )
}

export default AddTaskForm