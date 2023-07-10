var removeElement = function (nums, val) {
    let position = 0; // Position to place the non-target elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[position] = nums[i];
            position++;
        }
    }

    return position;
};