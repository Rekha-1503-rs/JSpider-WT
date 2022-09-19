console.log("Synchonous function")

for(let index=0; index<100; index++)
{

console.log(index)
}
console.log("Acynchonous function")

console.log("Synconous function")
setTimeout(()=>
{
    for(let index=0; index<100; index++)
{
console.log(index)
}
},100)
console.log("Acynchonous function")