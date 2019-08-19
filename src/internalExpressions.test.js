const apply = require('esm')(module)('./internalExpressions').executeExpression

describe(`Test algorithm with executing internal expressions:`, () => {
  test.each`
    expression          | result
    ${'((((8+1+1))))'}  | ${10}
    ${'((((())))'}      | ${false}
    ${'(((()))))'}      | ${false}
    ${'(1+2*(1+2)+3+)'} | ${false}
  `('$expression parsing and executing result should be $result', ({ expression, result }) => {
    expect(apply(expression)).toEqual(result)
  })
})
