const welcome = document.querySelector(".welcome");
const cgpaGpa = document.querySelector(".gpa_cgpa");
const moreInfo = document.querySelector(".moreinfo");
const showNew = document.getElementById("showNew");
const moreContainer = document.querySelector(".more_container");
const closeInfo = document.querySelector(".close_info");
const closeSection = document.querySelector(".close_section");
const semesterHouse = document.querySelector(".form_container");
let courseGrade, courseUnit;
let increase = 2;
const addcourse = document.querySelectorAll(".addcourse");
const courseAppend = document.querySelectorAll(".courseAppend");
let allSemester = document.querySelectorAll(".all");
let cgpaScore = document.querySelector(".cgpa_score");

let finalResult = document.querySelector("#final_result");

let scoreOne = document.querySelector(".score_one");
let scoreTwo = document.querySelector(".score_2");


// .attr('data-id')

addcourse.forEach((e) => {
    e.onclick = (e) => {
        let id = e.target.dataset.id;
        console.log(id);
        let forms = document.querySelectorAll(`form#${id} .course`)
        let length = forms.length;
        let num = ++length;
        let ele = "courseAppend_" + id;
        console.log(ele);
        let courseApp = document.querySelector('.' + ele);
        console.log(courseApp);
        courseApp.innerHTML +=
            `<div class="course">
        <input type="text" name="code${num}" placeholder="Course Code">
        <select class="select_grade_${num}" name="grade${num}" data-id="1">
        <option value="">Grade</option>
        <option value="5.0">A</option>
        <option value="4.0">B</option>
        <option value="3.0">C</option>
        <option value="2.0">D</option>
        <option value="0.0">F</option>
        </select>
        <input type="number" name="unit${num}" placeholder="Course Unit" min="0" class="course_unit_${increase}">
        </div>`
    }

});

allSemester.forEach(e => {
    e.addEventListener('submit', function (e) {
        e.preventDefault();
        let defaultPoint = 5;
        // console.log(e);
        let form = new FormData(this);
        let id = e.target.id;
        console.log(form);
        let entries = form.entries();
        let formInput = {};
        for (let data of entries) formInput[data[0]] = data[1]
        // console.log(formInput);
        let refine = Object.entries(formInput)
        let result = [];
        for (let i = 1; i < refine.length; i += 3) {
            let next = i + 1;
            let userPoint = refine[i][1];
            let userUnit = refine[next][1];

            let numerator = userPoint * userUnit;
            let denominator = defaultPoint * userUnit;
            result.push((numerator / denominator) * 5)
            // console.log(refine[i], refine[next]);
        }
        let output = 0;
        for (let score of result) {
            output += score;
        }
        output /= result.length;
        let resultArea = document.querySelector(`#${id} .gpa_result span`);
        resultArea.innerHTML = output;
    })
});

console.log(allSemester.length);

finalResult.addEventListener("click", () => {
    let a = parseFloat(scoreOne.innerHTML);
    console.log(a)
    let b = parseFloat(scoreTwo.innerHTML);
    console.log(b);
    cgpaScore.innerHTML = (a + b) / 2;
})

// show abd hide more info
moreInfo.addEventListener("click", () => {
    moreContainer.style.display = "block";
});

closeInfo.addEventListener("click", () => {
    moreContainer.style.display = "none";
})

//  show and hid both sections welcome and cgpa/gpa
showNew.addEventListener("click", () => {
    welcome.style.display = "none";
    cgpaGpa.style.display = "flex";
});
closeSection.addEventListener("click", () => {
    welcome.style.display = "flex";
    cgpaGpa.style.display = "none";
})


