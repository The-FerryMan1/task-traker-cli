import errorMessage from "./errorMessage";
import readData from "./readData";

async function listInProgress(): Promise<void> {
    try {
       const list = await readData()

        const doneTask = list.filter((t) => t.status === "in progress");

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
export default listInProgress