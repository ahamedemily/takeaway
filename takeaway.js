/*let num = 3
function fibo(num){
  if (num < 2) {
    console.log(num)
    return num
  } else {
    console.log(num)
    return fibo(num -1) + fibo(num -2)
  }
}
console.log(fibo(num))
*/

const canWin =  num => {
  if (num < 2) {
      return false
  }

  let movesAllowed = [2, 3, 5]

  movesAllowed.forEach(move => {
      if (!canWin(num - move)) {
          return true
      }
  })

  return false
}

let i = 0

for ( i =1; i<10; i++)  
{
  if (canWin(i) == true)
  {
    console.log ("This is a winner move")
  }  
  else 
  {
  console.log ("Sorry you lost")
  }
}

/*if canWin(1) == true

// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true */