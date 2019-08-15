/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 00:52:46
 * @LastEditTime: 2019-08-14 09:57:27
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
    // for(let i = 1; i < this.minHeap.length; i ++) {
    //   if(minNum >= this.minHeap[i]) {
    //     minNum = this.minHeap[i]
    //     minIndex = i
    //   }
    // }
    let left_i = 0
    let right_i = this.minHeap.length
    while (left_i <= right_i) {
      if(minNum >= this.minHeap[left_i]) {
        minNum = this.minHeap[left_i]
        minIndex = left_i
      }
      if(minNum >= this.minHeap[right_i]) {
        minNum = this.minHeap[right_i]
        minIndex = right_i
      }
      left_i ++
      right_i --
    }
    this.minHeap.push(minNum)
    this.minHeap.splice(minIndex, 1)
  }
  if(nums.length >= k) {
    this.minHeap = nums.filter((value, index) => index < k).map(value => value)
    this.updateHeap()
    // console.log(this.minHeap)
    for(let i = k; i < nums.length; i ++) {
      if(this.minHeap[this.minHeap.length - 1] <= nums[i]) {
        this.minHeap[this.minHeap.length - 1] = nums[i]
      }
      this.updateHeap()
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
var action = ["KthLargest","add","add","add","add","add"]
var params = [[2,[0]],[-1],[1],[-2],[-4],[3]]
// var action = ["KthLargest","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add","add"]
// var params = [[7,[-10,1,3,1,4,10,3,9,4,5,1]],[3],[2],[3],[1],[2],[4],[5],[5],[6],[7],[7],[8],[2],[3],[1],[1],[1],[10],[11],[5],[6],[2],[4],[7],[8],[5],[6]]


// [null,-1,0,0,0,1]
// console.log(params[0][1])
var a = eval(`new ${action[0]}(${params[0][0]}, ${JSON.stringify(params[0][1])})`)
// console.log(a)
for(let i = 1; i < params.length; i ++) {
  a.add(params[i][0])
}

////////////////////////////////

class KthLargest {
    constructor(size, nums) {
        if (size < 1) {
            throw 'size must bigger than 0!';
        }
        this.size = size;
        this.store = [0];
        
        for (const n of nums) {
            this.add(n);
        }
    }
    
    get len() {
        return this.store.length - 1;
    }
    
    swap(i, j) {
        const t = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = t;
    }

    compare(i, j) {
        return this.store[i] - this.store[j];
    }
    
    swim(i) {
        while (i > 1) {
            const p = Math.floor(i / 2);
            if (this.compare(i, p) >= 0) break;
            this.swap(i, p);
            i = p;
        }
    }
    
    sink(i) {
        while((i * 2) <= this.len) {
            let c = i * 2;
            if (c < this.len && this.compare(c+1, c) < 0) c = c + 1;
            if (this.compare(i, c) <= 0) break;
            this.swap(i, c);
            i = c;
        }
    }
    
    top() {
        if (this.len <= 0) {
            return null;
        }
        return this.store[1];
    }
    
    delTop() {
        const top = this.top()
        if (top !== null) {
            this.swap(1, this.len);
            this.store.length -= 1;
            this.sink(1);            
        }
        return top;
    }
    
    insert(n) {
        if (this.len < this.size) {
            this.store.push(n);
            this.swim(this.len);
        }
    }
    
    add(n) {
        if (this.len === this.size) {
            const top = this.top();
            if (top >= n) {
                return top;
            }
            this.delTop();
        }
        this.insert(n);
        return this.top();
    }
}
////////////////////////////////

var heapify = function (arr, i) {
    let len = arr.length,
        left = 2 * i,
        right = 2 * i + 1,
        minimum = i;

    if (left < len && arr[left] < arr[minimum]) minimum = left;
    if (right < len && arr[right] < arr[minimum]) minimum = right;

    if (minimum !== i) {
        const tmp = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = tmp;
        heapify(arr, minimum);
    }
}

var buildMinHeap = function (arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    let i = 0, len = nums.length;
    this.k = k;
    this.nums = [];
    for (i = 0; i < k && i < len; i++) {
        this.nums[i] = nums[i];
    }
    buildMinHeap(this.nums);
    for (; i < len; i++) {
        const num = nums[i];
        if (this.nums[0] < num) {
            this.nums[0] = num;
            heapify(this.nums, 0);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    const k = this.k;
    if (this.nums.length === k) {
        if (this.nums[0] < val) {
            this.nums[0] = val;
            heapify(this.nums, 0);
        }
    } else {
        this.nums.push(val);
        buildMinHeap(this.nums);
    }
    return this.nums[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */