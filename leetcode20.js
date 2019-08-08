var isValid = function(s) {
    const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
    ])
    const stack = []
    for(let i = 0; i < s.length; i ++) {
      if(stack.length) {
        if(stack[stack.length - 1] === map.get(s[i])) {
          stack.pop()
        } else {
          stack.push(s[i])
        }
      } else {
        stack.push(s[i])
      }
    }
    if(stack.length) {
      return false
    }
    return true
};
console.log(
isValid('()[](){})')

)