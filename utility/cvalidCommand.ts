import { validCommands } from "../command/validCommand";

function isValidCommand(line: string): boolean {
    return validCommands.some(command => line.startsWith(command));
}

export default isValidCommand