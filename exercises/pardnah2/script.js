var joshObject= {
    firstName: "Josh",
    lastName: "Havey",
    favoriteMovies: ["Whiplash", "Harry Potter", "The Godfather"],
    fullOfHolidayCheer: "a little bit",
    homeTown: "Madison, WV",
    buildBioHTML: function(){
        hometownString = `<p>${joshObject.homeTown}</p>`
        cheerString = `<p>${joshObject.firstName} only has ${joshObject.fullOfHolidayCheer} of holiday cheer. </p>`
        headingString = `<h1>${this.firstName} ${this.lastName}</h1`
        for(var i = 0; i < this.favoriteMovies.length; i++){
            listString = `<li>${joshObject.favoriteMovies[i]}</li>`    
          }
          return headingString
        }
    }

    joshObject.buildBioHTML()
    

    function printToDOM(htmlString, idOfElement){
        var element = document.querySelector(`#${idOfElement}`);
        element.innerHTML = htmlString;
    }
    printToDOM(headingString, "heading-element");


   