document.getElementById("search").addEventListener("input",showresult);
function showresult(){
    let value= document.querySelector("#search");
        value.style.width="366px";
        document.getElementById("resultBox").style.display="block";

}




let timer;
  async function searchmovie() {
    document.querySelector(".container").innerHTML = null;
    let moviename = document.getElementById("search").value;
    // console.log(moviename)
    let url = `https://www.omdbapi.com/?s=${moviename}&apikey=3519b0d6`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      let arrayOfMovies = data.Search;
      return arrayOfMovies;
    } catch (err) {
      console.log("err", err);
    }
  }


// ----------------------------data--------------------

  function appendMovies(data) {
    document.querySelector(".container").innerHTML = "";
    
    data.forEach(function (el) {
      if (el.Poster !== "N/A") {
        let imdb = (Math.random() * 4 + 6).toFixed(1);
        let outerdiv = document.createElement("div");
        let leftdiv = document.createElement("div");
        let rightdiv = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", el.Poster);
        rightdiv.setAttribute("id", "description");
        let title = document.createElement("h4");
        title.textContent = el.Title;
        let year = document.createElement("p");
        year.textContent = el.Year;
        let Type = document.createElement("p");
        Type.textContent = el.Type;

        outerdiv.addEventListener("click", function () {
          gotoDetails(el);
        });
        rightdiv.append(Type, year);
        leftdiv.append(image);
        rightdiv.append(title, Type, year, imdb);
        outerdiv.append(leftdiv, rightdiv);
        outerdiv.setAttribute("id", el.imdbID);
        outerdiv.className = "outerDiv";
        leftdiv.id = "leftdiv";
        rightdiv.id = "rightdiv";
        document.querySelector(".container").append(outerdiv);
      }
    });
  }

 async function gotoDetails(el) {
     let  imdbvalue= el.imdbID;
     console.log("mamamiya",imdbvalue);
     let imdbres= await fetch(`https://www.omdbapi.com/?i=${imdbvalue}&apikey=3519b0d6`)
     let imdbdata=await imdbres.json();
     
     console.log("iam joke",imdbdata)
    localStorage.setItem("movieDetails", JSON.stringify(imdbdata));
    window.location.href = "movieDetails.html";
  }

  //   function errorImage(){
  //       let errorimg= document.createElement("img");
  //       errorimg.setAttribute("src", "https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/ad42057889c385dd8f84b8330f69269b.gif");
  //       errorimg.className="errorimg";
  //       document.querySelector(".container").append(errorimg);
  //   }

  async function main() {
    try {
      let data = await searchmovie();
      if (data === undefined) {
        return false;
      }
      appendMovies(data);
    } catch (err) {
      console.log("error:", err);
    }
  }

  function debounce(func, delay) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func();
    }, delay);
  }




// code landing page below------------





async function getdata(){
  let url=`https://api.themoviedb.org/3/trending/all/day?api_key=86c6c34352cec49e5e790c414cf45ce8`;
  try{
      let res= await fetch(url);
      let data= await res.json();
      let dataarray= data.results;
      console.log(dataarray);
      appendProducts(dataarray);
  }
  catch(error){
      console.log("error",error);
  }
}
getdata();



function appendProducts(data){
  console.log("abrakadabra",data)
    document.getElementById("parent").innerHTML=null;
         data.forEach(function(el){
              
             let div=document.createElement("div");
             let image= document.createElement("img");
             image.setAttribute("src",`https://image.tmdb.org/t/p/original/${el.poster_path}`);
          //    let cont=document.createElement("div");
          //    cont.setAttribute("id","description");
          //    let title=document.createElement("h4");
          //    title.textContent=el.title;
          //    let year=document.createElement("p");
          //    year.textContent=el.release_date;
          //    let Type=document.createElement("p");
          //    Type.textContent=el.media_type;
          //    let rating=document.createElement("p");
          //    rating.textContent=el.vote_average;
          //    cont.append(Type,year,rating);
             div.append(image);
             div.className="upper";

             document.querySelector("#parent").append(div);

         })
   
}