# Dynamic Programming Assignments

This repository contains solutions to two dynamic programming problems: climbing stairs and maximizing stock profit. The implementations are designed to be efficient and straightforward, demonstrating the use of dynamic programming techniques.

## Table of Contents
- [Dynamic Programming Assignments](#dynamic-programming-assignments)
  - [Table of Contents](#table-of-contents)
  - [Task 1: Climbing Stairs](#task-1-climbing-stairs)
    - [Problem Statement](#problem-statement)
    - [Implementation](#implementation)

## Task 1: Climbing Stairs

### Problem Statement
You are climbing a staircase with `n` steps. Each time you can either climb 1 or 2 steps. The goal is to find the number of distinct ways to reach the top.

### Implementation
```javascript
// Function to calculate the number of distinct ways to climb to the top of a staircase
function climbStairs(n) {
    // Base cases
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Array to store the number of ways to reach each step
    const dp = new Array(n + 1);
    dp[1] = 1; // 1 way to climb 1 step
    dp[2] = 2; // 2 ways to climb 2 steps

    // Fill the dp array using the recurrence relation
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example Usage
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
# Assignment-on-Dynamic-Programming-Part-1
