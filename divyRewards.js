/* Imagine that you're a teacher who's just graded the final exam in a class.
You have a list of student scores on the final exam in a particular order
(not necessarily sorted), and you want to reward your students.You decide to
do so fairly by giving them arbitrary rewards following two rules:
 
1) All students must receive at least one reward.
2) Any given student must receive strictly more rewards than an adjacent student
(a student immediately to the left or to the right) with a lower score and must
receive strictly fewer rewards than an adjacent student with
a higher score.
 
 
Write a function that takes in a list of scores and returns thE minimum number
of rewards that you must give out to students to satisfy the two rules.
You can assume that all students have different scores; in other words, the scores
are all unique.
 
Example:
Input: Score = [8, 4, 2, 1, 3, 6, 7, 9, 5, 11]
while we find a local min/max just keep going forward

Output: 27
you would give out the following rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1, 2]
*/

const divyRewards = list => {
  let i = 0, j = 1;
  let descending = false
  while (j < list.length) {
    if (list[j] < list[j - 1]) {
      j++
    } else {

    }
  }
}

let Score = [8, 4, 2, 1, 3, 6, 7, 9, 5, 11];
console.log(divyRewards(score));

/*
hint 1
You could try iterating through the input list of scores and incrementing the
number of rewards you give to each student if they have a greater score than
the previous student's score. However, if you reach a student with a smaller
score than the previous student's score, you'll have to backtrack through the
array to fix previous reward assignments. During this backtrack, is it correct to
simply increment the reward
of a student whose score is greater than the next student's score?

hint 2
Notice that there are local mins and local maxes in the input list of
scores: scores that are smaller than both scores next to them and scores
that are greater than both scores next to them.Find the local mins, and try
   expanding away from them
until you reach local maxes, assigning(and incrementing) rewards as you go.

**** Other Attempt *****
const divyRewards = list => {
  let rewards = [];

  function expandOutward(arr) {
    if (arr.length < 1) return null;

    let smallest = Math.min(...arr);
    let idx = arr.indexOf(smallest);

    for (let i = idx - 1; i >= 0; i--) {
      arr[i]
    }

    for (let i = idx + 1; i >= 0; i--) {
      arr[i]
    }


  }
}
*/

