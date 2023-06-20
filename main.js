// Home Work-1

// const btn = document.querySelector('.btn')
// const nameElements = document.querySelectorAll('.name')
// const ageElements = document.querySelectorAll('.age')
// const nationalityElements = document.querySelectorAll('.nationality')

// btn.onclick = () => {
//     const request = new XMLHttpRequest()  
//     request.open("GET", "people.json")  
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

    
//     request.onload = () => { 
//         const data = JSON.parse(request.response)
//         nameElements[0].innerHTML = data[0].name
//         ageElements[0].innerHTML = data[0].age
//         nationalityElements[0].innerHTML = data[0].nationality
        
//         nameElements[1].innerHTML = data[1].name
//         ageElements[1].innerHTML = data[1].age
//         nationalityElements[1].innerHTML = data[1].nationality
        
//         nameElements[2].innerHTML = data[2].name
//         ageElements[2].innerHTML = data[2].age
//         nationalityElements[2].innerHTML = data[2].nationality
//     }
// }


// Home Work-2
const btn = document.querySelector('.btn')
btn.onclick = () => {
    const request = new XMLHttpRequest() 
    request.open("GET", "homework.json")  
    request.setRequestHeader("Content-type", "application/json") 
    request.send() 

    request.onload = () => {
        const data = JSON.parse(request.response)
        console.log(data)
    }
}

