const fs = require("fs")

const build = new Date()
	.toISOString()
	.replace("T", "X")
	.replaceAll(":", ".")
	.substring(0, 19)
	.replaceAll("-", ".")
	.slice(2)
	.replaceAll(".", "")
	.replace("X", ".")

const file = JSON.parse(fs.readFileSync("package.json", "utf-8"))

file.number = `release.${build}`

fs.writeFileSync("package.json", JSON.stringify(file, null, "\t"))
fs.appendFileSync("package.json", "\n")
