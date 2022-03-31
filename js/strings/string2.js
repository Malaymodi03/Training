//string search

let st = "in the string find where find occurs";
console.log(st)
console.log(st.indexOf('find')) //returns first index where find is 
console.log(st.lastIndexOf('find'))// returns last indes wherefind is
console.log(st.search('where'))
console.log(st.includes('the'))
console.log(st.startsWith('the'))
console.log(st.endsWith('occurs'))