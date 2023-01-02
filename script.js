//api//
const getApi = async () => {
  try {
    const answer = await fetch("https://api.tvmaze.com/shows/527/episodes");
    const information = await answer.json();
    getShows(information);
    filterBySelect();
  } catch (error) {
    console.log(error);
  }
};

const getShows = (ourData) => {
  for (let data of ourData) {
    const { name, season, image, summary, number } = data;

    const section = document.querySelector("#section");

    // const select = document.querySelector("#select");

    const newOption = document.createElement("option");
    newOption.value = name;
    newOption.innerText = `S0${season}-E0${number}-${name}`;
    select.append(newOption);

    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    li.className = "class-li";
    li.id = name;

    const p = document.createElement("p");
    p.className = "class-p";
    p.textContent = `(${name} -season${season})`;

    const myImage = document.createElement("img");
    myImage.className = "cart-image";
    myImage.setAttribute("src", image.medium);
    myImage.setAttribute("alt", "picture of movie");

    const spanSummary = document.createElement("span");
    spanSummary.classList.add("span-image-none");
    spanSummary.innerHTML = summary;

    li.append(myImage, spanSummary, p);
    ul.append(li);
    section.append(ul);
  }
};

const filterBySelect = () => {
  const select = document.querySelector("#select");
  const list = document.querySelectorAll(".class-li");
  select.addEventListener("change", () => {
    for (let li of list) {
      if (li.id === select.value) {
        console.log("hi");
        li.style.display = "initial";
      } else if (select.value === "all") {
        li.style.display = "initial";
      } else {
        li.style.display = "none";
      }
    }
  });
};
getApi();

const inputSearch = document.querySelector("#search");

inputSearch.addEventListener("keyup", (e) => {
  const valueSearch = e.target.value.toLowerCase();
  const allShows = document.querySelectorAll("li");
  console.log(allShows);
  for (let allShow of allShows) {
    const valueShow = allShow.querySelector("p").textContent;
    if (valueShow.includes(valueSearch)) {
      allShow.style.display = "initial";
    } else {
      allShow.style.display = "none";
    }
  }
});
