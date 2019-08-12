/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 00:52:46
 * @LastEditTime: 2019-08-13 01:39:51
 * @LastEditors: 斯周
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.minHeap = new Array(k)

  this.updateHeap = () => {
    let minNum = this.minHeap[0]
    let minIndex = 0
    for(let i = 1; i < this.minHeap.length; i ++) {
      if(minNum >= this.minHeap[i]) {
        minNum = this.minHeap[i]
        minIndex = i
      }
    }
    this.minHeap.push(minNum)
    this.minHeap.splice(minIndex, 1)
    console.log(this.minHeap)
  }
  if(nums.length >= k) {
    this.minHeap = nums.filter((value, index) => index < k).map(value => value)
    this.updateHeap()
    // console.log(this.minHeap)
    for(let i = k; i < nums.length; i ++) {
      if(this.minHeap[this.minHeap.length - 1] <= nums[i]) {
        this.minHeap[this.minHeap.length - 1] = nums[i]
      }
    }
  } else {
    this.minHeap = nums.map((value, index) => {
      return nums[index]
    })
    this.updateHeap()
  }
  // console.log(this.minHeap)
};


/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if(this.minHeap.length < this.k) {
    this.minHeap.push(val)
    this.updateHeap()
  } else if(this.minHeap[this.minHeap.length - 1] < val) {
    this.minHeap[this.minHeap.length - 1] = val
    this.updateHeap()
  }
  console.log(this.minHeap[this.minHeap.length - 1], 'add', val, 
  // this.minHeap
  )
  return this.minHeap[this.minHeap.length - 1]
};
// var a = new KthLargest(1,[])

// a.add(-3)
// a.add(-2)
// a.add(-4)
// a.add(0)
// a.add(4)
// ["KthLargest","add","add","add","add","add"]
// [[1,[]],[-3],[-2],[-4],[0],[4]]
// var action = ["KthLargest","add","add","add","add","add"]
// var params = [[2,[0]],[-1],[1],[-2],[-4],[3]]
var action = ["KthLargest","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add"]
var params = [[7,[-10,1,3,1,4,10,3,9,4,5,1]],[3],[2],[3],[1],[2],[4],[5],[5],[6],[7],[7],[8],[2],[3],[1],[1],[1],[10],[11],[5],[6],[2],[4],[7],[8],[5],[6]]


// [null,-1,0,0,0,1]
// console.log(params[0][1])
var a = eval(`new ${action[0]}(${params[0][0]}, ${JSON.stringify(params[0][1])})`)
// console.log(a)
// for(let i = 1; i < params.length; i ++) {
//   a.add(params[i][0])
// }
