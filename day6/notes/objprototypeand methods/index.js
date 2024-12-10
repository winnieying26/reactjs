// Object.keys(obj) keys[]
//Object.values(obj) values[]
//Object.entries(obj) => keys, values []
//Create an iterable object from Object

let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
};

// for(let prop of arr)
// forEach() filter() map() reduce()

let keys = Object.keys(westeros);
let vals = Object.values(westeros);
let entries = Object.entries(westeros);

console.log("Keys: ", keys);
console.log("Values: ", vals);
console.log("Entries: ", entries);

console.log(vals[0])
console.log(keys[3])
console.log(entries[2][1])