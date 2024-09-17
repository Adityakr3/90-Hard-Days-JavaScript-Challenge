// "5. Group items on the basis of age of given array of object.
// const peoples = [
// { name:"a", age:21 },
// { name:"b", age:20 },
// { name:"c", age:22 },
// { name:"d", age:21 },
// { name:"e", age:22 },
// { name:"f", age:22 }
// ]
// expected output = {
// 21:[ { name:"a", age:21 }, { name:"d", age:21 }],
// 20: [{ name:"b", age:20 }],
// 22: [{ name:"c", age:22 }, { name:"e", age:22 },
// { name:"f", age:22 }]
// }

const peoples = [
{ name:"a", age:21 },
{ name:"b", age:20 },
{ name:"c", age:22 },
{ name:"d", age:21 },
{ name:"e", age:22 },
{ name:"f", age:22 }
]
const  GroupByAge = (peoples) => {
    const result = {}
    for (const person of peoples) {
        const age = person.age
        if(!result[age]){
            result[age]=[]
        }
        result[age].push(person)
    }
    return result
};
console.log(GroupByAge(peoples));
