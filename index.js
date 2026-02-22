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

const titleInterviewBtn = document.getElementById("interview-main-btn");
titleInterviewBtn.addEventListener("click", function () {
  const jobsAvailable = document.getElementById("jobs-available");
  // console.log(jobsAvailable);
  jobsAvailable.classList.remove("hidden");
  const allJobs = document.getElementById("all-jobs");
  allJobs.classList.add("hidden");
});
// show Rejected section
const titleRejectedBtn = document.getElementById("rejected-main-btn");
titleRejectedBtn.addEventListener("click", function () {
  const jobsAvailable = document.getElementById("jobs-available");
  // console.log(jobsAvailable);
  jobsAvailable.classList.remove("hidden");
  const allJobs = document.getElementById("all-jobs");
  allJobs.classList.add("hidden");
});
