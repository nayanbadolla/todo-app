let todos=[{
    title:'Chennai',
    state:'Inomplete'
}, {
    title:'Office',
    state:'Ongoing'
}, {
    title:'Web Dev',
    state:'Ongoing'
}, {
    title:'JS',
    state:'Ongoing'
}, {
    title:'South Africa',
    state:'Complete'
} ]

let insert=document.querySelector('.print')

let input

let display=function () {
    todos.forEach(function (todo) {
    let list=document.createElement('li')
    list.textContent=`${todo.title} - ${todo.state}`
    insert.appendChild(list)
    // insert.innerHTML=`${todo.title} - ${todo.state}`
    })
}

document.querySelector('#insert').addEventListener('change', function(e) {
    input=e.target.value
    todos.push({
        title:input,
        state:'Incomplete'
    })
    let add=document.querySelector('.add')
    let list=document.createElement('li')
    list.textContent=`${input}`
    add.appendChild(list)
})

// document.querySelector('.insert').addEventListener('click', function () {
//     let add=document.querySelector('.add')
//     let list=document.createElement('li')
//     list.textContent=`${input}`
//     add.appendChild(list)
//     // add.innerHTML=input.value
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
            let list=document.createElement('li')
            list.textContent=`${todo.title} - ${todo.state}`
            insert.appendChild(list)
            // insert.innerHTML=`${todo.title} - ${todo.state}`
        })
    }
    
    else {
        display()
    }
})

document.querySelector('.display').addEventListener('click', function () {
    insert.innerHTML=''
    display()
})

let search={
    value:''
}

let result=document.querySelector('.result')

document.querySelector('#search').addEventListener('input', function (e) {
    search.value=e.target.value
    search=todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(search.value.toLowerCase())
    })
    console.log(search.value)
    console.log(search)
    result.innerHTML=''
    search.forEach(function (todo) {
        let p=document.createElement('p')
        p.textContent=`${todo.title} - ${todo.state}`
        result.appendChild(p)
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
    document.querySelectorAll('.add').forEach(function (todo) {
        // todo.remove()
        todo.style.display='none'
    })
    document.querySelectorAll('.print').forEach(function (todo) {
        todo.style.display='none'
        // todo.remove()
    })
})