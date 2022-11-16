// localStorage.clear()

// let todos=[{
//     title:'Chennai',
//     state:'Incomplete'
// }, {
//     title:'Office',
//     state:'Ongoing'
// }, {
//     title:'Web Dev',
//     state:'Ongoing'
// }, {
//     title:'JS',
//     state:'Ongoing'
// }, {
//     title:'South Africa',
//     state:'Complete'
// }]

let todos

let insert=document.querySelector('.print')

let display=function () {
    todos=localStorage.getItem('todos')
    todos=JSON.parse(todos)
    console.log(todos)
    console.log(JSON.stringify(todos))

    if(todos!==null) {
        insert.innerHTML=""
        todos.forEach(function (todo) {
            let list=document.createElement('p')
            list.textContent=`${todo.title} - ${todo.state}`
            insert.appendChild(list)
            // insert.innerHTML=`${todo.title} - ${todo.state}`
        })
    }
    else {
        insert.innerText='No ToDo available'
        todos=[]
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}

display()

document.querySelector('#insert').addEventListener('change', function(e) {
    let input=e.target.value
    todos.push({
        title: input,
        state: 'Incomplete'
    })
    localStorage.setItem('todos',JSON.stringify(todos))
    display()
    // let add=document.querySelector('.add')
    // let list=document.createElement('p')
    // list.textContent=`${input}`
    // add.appendChild(list)
})

// document.querySelector('.insert').addEventListener('click', function () {
//     let add=document.querySelector('.add')
//     let list=document.createElement('li')
//     list.textContent=`${input}`
//     add.appendChild(list)
// })

document.querySelector('#hide-complete').addEventListener('change', function(e) {
    insert.innerHTML=''
    
    if (e.target.checked) {
        let hideComplete=todos.filter(function(todo) {
            if (todo.state.toLowerCase().includes('incomplete') || (todo.state.toLowerCase().includes('ongoing'))) {
                return todo.state
            }
        })
        hideComplete.forEach(function (todo) {
            let list=document.createElement('p')
            list.textContent=`${todo.title} - ${todo.state}`
            insert.appendChild(list)
            // insert.innerHTML=`${todo.title} - ${todo.state}`
        })
    }
    
    else {
        display()
    }
})

// document.querySelector('.display').addEventListener('click', function () {
//     insert.innerHTML=''
//     display()
// })

let search={
    value:''
}

// let result=document.querySelector('.result')

document.querySelector('#search').addEventListener('input', function (e) { 
    insert.innerHTML=''
    search.value=e.target.value
    search=todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(search.value.toLowerCase())
    })
    // console.log(search.value)
    // console.log(search)
    // result.innerHTML=''
    search.forEach(function (todo) {
        let p=document.createElement('p')
        p.textContent=`${todo.title} - ${todo.state}`
        insert.appendChild(p)
        // display()
    })
    // result.forEach(function (todo) {
    //     let search=document.querySelector('.result')
    //     let p=document.createElement('p')
    //     p.textContent=`${todo.title}`
    //     search.appendChild(p)
    // })
})

// document.querySelector('.search').add

document.querySelector('#delete').addEventListener('click', function () {
    localStorage.removeItem('todos')
    todos=[]
    // localStorage.clear()
    // insert.innerHTML=""
    display()
})