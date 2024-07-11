// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

// for (let i = 5; i >= 1; i--) {
//   let row = '';
//   console.log('i---', i);
//   // for (let j = 5; j >= 6 - i; j--) {
//   //   row += j;
//   // }
//   console.log('j---', row);
// }

function longestSubString(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    if (!temp.includes(str[i])) {
      temp.push(str[i]);
    } else {
      break;
    }
  }
  return temp.length;
}

console.log(longestSubString('bacdb'));
