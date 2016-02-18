//http://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript


function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1, 3), 16), 
    g: parseInt(hexString.slice(3, 5), 16), 
    b: parseInt(hexString.slice(5, 7), 16)
  }
}