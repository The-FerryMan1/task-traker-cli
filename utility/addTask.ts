import { type Task } from "../types/type";

import readData from "./readData";
import writeData from "./writeData";
import successMessage from "./successMessage";
import errorMessage from "./errorMessage";
async function addTask(value: RegExpMatchArray | null): Promise<void> {
    if (value && value[1]) {
        try {
            let list: Task[] = await readData();
            const id = list.length ? list[list.length - 1].id + 1 : 1;
            const payload: Task = {
                id: id,
                description: value[1],
                status: "in progress",
                created_At: Date.now(),
                updated_At: null,
            };
            list = [...list, payload];
            const newTask: string = JSON.stringify(list, null, 2);
            await writeData(newTask)
            successMessage('Task created')
        } catch (error) {
            const errorMsg = (error as Error).message;
            errorMessage(errorMsg)
        }
    }else{
        errorMessage('descrition is required')
    }
}

export default addTask;
