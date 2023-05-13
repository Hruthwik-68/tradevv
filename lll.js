let goldPrice = 2000; // initial price of gold
let userGold = 0; // amount of gold owned by the user
let userCash = 10000; // amount of cash owned by the user

// function to buy gold shares
function buyGoldShares(amount) {
  let totalCost = amount * goldPrice;
    if (totalCost > userCash) {
        console.log("Not enough cash to buy gold shares.");
            return;
              }
                userGold += amount;
                  userCash -= totalCost;
                    console.log(`Bought ${amount} gold shares for ${totalCost} dollars.`);
                    }
// function to sell gold shares
function sellGoldShares(amount) {
  if (amount > userGold) {
      console.log("Not enough gold shares to sell.");
          return;
            }
              let totalEarned = amount * goldPrice;
                userGold -= amount;
                  userCash += totalEarned;
                    console.log(`Sold ${amount} gold shares for ${totalEarned} dollars.`);
                    }
// example usage
buyGoldShares(5); // Bought 5 gold shares for 10000 dollars.
sellGoldShares(2); // Sold 2 gold shares for 4000 dollars.
console.log(`User has ${userGold} gold shares and ${userCash} dollars.`);
// Output: User has 3 gold shares and 6000 dollars.