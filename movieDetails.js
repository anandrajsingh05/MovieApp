let movieData= JSON.parse(localStorage.getItem("movieDetails"));
console.log("dnnnn", movieData);
function displayDetails(movieData){
    let maindiv= document.createElement("div");
    let leftdiv= document.createElement("div");
    let image= document.createElement("img");
     image.src=movieData.Poster;
    let rightdiv= document.createElement("div");
    let title=document.createElement("h2");
    title.textContent=movieData.Title;
    let year=document.createElement("h5");
    year.textContent=movieData.Released;
    let Type=document.createElement("h5");
    Type.textContent=movieData.Type;

    let actor= document.createElement("h4");
    actor.textContent=`Cast : ${movieData.Actors}`;
    let award= document.createElement("h5");
    award.textContent=`Awards: ${movieData.Awards}`;
    let boxoffice= document.createElement("h5");
    boxoffice.textContent=`Box Office : ${movieData.BoxOffice}`;
    let rating= document.createElement("h5");
    rating.textContent=movieData.Ratings[0].Value;
    let writer= document.createElement("h5");
    writer.textContent=`Writer : ${movieData.Writer}`;
    let language= document.createElement("h5");
    language.textContent=movieData.Language;






    leftdiv.append(image);
    rightdiv.append(title,actor,writer,award,boxoffice,year,language,Type,rating);
    maindiv.append(leftdiv,rightdiv)
    maindiv.className="maindiv";
    leftdiv.className="leftdiv";
    rightdiv.className="rightdiv";

    document.getElementById("container").append(maindiv);
    

}
displayDetails(movieData);