// Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 5; j >= 6 - i; j--) {
    row += j;
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 6 - i; j++) {
    row += j;
  }
  console.log(row);
}

function longestSubString(str) {
  const obj={}

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]=obj[str[i]]+str[i]
    } else {
      obj[str[i]]=obj[str[i]]+str[i];
    }
  }
  return obj;
}

console.log(longestSubString('bacdb'));
