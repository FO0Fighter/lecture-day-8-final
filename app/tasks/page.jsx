import { getTasks } from '@/lib/taskStore'
import { addTask } from './actions'
import AddTaskForm from './AddTaskForm'

// Server Component — ยังไม่มี form เชื่อม action (⌨️ บล็อก 1.2 เพิ่ม <form action={addTask}>)
export default function TasksPage() {
  const tasks = getTasks()

  return (
    <div className="p-6 max-w-md">
      <AddTaskForm />
      <ul className="mt-4">
        {tasks.map(t => <li key={t.id}>
          {t.title}
        <form action={removeTask}>
          <input type="hidden" name="id" value={t.id} />
          <button type="submit">ลบ</button>
        </form>
        </li>)}
      </ul>
    </div>
  )
}
