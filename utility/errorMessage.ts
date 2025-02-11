import { colors } from "../colors/color";
function errorMessage(message:string):void{
    console.log(`${colors.red}${message}\n`)
}
export default errorMessage