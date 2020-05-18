function SearchPhotos() {
  let clientId = "mecKBIOs3ERI8h7BiptR49OJ4L8zpg1l2wNlbRktR8k";
  let query = document.getElementById("search").value;
  let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;

  //Fetch Photos

  fetch(url)
    .then(function(data) {
      return data.json();
    })

    .then(function(data) {
      console.log(data);

      data.results.forEach(photo => {
        let result = `
      <img src="${photo.urls.regular}">
      <a href="${photo.links.download}">
      `;
        $("#result").append(result);
      });
    });

}
