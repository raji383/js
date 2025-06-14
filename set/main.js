const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const kk ={}

entries.forEach((s,j)=>{

 kk[s]=j

})

console.log(kk);

