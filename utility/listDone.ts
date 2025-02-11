import readData from "./readData";
import errorMessage from "./errorMessage";
async function listDone(): Promise<void> {
    try {
        const list = await readData()
        const doneTask = list.filter((t) => t.status === "done");

        if (doneTask.length > 0) {
            console.table(doneTask);
        } else {
            errorMessage('No data found')
        }
    } catch (error) {
        const errorMess = (error as Error).message;
        errorMessage(errorMess)
    }
}
export default listDone