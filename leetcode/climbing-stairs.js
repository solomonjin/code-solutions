/*
Think about it as a tree of decisions. From step 0, there are two possible choices, 1 step vs 2 step
Each step decision will be followed up by another choice of 1 to 2 steps.
If you draw out the decision tree, the total number of nodes reaching the target node is the amount of paths that can be taken
Base case would be when the target is found, that path is 1 possible solution so it returns 1; If the total steps > target, return 0 as we went too far

HOWEVER, think about it in reverse
Start at the target step number, then go downwards, adding up the total possible paths from each step
If n = 6:
    - At step 6, there is one possible solution to get to 6 (itself)
    - At step 5, there is one one possible solution to get to 6 (+1)
    - At step 4 two possible solutions to get to 6, (+1, +2), but also total up the solutions from the previous two steps
    - At step 3, can access either steps 4 or 5, so total up solutions from those two steps (2 + 1 = 3)
    - At step 2, access either step 3 or 4 (3 + 2 = 5)
    - At step 1, access either step 2 or 3 (5 + 3 = 8)
    - Step 0, access step 1 or 2 (8 + 5 = 14)
    - Solution is 14 total paths
    - Since the first two steps down from n are going to ALWAYS be one solution each, start the loop afterwards
    - so loop iterations will be n - 2 total
*/
var climbStairs = function(n) {
    let stepOnce = 1,
        stepTwice = 1;

    for (let i = 0; i <= n - 2; i++) {
        const temp = stepOnce;
        stepOnce = stepOnce + stepTwice;
        stepTwice = temp;
    }

    return stepOnce;
};
