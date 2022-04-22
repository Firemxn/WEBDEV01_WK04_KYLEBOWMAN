import inquirer from "inquirer";
import questions from "./questions.js";

const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return `Unfortunately you failed. ${percentage}% | ${score}/${possible}`
    } else {
        return `Congrats, you passed!${percentage}% | ${score}/${possible}`
    }

}
const welcome = () => {
    console.clear()
    console.log('Welcome to my quiz')
    console.log('')
}

const run = async (questions, inquirer, welcome, fn) => {

    welcome()

    let count = 0;
    const result = await inquirer.prompt(questions)


    if (result.q1 == "1891") { ++count }
    if (result.q2 == "1983") { ++count }
    if (result.q3 == "17") { ++count }
    if (result.q4 == "6") { ++count }
    if (result.q5 == "195") { ++count }

    const log = fn(count, questions.length)
    console.log(log)




}
run(questions, inquirer, welcome, rubric)
