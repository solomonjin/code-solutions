var TimeMap = function() {
    this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key]) {
        this.map[key].push([value, timestamp]); // Set value as array of value/timestamp pairs if key already exists.
    } else {
        this.map[key] = [[value, timestamp]] // If the key does not exist, create it and set value as an array of value/timestamp pairs
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.map[key];
    if (!values) return "";
    let [left, right, result] = [0, values.length - 1, ""];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (values[mid][1] === timestamp) return values[mid][0];
        if (values[mid][1] > timestamp) {
            right = mid - 1;
        } else {
            result = values[mid][0];
            left = mid + 1;
        }
    }
    return result;
};
/*
Timestamps will be set in a strictly increasing order which means the value array for each key is sorted by timestamp.
Perform binary search to more efficiently find the desired value.
*/


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
