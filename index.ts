import { colors } from "./colors/color";
import { addRegex, deleteRegex, MarkRegex, updateRegex } from "./regex/regex";
import addTask from "./utility/addTask";

import listDone from "./utility/listDone";
import listInProgress from "./utility/listInProgress";
import listTodo from "./utility/listTodo";
import list from "./utility/list";
import updateTask from "./utility/updateTask";

import deleteTask from "./utility/deleteTask";
import markInProgress from "./utility/markInProgress";
import markDone from "./utility/markDone";
import markTodo from "./utility/markTodo";
import errorMessage from "./utility/errorMessage";
import isValidCommand from "./utility/cvalidCommand";
const prompt = `${colors.green}Task-cli:${colors.reset} `;

process.stdout.write(prompt);


for await (const line of console) {


    if (!isValidCommand(line)) {
        errorMessage(`Invalid command: ${line}`);
        process.stdout.write(prompt);
        continue;
    }

    if (line.includes("add")) {
        const value = line.match(addRegex);
        await addTask(value)
    }

    if (line === "list done") {
        await listDone()
    }

    if (line === "list in-progress") {
        await listInProgress()
    }

    if (line === "list todo") {
        await listTodo()
    }

    if (line === "list") {
        await list()
    }

    if (line.includes("update")) {
        const value = line.match(updateRegex);
        await updateTask(value)
    }

    if (line.includes("delete")) {
        const value = line.match(deleteRegex);
        await deleteTask(value)
    }

    if (line.includes('mark-in-progress')) {
        const value = line.match(MarkRegex)
        await markInProgress(value)

    }

    if (line.includes('mark-done')) {
        const value = line.match(MarkRegex)
        await markDone(value)

    }
    if (line.includes('mark-todo')) {
        const value = line.match(MarkRegex)
        await markTodo(value)

    }

    if (line === "clear") {
        console.clear();
    }

    process.stdout.write(prompt);
}
