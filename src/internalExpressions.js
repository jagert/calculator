const calculate = expression => {
  try {
    return eval(expression)
  } catch (e) {
    return false
  }
}

const isOperator = char =>
  char === '+' || char === '-' || char === '*' || char === '/' || char === '%'
const isValidPrefix = prefix => prefix === '(' || isOperator(prefix) || prefix === undefined
const isValidSuffix = suffix => suffix === ')' || isOperator(suffix) || suffix === undefined

export const executeExpression = expression => {
  const internalExpressionEnd = expression.indexOf(')')
  const internalExpressionStart = expression
    .substring(0, internalExpressionEnd !== -1 ? internalExpressionEnd : undefined)
    .lastIndexOf('(')

  if (
    internalExpressionEnd + 1 &&
    internalExpressionStart + 1 &&
    isValidPrefix(expression[internalExpressionStart - 1]) &&
    isValidSuffix(expression[internalExpressionEnd + 1])
  ) {
    const internalExpression = expression
      .substring(internalExpressionStart + 1, internalExpressionEnd)
      .replace(/ /g, '')

    return internalExpression.length > 0
      ? calculate(
          executeExpression(
            expression.substring(0, internalExpressionStart) +
              calculate(internalExpression) +
              expression.substr(internalExpressionEnd + 1)
          )
        )
      : false
  }

  if (!(internalExpressionEnd + 1) && !(internalExpressionStart + 1)) return calculate(expression)

  return false
}
