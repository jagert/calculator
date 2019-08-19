import { executeExpression } from './src/internalExpressions'

const expressionsToTest = ['((((8+1+1))))', '((((())))', '(((()))))', '(1+2*(1+2)+3+)']

const testExpressions = expressions => {
  expressions.forEach(expression => {
    const result = executeExpression(expression)
    console.log(
      "Parsing and execution result of '",
      expression,
      "' is: ",
      result ? result : 'Expression is invalid!'
    )
  })
}

testExpressions(expressionsToTest)
