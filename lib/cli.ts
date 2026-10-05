#!/usr/bin/env node

import chalk from 'chalk'
import { join } from 'path'

const args = process.argv.slice(2)

const currCommand = args[0]

if (currCommand === 'generate' || currCommand === 'g') {
	if (!args[1]) {
		console.log(chalk.bgRed(`Не задан путь к xsd схеме!`))
		process.exit(1)
	}

	if (!args[2]) {
		console.log(chalk.bgRed(`Не задан путь для вывода!`))
		process.exit(1)
	}

	const filePath = join(process.cwd(), args[1])
	const destPath = join(process.cwd(), args[2])
} else {
	console.log(chalk.bgRed(`Неизвестная команда ${currCommand}!`))
	process.exit(1)
}

process.exit(0)
