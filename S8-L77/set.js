let set = new Set([1, 1, 1]);

set.add(2);
// set.delete(1);
console.log(set.has(1));
set.clear();

for (element of set) {
  console.log(element)
}