import errorMessage from "./errorMessage";
import readData from "./readData";

async function listTodo(): Promise<void> {
    try {
        const list = await readData()

        const doneTask = list.filter((t) => t.status === "todo");

        if (doneTask.length > 0) {
            console.table(doneTask);
        } else {
            errorMessage("No data found");
        }
    } catch (error) {
        const errorMess = (error as Error).message;
        errorMessage(errorMess)
    }
}
export default listTodo