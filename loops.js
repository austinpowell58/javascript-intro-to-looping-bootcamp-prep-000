function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) 
    array.push("I am 1 strange loop.")
    else 
    array.push("I am ${i} strange loop.")
    }
    return array
}

function whileLoop(n) {
  while (n > 0) { 
    console.log(--n)
}
return "done"
}

function doWhileLoop(array) {
  do {
    array.pop();
    return array
  } while 
<<<<<<< HEAD
  (maybeTrue() && array.length > 1)
=======
  (maybeTrue() && array.length > 0)
>>>>>>> e3eff57da7de41601630201a0691c9485858cba2
}
  


