let all = document.querySelector(".all")
const person = [{
        image: `<img src="images/personOne.jpg">`,
        name: "Anna Johnson",
        work: "WEB DESIGNER",
        disc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        image: `<img src="images/personTwo.jpg">`,
        name: "Peter Jones",
        work: "INTERN",
        disc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        image: `<img src="images/personTree.jpg">`,
        name: "Bill Anderson",
        work: "THE BOSS",
        disc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        image: `<img src="images/personFour.jpg">`,
        name: "Susan Smith",
        work: "WEB DEVELOPER",
        disc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    }
]

let imagesEl = document.getElementById("images-el"),
    nameEl = document.getElementById("name-el"),
    workEl = document.getElementById("work-el"),
    discEl = document.getElementById("disc"),
    arrowOne = document.getElementById("arrow-one"),
    arrowTwo = document.getElementById("arrow-two"),
    butEl = document.getElementById("but-el"),
    addEL = document.getElementById("add-el"),
    remEL = document.getElementById("rem-el"),
    i = 0

imagesEl.innerHTML = person[i].image
nameEl.innerHTML = person[i].name
workEl.innerHTML = person[i].work
discEl.innerHTML = person[i].disc


arrowTwo.addEventListener("click", function() {
    if (i < person.length - 1) {
        i += 1
    } else {
        i = 0
    }
    imagesEl.innerHTML = person[i].image
    nameEl.innerHTML = person[i].name
    workEl.innerHTML = person[i].work
    discEl.innerHTML = person[i].disc
})

arrowOne.addEventListener("click", function() {
    if (i === 0) {
        i = person.length - 1
    } else {
        i -= 1
    }
    imagesEl.innerHTML = person[i].image
    nameEl.innerHTML = person[i].name
    workEl.innerHTML = person[i].work
    discEl.innerHTML = person[i].disc
})

butEl.addEventListener("click", function() {
    let rand = Math.floor(Math.random() * person.length)
    imagesEl.innerHTML = person[rand].image
    nameEl.innerHTML = person[rand].name
    workEl.innerHTML = person[rand].work
    discEl.innerHTML = person[rand].disc
})

addEL.addEventListener("click", function() {
    let my_object = {}
    my_object.name = prompt("please enter your name : ")
    my_object.work = prompt("please enter your work : ")
    my_object.disc = prompt("please enter a discription about you : ")
    let imge = prompt("please enter a image url here : ")
    let imgeFin = `<img src="${imge}">`
    my_object.image = imgeFin
    person.push(my_object)

})


remEL.addEventListener("click", function() {
    person.pop()
})