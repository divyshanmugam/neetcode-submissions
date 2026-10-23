class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    // coinChange(coins, amount) {
    //     let dp= new Array(amount+1).fill(Infinity);
    //     dp[0] = 0;
    //     for(let i=1;i<amount+1;i++){
    //         for(let c of coins) {
    //             if(i-c>=0) {
    //                 dp[i] = Math.min(dp[i],dp[i-c]+1);
    //             }
    //         }
    //     }
    //     return dp[amount] ===Infinity ? -1 : dp[amount];

    // }
    coinChange(coins, amount) {
        let map={};

        const dfs = (amount) => {
            if(amount === 0) return 0;
            if(map[amount] !== undefined) return map[amount];
            let res = Infinity;
            for(let c of coins) {
                if(amount-c>=0) {
                    res = Math.min(res,1+dfs(amount-c));
                }
            }
            map[amount] = res;
            return res;
        }
        const minCoins = dfs(amount);
        return minCoins ===Infinity ? -1 : minCoins;

    }
}
