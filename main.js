// Botão de Pesquisar

var searchButton = document.querySelector('[data-action="searchButton"]');
var inputSearch = document.querySelector('[data-id="inputSearch"]');
searchButton.addEventListener("click", expandSearchButton)
var maxWidth = window.matchMedia("(max-width: 600px)");
expandSearch(maxWidth);
maxWidth.addListener(expandSearch);
hideSearchButton(maxWidth);
maxWidth.addListener(hideSearchButton);

function hideSearchButton (maxWidth){
    if (window.matchMedia("(max-width: 600px)").matches) {
      searchButton.style.display = "block";
    }
    else{
      searchButton.style.display = "none";
    }  
}


function expandSearch(maxWidth){
  if (window.matchMedia("(min-width: 600px)").matches) {
    inputSearch.style.display = "block";
  }
  else{
    inputSearch.style.display = "none";
  }
}

function expandSearchButton() {
    if (inputSearch.style.display === "none") {
      inputSearch.style.display = "block";
    } else {
      inputSearch.style.display = "none";
    }
  }

// Botão de menu
var widheiMobile = document.querySelector('[data-id="website"]');
var menuButton = document.querySelector('[data-id="menuButton"]');
var news = document.querySelector('[data-id="newsButton"]');
menuButton.addEventListener("click", navMenuButton);
var maxWidth = window.matchMedia("(max-width: 600px)");
habilitateMenu(maxWidth);
maxWidth.addListener(habilitateMenu);

function habilitateMenu(maxWidth){
  if (window.matchMedia("(min-width: 600px)").matches) {
    news.style.display = "block";
  }
  else{
    news.style.display = "none";
  }
}

function navMenuButton() {
    if (news.style.display === "none") {
      news.style.display = "block";
    } else {
      news.style.display = "none";
    }
  }


// API

// contentFirst-img
// = document.querySelector('[data-id=""]');


var imgFirst = document.querySelector('[data-id="contentFirst-img"]');
var titleFirst = document.querySelector('[data-id="contentFirst-title"]'); 
var dateFirst = document.querySelector('[data-id="contentFirst-date"]');
var textFirst = document.querySelector('[data-id="contentFirst-text"]');
var authorFirst = document.querySelector('[data-id="contentFirst-author"]');
var urlFirst = document.querySelector('[data-id="contentFirst-url"]'); 

var imgSecond = document.querySelector('[data-id="contentSecond-img"]');
var titleSecond = document.querySelector('[data-id="contentSecond-title"]'); 
var dateSecond = document.querySelector('[data-id="contentSecond-date"]');
var textSecond = document.querySelector('[data-id="contentSecond-text"]');
var authorSecond = document.querySelector('[data-id="contentSecond-author"]');
var urlSecond = document.querySelector('[data-id="contentSecond-url"]');

var imgThird = document.querySelector('[data-id="contentThird-img"]');
var titleThird = document.querySelector('[data-id="contentThird-title"]'); 
var dateThird= document.querySelector('[data-id="contentThird-date"]');
var textThird = document.querySelector('[data-id="contentThird-text"]');
var authorThird = document.querySelector('[data-id="contentThird-author"]');
var urlThird = document.querySelector('[data-id="contentThird-url"]');


var imgFourth = document.querySelector('[data-id="contentFourth-img"]');
var titleFourth = document.querySelector('[data-id="contentFourth-title"]'); 
var dateFourth= document.querySelector('[data-id="contentFourth-date"]');
var textFourth = document.querySelector('[data-id="contentFourth-text"]');
var authorFourth = document.querySelector('[data-id="contentFourth-author"]');
var urlFourth = document.querySelector('[data-id="contentFourth-url"]');

var imgFifth = document.querySelector('[data-id="contentFifth-img"]');
var titleFifth = document.querySelector('[data-id="contentFifth-title"]'); 
var dateFifth= document.querySelector('[data-id="contentFifth-date"]');
var textFifth = document.querySelector('[data-id="contentFifth-text"]');
var authorFifth = document.querySelector('[data-id="contentFifth-author"]');
var urlFifth = document.querySelector('[data-id="contentFifth-url"]');

