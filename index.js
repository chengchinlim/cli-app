
const program = require('commander')

// console.log(process.argv[2])

program.version('0.1')

// Commands

program.command('register <name>')
    .description('Register user')
    // .requiredOption('-s', 'User status')
    .option('-u, --isUpper <value>', 'To upper case', 'false')
    .action(function (name, value) {
        if (value.isUpper === 'true') {
            console.log(`Registering ${name.toUpperCase()}`)
        } else {
            console.log(`Registering ${name}`)
        }
    })

program.parse(process.argv)

