const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const container = document.querySelector(".details");

const url = "https://rickandmortyapi.com/api/character/" + id;

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const moreDetails = await response.json();

    setTimeout(function () {
      container.innerHTML = "";

      html(moreDetails);
      console.log(moreDetails);
    }, 700);
  } catch (error) {
    console.log("An error occured");
    container.innerHTML = "An error occured";
  }
}

fetchCharacter();

function html(moreDetails) {
  document.title = `${moreDetails.name}`;
  container.innerHTML = `<h1> ${moreDetails.name}</h1>
                        <div class="moreDetails-image" style="background-image: url('${moreDetails.image}')"> </div>
                        <div class=gender> Gender: ${moreDetails.gender}</div>
                        <div class=status> Status: ${moreDetails.status}</div>
                        <div class=species> Specie: ${moreDetails.species}</div>
                        <div class=location> Location: ${moreDetails.location.name}</div>
                        <div class=creation-date> Created: ${moreDetails.created}</div>`;
}
