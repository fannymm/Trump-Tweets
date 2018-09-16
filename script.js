// Write your Javascript excercises here:


// Replaces the HTML within the object with id of "demo" with something of our choice.

/*document.getElementById("demo").innerHTML = "Fannys övningssida"*

/*const showAlert = ()=> {
alert ("näje")
}*/

//document.querySelector(".FannysKnapp").onclick = showAlert

//document.querySelector(".myButton")

/*const hideText = ()=> {
  document.querySelector(".text").classList.toggle("hideDIV");
}

document.querySelector (".myButton").onclick = hideText*/
/*const name = "Fanny"

document.getElementById("demo").innerHTML = name*/

/*const newsTitle1 = "Hotet mot handbollens framtid i Stockholm"
const newsTitle2 = "jo, placebo funkar – även när man vet att det är fejk"
const newsTitle3 = "Vilken version av dig umgås dina vänner med i kväll?"

const upp1 = newsTitle1.toUpperCase();
const upp2 = newsTitle2.toUpperCase();
const upp3 = newsTitle3.toUpperCase();

document.getElementById("demo").innerHTML = upp1 + "<br>" + upp2 + "<br>" + upp3*/


/*const fruits = ["apple", "orange", "lemon", "kiwi"]
document.getElementById("demo").innerHTML = (fruits[2])

fruits.forEach((fruitName, index) => {
  console.log(fruitName, index)
})*/



/*const articlesDiv = document.querySelector("#demo")

let newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

newsTitles.forEach((title) => {
articlesDiv.innerHTML += `<h2>${title}</h2>`
})*/

/*const fruits = ["apple", "orange", "pear"]
fruits.push("kiwi")

document.getElementById("demo").innerHTML = (fruits)*/


/*const newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]
newsTitles.push("testrubrik", "kiwi")

const upp1 = newsTitle1.toUpperCase();

document.getElementById("demo").innerHTML = (upp1)*/


/*const fruit = {
  name: "Lemon",
  isSour: true,
  rating: 5
}

document.getElementById("demo").innerHTML = fruit.name + fruit.rating
*/


/*const article = {
  title: "Årets bästa lista",
  description: "Nyhetsartikel",
  language: "Swedish"
}

document.getElementById("demo").innerHTML = article.title + "<br>" + article.description + "<br>" + article.language*/

// Our variables
const key = "af79e730fc064c4cbd737640e6b2331e"
const url = `https://newsapi.org/v2/everything?q=+trump+tweet+twitter&language=en&apiKey=${key}`
var i = 0; //deklarerar variabeln och sätter den till 0

// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
    i++;

    if(i==2) {
    	document.querySelector(".firstNews").innerHTML +=
			`<div class="news-lead">
            <p class="start-img" ><img src="${article.urlToImage}"/></p>
            <h2>${article.title}</h2>
            <p class="news-description" >${article.description}</p>
            <a class=button href=${article.url} target="_blank" rel="noopener">Read full story </a>
            </div>`

    }

    else if(i==3) {
      document.querySelector(".firstNews").innerHTML +=
      `<div class="news-lead">
            <p class="start-img" ><img src="${article.urlToImage}"/></p>
            <h2>${article.title}</h2>
            <p class="news-description" >${article.description}</p>
            <a class=button href=${article.url} target="_blank" rel="noopener">Read full story </a>
            </div>`

    }


    else {

		//Here we create and add html elements to our html file
			document.querySelector(".allNews").innerHTML +=
			`<div class="news">
            <p class="news-img" ><img src="${article.urlToImage}"/></p>
            <h2>${article.title}</h2>
            <p class="news-description" >${article.description}</p>
            <a class=button href=${article.url} target="_blank" rel="noopener">Read full story </a>
            </div>`
        }
    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
