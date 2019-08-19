# Math expressions parser and executor

The main aim is to test and compare performance of different parsing algorithms.

# Current realized algorithms:

- method of executing internal expressions, which are inside brackets. As soon as the expression is found
  it is executed and it's result replaces the expression in the initial expression string.

# Aims:

- realize algorithm of parsing and calculation initial expression by one pass over using stack;
- realize algorithm of parsing and calculation by 2 steps: conversion initial expression string
  with prefix notation, executing converted expression recursively
- compare timestamps of different algorithms

# How to use:

- clone repository:
> $ git clone https://github.com/jagert/calculator.git

- install dependencies:
> $ npm i

- run script:
> $ npm run calc

- run tests:
> $ npm test
