import type { Task } from "../types/type";

const JSONpath = "./task/task.json";

async function writeData(newTask:string | Task[]): Promise<void>{
    if (Array.isArray(newTask)) {
        await Bun.write(JSONpath, JSON.stringify(newTask, null, 2))
    } else {
        await Bun.write(JSONpath, newTask)
    }
    
}

export default writeData 