var imgSixth = document.querySelector('[data-id="contentSixth-img"]');
var titleSixth = document.querySelector('[data-id="contentSixth-title"]'); 
var dateSixth= document.querySelector('[data-id="contentSixth-date"]');
var textSixth = document.querySelector('[data-id="contentSixth-text"]');
var authorSixth = document.querySelector('[data-id="contentSixth-author"]');
var urlSixth = document.querySelector('[data-id="contentSixth-url"]');

var imgSeventh = document.querySelector('[data-id="contentSeventh-img"]');
var titleSeventh = document.querySelector('[data-id="contentSeventh-title"]'); 
var dateSeventh= document.querySelector('[data-id="contentSeventh-date"]');
var textSeventh = document.querySelector('[data-id="contentSeventh-text"]');
var authorSeventh = document.querySelector('[data-id="contentSeventh-author"]');
var urlSeventh = document.querySelector('[data-id="contentSeventh-url"]');

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=0772dfafa7194db790debf6eb5866e84';
var req = new Request(url);

    fetch(req).then(response => {
      return response.json();
    }).then(data => {

      // data.articles[1].title)
      console.log(data);
      titleFirst.innerHTML = data.articles[0].title;
      dateFirst.innerHTML= data.articles[0].publishedAt;
      textFirst.innerHTML = data.articles[0].description;
      authorFirst.innerHTML = data.articles[0].source.name;
      if(data.articles[0].urlToImage == null){
        imgFirst.src="res/image.jpg";
      }
      else{
        imgFirst.src = data.articles[0].urlToImage;
      }
      urlFirst.href = data.articles[0].url;




      titleSecond.innerHTML = data.articles[1].title;
      dateSecond.innerHTML= data.articles[1].publishedAt;
      textSecond.innerHTML = data.articles[1].description;
      authorSecond.innerHTML = data.articles[1].source.name;
      if(data.articles[1].urlToImage == null){
        imgSecond.src="res/image.jpg";
      }
      else{
        imgSecond.src = data.articles[1].urlToImage;
      }
      urlSecond.href = data.articles[1].url;




      titleThird.innerHTML = data.articles[2].title;
      dateThird.innerHTML= data.articles[2].publishedAt;
      textThird.innerHTML = data.articles[2].description;
      authorThird.innerHTML = data.articles[2].source.name;
      if(data.articles[2].urlToImage == null){
        imgThird.src="res/image.jpg";
      }
      else{
        imgThird.src = data.articles[2].urlToImage;
      }
      urlThird.href = data.articles[2].url;



      titleFourth.innerHTML = data.articles[3].title;
      dateFourth.innerHTML= data.articles[3].publishedAt;
      textFourth.innerHTML = data.articles[3].description;
      authorFourth.innerHTML = data.articles[3].source.name;
      if(data.articles[3].urlToImage == null){
        imgFourth.src="res/image.jpg";
      }
      else{
        imgFourth.src = data.articles[3].urlToImage;
      }
      urlFourth.href = data.articles[3].url;







      titleFifth.innerHTML = data.articles[4].title;
      dateFifth.innerHTML= data.articles[4].publishedAt;
      textFifth.innerHTML = data.articles[4].description;
      authorFifth.innerHTML = data.articles[4].source.name;
      if(data.articles[4].urlToImage == null){
        imgFifth.src="res/image.jpg";
      }
      else{
        imgFifth.src = data.articles[4].urlToImage;
      }
      
      urlFifth.href = data.articles[4].url;









      titleSixth.innerHTML = data.articles[5].title;
      dateSixth.innerHTML= data.articles[5].publishedAt;
      textSixth.innerHTML = data.articles[5].description;
      authorSixth.innerHTML = data.articles[5].source.name;
      if(data.articles[5].urlToImage == null){
        imgSixth.src="res/image.jpg";
      }
      else{
        imgSixth.src = data.articles[5].urlToImage;
      }
      
      urlSixth.href = data.articles[5].url;








      titleSeventh.innerHTML = data.articles[6].title;
      dateSeventh.innerHTML= data.articles[6].publishedAt;
      textSeventh.innerHTML = data.articles[6].description;
      authorSeventh.innerHTML = data.articles[6].source.name;
      if(data.articles[6].urlToImage == null){
        imgSeventh.src="res/image.jpg";
      }
      else{
        imgSeventh.src = data.articles[6].urlToImage;
      }
      
      urlSeventh.href = data.articles[6].url;
    }).catch(err => {
      // Do something for an error here
    });