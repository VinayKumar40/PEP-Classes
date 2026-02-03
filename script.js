let str = "the sky";

function reverseString(s) {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return rev;
}

let r1 = reverseString(str);
console.log(r1);

console.log(str);

let r2 = reverseString(str);
console.log(r2);

console.log(str);

let sky = "";
for (let i = 4; i < str.length; i++) {
  sky += str[i];
}

let rSky = reverseString(sky);
console.log(rSky);

console.log(rSky[2].toUpperCase());