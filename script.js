function SearchPhotos() {
  let clientId = "mecKBIOs3ERI8h7BiptR49OJ4L8zpg1l2wNlbRktR8k";
  let query = document.getElementById("search").value;
  let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;
  var result = allLetter(query);


  //Fetch Photos

  fetch(url)
    .then(function(data) {
      return data.json();
    })

    .then(function(data) {
      console.log(data);

      data.results.forEach(photo => {
        let result = `
      <img src="${photo.urls.regular}" style='width:100%' border="5" alt="Null">
      <a href="${photo.links.download}">
      `;
        $("#result").append(result);
      });
    });

}

function allLetter(query) {
  var flag;
  for (i = 0; i < query.length; i++) {
    if (query[i] >= 0 && query[i] <= 9) {
      alert("Type a valid name");
      flag = false;
    } 
    else {
      flag = true;
    }
  }
}
