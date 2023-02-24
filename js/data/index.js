// Make a call to your API URL and loop through the results and create HTML for each result.
const urlCall = "https://rickandmortyapi.com/api/character";

const container = document.querySelector(".result");

async function getCharacter() {
  try {
    const response = await fetch(urlCall);
    const results = await response.json();
    const characters = results.results;
    setTimeout(function () {
      container.innerHTML = "";

      for (let i = 0; i < characters.length; i++) {
        console.log(
          characters[i].id +
            "." +
            " " +
            characters[i].name +
            " " +
            characters[i].gender
        );

        container.innerHTML += `<a href="details.html?id=${characters[i].id}"
    <h4> ${characters[i].id} . ${characters[i].name}  ${characters[i].gender} <h4/> 
    </a`;
      }
    }, 700);
  } catch (error) {
    console.log("An error occured");
    container.innerHTML = "An error occured";
  }
}

document.title = "Rick and Morty Characters";
getCharacter();
