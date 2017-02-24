const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let add = function(num, sum, numsLeft, completionCallback) {
//  let num1 = parseInt(num);
//  sum += num1;
//  numsLeft -= 1;
//  console.log(sum);
//  addNumbers(sum, numsLeft,completionCallback);
// };
//
// function addNumbers(sum, numsLeft, completionCallback){
//   if (numsLeft > 0){
//     reader.question("Give me?", add(reader.output, sum, numsLeft, completionCallback));
//
//     } else {
//       return completionCallback(sum);
//     }
//   }
// function addNumbers(sum, numsLeft, completionCallback){
//   if (numsLeft > 0){
//     reader.question("Give me?", function(num) {
//       let num1 = parseInt(num);
//       sum += num1;
//       numsLeft -= 1;
//       console.log(sum);
//       addNumbers(sum, numsLeft,completionCallback);
//     });
//     } else {
//       return completionCallback(sum);
//     }
//   }
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
let askIfGreaterThan = (el1, el2, Callback) => {
  reader.question(`Is ${el1} greater than ${el2} (y/n)`, Callback);
};

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
    if (i === (arr.length - 1)) {
      outerBubbleSortLoop(madeAnySwaps);
    }else {
      askIfGreaterThan(arr[i],arr[i+1], function(answer2){
        if (answer2 === "y"){
          let var1 = arr[i];
          let var2 = arr[i + 1];
          arr[i] = var2;
          arr[i+1] = var1;
          madeAnySwaps = true;
          console.log(arr);
        }
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    }else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}


// function absurdBubbleSort(arr, sortCompletionCallback){
//   let sorted = false;
//   while (!sorted){
//     sorted = true;
//     for (let i = 0; i < arr.length - 1; i++){
//
//
//     });
//   }
// }
  // if (sorted === true) sortCompletionCallback(arr);
// }

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
