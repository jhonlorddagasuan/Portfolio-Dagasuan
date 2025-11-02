const studentName = "JHONLORD DAGASUAN";

const schools = [
  {
    name: "Manolo Fortich Central Elementary School",
    info: "Manolo Fortich Central Elementary School is where I started my primary education, building the foundation for my learning journey.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiK34yuQt50AXMnVvKKPo5jwx3aZtOSHJ5g&s"
  },
  {
    name: "Manolo Fortich National High School",
    info: "Manolo Fortich National High School is where I completed my secondary education and developed my academic skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvekkHy6rv6f7fNFkn1tRXYsu7tE2wtAypE508i-jvl4qovAGXOuieJwMMbFqIG-oAPI&usqp=CAU"
  },
  {
    name: "Northern Bukidnon State College",
    info: "Northern Bukidnon State College is where I pursued higher education in Information Technology, expanding my knowledge and skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVl70yV-sHT0Kf0gZFto8wEb0vxkw3pebnRQ&s"
  }
];

const studentList = document.getElementById("student-list");
const nameHeader = document.querySelector(".name");

nameHeader.textContent = studentName;

function displaySchools(list) {
  studentList.innerHTML = "";

  list.forEach(school => {
    const div = document.createElement("div");
    div.classList.add("student-card");

    const nameEl = document.createElement("h3");
    nameEl.textContent = school.name;
    div.appendChild(nameEl);

    const infoBox = document.createElement("p");
    infoBox.classList.add("school-info");
    infoBox.textContent = school.info;
    div.appendChild(infoBox);

    const imgBox = document.createElement("img");
    imgBox.src = school.image;
    imgBox.alt = school.name;
    imgBox.classList.add("school-hover-img");
    div.appendChild(imgBox);

    studentList.appendChild(div);
  });
}

displaySchools(schools);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(query)
  );
  displaySchools(filteredSchools);
});
