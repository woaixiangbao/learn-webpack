export default function printMe(){
    let a = ['a','b','c'];
    let b = a.map(item => {
        return item + '##'
    })
    console.log(b);
}