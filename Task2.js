// Function to calculate the maximum profit from stock prices
function maxProfit(prices) {
    let maxProfit = 0;

    // Loop through the prices to find local minimum and maximum
    for (let i = 1; i < prices.length; i++) {
        // If the current price is higher than the previous price, we can make a profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

// Example Usage
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7
console.log(maxProfit([1, 2, 3, 4, 5])); // Output: 4
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0

// Time Complexity: O(n)
// Space Complexity: O(1)
