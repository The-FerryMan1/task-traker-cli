import { type Task } from "../types/type";

import readData from "./readData";
import writeData from "./writeData";
import successMessage from "./successMessage";
import errorMessage from "./errorMessage";
async function updateTask(value: RegExpMatchArray | null): Promise<void> {
  if (value && value[1] && value[2]) {
    const id = Number(value[1]);
    try {
      let list = await readData();
      const task = list.find((t) => t.id === id);
      if (!task) {
        errorMessage("Task does't exist");
      } else {
        task.description = value[2];
        task.updated_At = Date.now();
        await writeData(list);
        successMessage("Task Updated");
      }
    } catch (error) {
      const errorMess = (error as Error).message;
      errorMessage(errorMess);
    }
  }
}

export default updateTask;
