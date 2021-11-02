class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> table = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            Integer diff = (Integer)(target - nums[i]);
            if (table.containsKey(nums[i])) {
                int[] result = new int[2];
                result[0] = i;
                result[1] = table.get(nums[i]);
                return result;
            }
            table.put(diff, i);
        }
        return null;
    }
}
