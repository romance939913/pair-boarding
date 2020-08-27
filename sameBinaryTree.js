// An array of integers is said to represent the Binary Search Tree (BST)obtained
// by inserting each integer in the array, from left to right, into the BST.

// Write a function that takes in two arrays of integers and determines whether
// these arrays represent the same BST. Note that you're not allowed to construct
// any BSTs in your code

//  A BST is a Binary Tree that consists only of BST nodes.A node is said
//  to be a valid BST node if and only if it satisfies the BST property: its
//  value is strictly greater than the values of every node to its left;
//  its value is less than or equal to the values of every node to its right;
//  and its children nodes are either valid BST nodes themselves or none/null


// Example 1:
// ArrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
// ArrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]



// Output = true // Both arrays represent the BST below


//        10
//       /   \
//      8     15
//    /      /   \
//   5     12    94
// /      /     /
// 2     11    81

function checkIfSameBTree(arr1, arr2) {
  // base case
  let hasSameOrder = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      hasSameOrder = false;
      break;
    }
  }
  if (hasSameOrder) return true;
  let left = false;
  let right = false;

  function recursiveCheck(array1, array2) {
    let first = array1[0];
  }

  recursiveCheck(arr1, arr2);

}
