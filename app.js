
const {exec, execSync} = require("child_process")


console.log(execSync("git config user.name").toString().trim())
