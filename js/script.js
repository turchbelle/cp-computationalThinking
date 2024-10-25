var fetchButton = document.getElementById("fetch-button");
var responseContainer = document.getElementById("response-container");

fetchButton.addEventListener("click", function() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      return response.json();
    })
    .then(function(data) {
      responseContainer.innerHTML = "";

      for (var i = 0; i < 5; i++) {
        var post = data[i];

        var postElement = document.createElement("div");
        postElement.innerHTML = "<h3>" + post.title + "</h3><p>" + post.body + "</p>";
        postElement.style.marginBottom = "15px";

        responseContainer.appendChild(postElement);
      }
    })
    .catch(function(error) {
      responseContainer.innerText = error.message;
    });
});