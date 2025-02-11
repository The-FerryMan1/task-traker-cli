import { type Task } from "../types/type"
const JSONpath = "./task/task.json";

async function readData():Promise<Task[]>{
    const file = Bun.file(JSONpath);
    const taskContent = await file.text();
    return taskContent.trim()? JSON.parse(taskContent) : []
}

export default readData