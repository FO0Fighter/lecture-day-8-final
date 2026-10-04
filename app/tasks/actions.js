// ⌨️ บล็อก 1.2 — พิมพ์ "use server" + addTask(formData) ตรงนี้
// 1.4 เปลี่ยนเป็น addTask(prevState, formData) · 1.6 เพิ่ม removeTask(formData)
"use server"

import { addTaskToStore } from "@/lib/taskStore"
import { revalidatePath } from "next/cache"

export const addTask =  async (prevState, formData) => {
     console.log("addTask >>", formData);
    
     const title = formData.get('title')

    if (!title || title.trim().length < 2) {
        return {
            error: "กรุณากรอกชื่อเรื่องอย่างน้อย 2 ตัวอักษร"
        }
    }

    addTaskToStore({ id: Date.now(), title: title.trim() })

    revalidatePath('/tasks')
    return {
        error: null
    }

    export const removeTask = async (formData) => {
        const id = Number(formData.get('id'))
        removeTaskFromStore(id)
        revalidatePath('/tasks')
    }
}