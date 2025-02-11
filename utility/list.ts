import errorMessage from "./errorMessage";
import readData from "./readData";

async function list(): Promise<void> {
    try {
        const list = await readData()
        if (list.length > 0) {
            console.table(list);
        } else {
            errorMessage("No data found");
        }
    } catch (error) {
        const errorMess = (error as Error).message;
        errorMessage(errorMess)
    }
}
export default list