var mattObject= {
firstname: "Matt",
lastName: "Rowe",
favoriteFood: ["tacos", "noodles"],
firstJob: "Wendy's",
dreamJob: "Rock star",
greatestFear: "heights",
homeTown: "Huntington, WV",
secretTalents: ["Speaking Korean", "Taming dogs"],
wouldSkyDive: false,
petinfo:{ 
    type: "Dog",
    name: "Nina",
}
}
var nameString =`
<h1 class = "name">${mattObject.firstname} ${mattObject.lastName}</h1>`

var stuffString =`
<p>Matt is a ${mattObject.homeTown} native.</p>
<p> His first job was at ${mattObject.firstJob}. However, he was always dreaming of being a ${mattObject.dreamJob}.</p>
<p> His secret talents are ${mattObject.secretTalents[0]} and ${mattObject.secretTalents[1]}.</p> 
<p> When asked if he would skydive, Matt said ${mattObject.wouldSkyDive}.</p>
<p> He has a ${mattObject.petinfo.type} named ${mattObject.petinfo.name}</p>
<p> Matt's favorite foods are:</p>
<ul>
<li>${mattObject.favoriteFood[0]}</li>
<li>${mattObject.favoriteFood[1]}</l1>
</ul>
`

document.querySelector("#buddysitename").innerHTML =nameString;
document.querySelector("#mattstuff").innerHTML =stuffString;
