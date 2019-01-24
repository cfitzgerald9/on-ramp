function heartJava(){
    console.log("I love javascript!")
}
heartJava();

function dreamVacay(nameVacay, placeVacay){
    console.log (`${nameVacay} would love to visit ${placeVacay}.`)
}

dreamVacay("Bernie", "Washington DC")
dreamVacay("Donald", "Russia")
dreamVacay("Connor", "Vancouver")

function sammichOrder(breadType, sammichName, isToasted){
    if(isToasted=== true){
         console.log(`You ordered a toasted ${sammichName} on ${breadType}`)
       }
    else if(isToasted=== false){
        console.log(`You ordered an untoasted ${sammichName} on ${breadType}`)
    }
}

sammichOrder("Wheat bread", "Turkey", true)
sammichOrder("Honey oat bread", "Meatball", false)
sammichOrder("Italian herbs bread", "Pizza", true)

var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }
  
  function printHobbies(){
    for(var i = 0; i < dwayneObject.hobbies.length; i++){
        console.log(`${dwayneObject.hobbies[i]}`)
    }
  }
  printHobbies();

  var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

function printToDOM(htmlString, idOfElement){
    var element = document.querySelector(`#${idOfElement}`);
    element.innerHTML = htmlString;
}

var foodHTMLString = "";
for(var i = 0; i < sandwichToppings.length; i++){
    foodHTMLString = foodHTMLString + `<li>${sandwichToppings[i]}</li>`
}
printToDOM(foodHTMLString,"sandwich-container")


var partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  

