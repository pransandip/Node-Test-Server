const getText = require('./02-promise-pattern')

const start = async () => {
    try {
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}

start();