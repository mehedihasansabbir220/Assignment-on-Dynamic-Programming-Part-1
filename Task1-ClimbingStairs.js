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

// Time Complexity: O(n) 
// Space Complexity: O(n)
