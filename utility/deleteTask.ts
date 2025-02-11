import { type Task } from "../types/type";

import readData from "./readData";
import writeData from "./writeData";
import successMessage from "./successMessage";
import errorMessage from "./errorMessage";
async function deleteTask(value: RegExpMatchArray | null): Promise<void> {
    if (value && value[1]) {
        const id = Number(value[1]);
        try {
            let list = await readData();
            const task = list.find((t) => t.id === id);
            if (!task) {
                errorMessage("Task does't exist");
            } else {
                const filtered = list.filter((t)=> t.id !==id)
                await writeData(filtered);
                successMessage("Task deleted");
            }
        } catch (error) {
            const errorMess = (error as Error).message;
            errorMessage(errorMess);
        }
    }
}

export default deleteTask;
