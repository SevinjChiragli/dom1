// Создайте список в котором будут элементы списка с какими-то данными(допустим имена). 
// В одном из имен напишите undefind. 
// Задача пройтись по элементам и там где написано undefind заменить на "будет добавлено в будущем"
let h1=document.querySelector('h1')
console.log(h1);

let container=document.getElementsByTagName('ul')

let listOfMovies=document.getElementsByTagName('li')
listOfMovies=Array.from(listOfMovies)

const changes=()=>{
    listOfMovies.forEach((item)=> {
        console.log(item.innerText);
        
        if(item.innerText==='undefined'){
            item.innerText='Название фильма недоступно'
        }
        
    })
}
changes()








