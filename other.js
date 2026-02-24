// let count = 0;
// let total = 8;
// const select = document.querySelectorAll('.interview-btn')
// select.forEach((element)=> {
//     // console.log(element);
//     element.addEventListener("click", function(){
//         if (total < 0)
//             {
//                 return alert("Invaild Interview");

//             };
//         document.getElementById('total').innerText = total;
//         document.getElementById('interview-number').innerText = count;
//         count ++;
//         total = total - 1;
//     });
// });

// const jobs = 8;

// function updown(click, job = 0, callBack = () => {}) {
//   let count = 0;
//   let total = job;

//   const select = document.querySelectorAll(click);

//   select.forEach((element) => {
//     element.addEventListener("click", function () {
//       if (total <= 0) return alert("Invaild Interview");

//       count++;
//       total = total - 1;
//       callBack({ interview: count, total });
//     });
//   });
// }

// const rejectedFun = ({ interview = 0, total = 0 }) => {
//   const interviews = document.getElementById("interview");
//   document.getElementById("total").innerText = total;

//   const jo = document.getElementById("job");

//   interviews.addEventListener("click", () => {
//     const isActive = interviews.classList.toggle("active");

//     if (isActive) {
//       jo.classList.add("block");
//       jo.classList.remove("hidden");
//     } else {
//       jo.classList.add("hidden");
//       jo.classList.remove("block");
//     }
//   });
// };

// rejectedFun({ total: jobs, interview: 0 });

// updown(".interview-btn", jobs, ({ interview, total }) => {
//   rejectedFun({ interview, total });
//   document.getElementById("total").innerText = total;
//   document.getElementById("interview-number").innerText = interview;
// });

// try me

// Base added

// const interviewBtn = document.querySelectorAll(".interview-btn");
// for (let i = 0; i < interviewBtn.length; i++) {
//   const interviewButton = interviewBtn[i];
//   interviewButton.addEventListener("click", function () {
//     const base = interviewButton;
//     base.classList.remove("hidden");
//     console.log("clcik");
//   });
// }

// // deleted
// const deletedBtn = document.querySelectorAll(".deleted");

// for (let i = 0; i < deletedBtn.length; i++) {
//   deletedBtn[i].addEventListener("click", function () {
//     const parent = this.parentElement.parentElement;
//     parent.remove();
//   });
//   // console.log(parent);
// }

// *****************************************************************************
// console.log(totalNumber, interviewNumber, rejectedNumber);
// console.log(rejectedNumber);

// show all jobs section
const totalMainBtn = document.getElementById("total-main-btn");
totalMainBtn.addEventListener("click", function () {
  const jobsAvailable = document.getElementById("jobs-available");
  // console.log(jobsAvailable);
  jobsAvailable.classList.add("hidden");
  const allJobs = document.getElementById("all-jobs");
  allJobs.classList.remove("hidden");
});

// show interview section

// const interviewBtnMain = document.getElementById("interview-main-btn");
// interviewBtnMain.addEventListener("click", function () {
//   const jobsAvailable = document.getElementById("jobs-available");
//   // console.log(jobsAvailable);
//   jobsAvailable.classList.remove("hidden");
//   const allJobs = document.getElementById("all-jobs");
//   allJobs.classList.add("hidden");
// });
// // show Rejected section
// const RejectedBtnMain = document.getElementById("rejected-main-btn");
// RejectedBtnMain.addEventListener("click", function () {
//   const jobsAvailable = document.getElementById("jobs-available");
//   // console.log(jobsAvailable);
//   jobsAvailable.classList.remove("hidden");
//   const allJobs = document.getElementById("all-jobs");
//   allJobs.classList.add("hidden");
// });

// Base added

// const interviewBtn = document.querySelectorAll(".interview-btn");
// for (let i = 0; i < interviewBtn.length; i++) {
//   const interviewButton = interviewBtn[i];
//   interviewButton.addEventListener("click", function () {
//     const base = interviewButton;
//     base.classList.remove("hidden");
//     console.log("clcik");
//   });
// }

// // deleted
// const deletedBtn = document.querySelectorAll(".deleted");

// for (let i = 0; i < deletedBtn.length; i++) {
//   deletedBtn[i].addEventListener("click", function () {
//     const parent = this.parentElement.parentElement;
//     parent.remove();
//   });
//   // console.log(parent);
// }
// toggle
// **********************************************************
// **********************************************************

// show all jobs section
// totalMainBtn = document.getElementById("total-main-btn");
// totalMainBtn.addEventListener("click", function () {
//   const jobsAvailable = document.getElementById("jobs-available");
//   // console.log(jobsAvailable);
//   jobsAvailable.classList.add("hidden");
//   const allJobs = document.getElementById("all-jobs");
//   allJobs.classList.remove("hidden");
// });

// show interview section

// const titleInterviewBtn = document.getElementById("interview-main-btn");
// titleInterviewBtn.addEventListener("click", function () {
//   const jobsAvailable = document.getElementById("jobs-available");
//   // console.log(jobsAvailable);
//   jobsAvailable.classList.remove("hidden");
//   const allJobs = document.getElementById("all-jobs");
//   allJobs.classList.add("hidden");
// });
// // show Rejected section
// const titleRejectedBtn = document.getElementById("rejected-main-btn");
// titleRejectedBtn.addEventListener("click", function () {
//   const jobsAvailable = document.getElementById("jobs-available");
//   // console.log(jobsAvailable);
//   jobsAvailable.classList.remove("hidden");
//   const allJobs = document.getElementById("all-jobs");
//   allJobs.classList.add("hidden");
// });

// const allMainBtn = document.getElementById("all-main-btn");
// console.log(allMainBtn);
// const interviewMainBtn = document.getElementById("interview-main-btn");
// const rejectedMainBtn = document.getElementById("rejected-main-btn");

// function toggleStyle(id) {
//   allMainBtn.classList.remove("btn-primary");
//   interviewMainBtn.classList.remove("btn-primary");
//   rejectedMainBtn.classList.remove("btn-primary");
// }

// *****************************************************************************
