let interviewList = [];
let rejectedList = [];

let totalNumber = document.getElementById("total");
let interviewNumber = document.getElementById("interview-number");
let rejectedNumber = document.getElementById("rejected-number");

const allJobsSection = document.getElementById("all-jobs");
function calculateCount() {
  totalNumber.innerText = allJobsSection.children.length;
  interviewNumber.innerText = interviewList.length;
  rejectedNumber.innerText = rejectedList.length;
}
calculateCount();
// ***************************
// count section end
// ***************************

// **********************************
// Toggole section start
// **********************************
const allMainBtn = document.getElementById("all-main-btn");
const interviewBtnMain = document.getElementById("interview-main-btn");
const rejectedMainBtn = document.getElementById("rejected-main-btn");
function toggleStyle(id) {
  console.log("click");
  allMainBtn.classList.add("btn-soft");
  interviewBtnMain.classList.add("btn-soft");
  rejectedMainBtn.classList.add("btn-soft");

  allMainBtn.classList.remove("btn-primary");
  interviewBtnMain.classList.remove("btn-primary");
  rejectedMainBtn.classList.remove("btn-primary");
  const selected = document.getElementById(id);
  selected.classList.add("btn-primary", "btn-active");
}

// ******************************
// toggle Part close
// ******************************

// main body part start

const allJobSection = document.getElementById("all-jobs");
console.log(allJobsSection);
allJobSection.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const interviewBtn = event.target.classList.contains("interview-btn");
  if (interviewBtn) {
    console.log("Interview dibi?");
  }
});
