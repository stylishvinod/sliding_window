

// https://leetcode.com/problems/moving-average-from-data-stream/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.len = 0;
    this.arr = [];
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.len++;
    this.total += val;
    this.arr.push(val);
    if(this.len > this.size) {
        this.total -= this.arr[0];
        this.len--;
        this.arr = this.arr.slice(1);
        return this.total / this.len;
    } else {
        return this.total / this.len;
    }
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */