/*
 * @Author: 斯周
 * @Date: 2019-08-15 20:56:30
 * @LastEditors: 斯周
 * @LastEditTime: 2019-08-15 20:56:52
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
};
class MaxHeap {
  constructor(k, nums) {
    this.store = [0]
    this.size = k
    for (const n of nums) {
      this.add(n);
    }
  }
  get len() {
    return this.store.length - 1
  }
  swap(i, j) {
      const t = this.store[i];
      this.store[i] = this.store[j];
      this.store[j] = t;
  }
  compare(i, j) {
    return this.store[i] - this.store[j];
  }
  update() {
    
  }
}
new MaxHeap([1,2,3,4])