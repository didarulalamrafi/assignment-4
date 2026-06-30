let interviewList = [];
let rejectedList = [];

// Get count elements
let totalNumber = document.getElementById("all_job_count");
let interviewNumber = document.getElementById("interview_job_count");
let rejectedNumber = document.getElementById("rejected_job_count");

const allJobsSection = document.getElementById("job_cards_section");
const filterSection = document.getElementById("filter-section");
const emptyState = document.getElementById("empty_state");

// ===========================
// Count Section
// ===========================
function calculateCount() {
  totalNumber.innerText = allJobsSection.children.length;
  interviewNumber.innerText = interviewList.length;
  rejectedNumber.innerText = rejectedList.length;

  // Show/hide empty state
  if (allJobsSection.children.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}
calculateCount();

// ===========================
// Toggle Section Start
// ===========================
const allMainBtn = document.getElementById("total-main-btn");
const interviewBtnMain = document.getElementById("interview-main-btn");
const rejectedMainBtn = document.getElementById("rejected-main-btn");

function toggleStyle(id) {
  // Remove all active styles
  allMainBtn.classList.add("btn-soft");
  interviewBtnMain.classList.add("btn-soft");
  rejectedMainBtn.classList.add("btn-soft");

  allMainBtn.classList.remove("btn-primary", "btn-active");
  interviewBtnMain.classList.remove("btn-primary", "btn-active");
  rejectedMainBtn.classList.remove("btn-primary", "btn-active");

  // Add active style to clicked button
  const selected = document.getElementById(id);
  selected.classList.add("btn-primary", "btn-active");

  // Show/hide sections based on selection
  if (id === "total-main-btn") {
    allJobsSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id === "interview-main-btn") {
    allJobsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterviewList();
  } else if (id === "rejected-main-btn") {
    allJobsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejectedList();
  }
}

// ===========================
// Render Interview List
// ===========================
function renderInterviewList() {
  filterSection.innerHTML = "";

  if (interviewList.length === 0) {
    filterSection.innerHTML = `
      <div class="bg-white rounded-lg p-10 text-center">
        <p class="text-2xl font-semibold text-gray-500">No interviews scheduled</p>
        <p class="text-gray-400 mt-2">Click "INTERVIEW" on a job to add it here</p>
      </div>
    `;
    return;
  }

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "job_card bg-white rounded-lg p-3 sm:p-6";
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h4 class="text-lg font-semibold text-[#002C5C]">${interview.companyName}</h4>
          <p class="text-gray-400">${interview.jobTitle || "Position"}</p>
        </div>
        <i class="fa-regular fa-trash-can delete_from_interview text-error text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>
      <p class="job_information py-5">${interview.jobInfo || "Remote • Full-time"}</p>
      <div>
        <button class="status_btn btn btn-success btn-soft">Interview</button>
      </div>
      <p class="job_description pb-5 pt-2">${interview.jobDescription || "Interview scheduled"}</p>
      <div class="flex gap-2">
        <button class="move_to_rejected btn btn-error btn-soft">REJECTED</button>
      </div>
    `;
    filterSection.append(div);
  }

  // Add delete functionality for interview list
  document.querySelectorAll(".delete_from_interview").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const card = this.closest(".job_card");
      const companyName = card.querySelector("h4").innerText;
      interviewList = interviewList.filter(
        (item) => item.companyName !== companyName,
      );
      calculateCount();
      renderInterviewList();
    });
  });

  // Add move to rejected functionality
  document.querySelectorAll(".move_to_rejected").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const card = this.closest(".job_card");
      const companyName = card.querySelector("h4").innerText;
      const jobData = interviewList.find(
        (item) => item.companyName === companyName,
      );

      if (jobData) {
        // Remove from interview
        interviewList = interviewList.filter(
          (item) => item.companyName !== companyName,
        );
        // Add to rejected
        const rejectedExists = rejectedList.find(
          (item) => item.companyName === companyName,
        );
        if (!rejectedExists) {
          jobData.status = "Rejected";
          rejectedList.push(jobData);
        }
        calculateCount();
        renderInterviewList();
      }
    });
  });
}

// ===========================
// Render Rejected List
// ===========================
function renderRejectedList() {
  filterSection.innerHTML = "";

  if (rejectedList.length === 0) {
    filterSection.innerHTML = `
      <div class="bg-white rounded-lg p-10 text-center">
        <p class="text-2xl font-semibold text-gray-500">No rejected applications</p>
        <p class="text-gray-400 mt-2">Click "REJECTED" on a job to add it here</p>
      </div>
    `;
    return;
  }

  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "job_card bg-white rounded-lg p-3 sm:p-6";
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h4 class="text-lg font-semibold text-[#002C5C]">${rejected.companyName}</h4>
          <p class="text-gray-400">${rejected.jobTitle || "Position"}</p>
        </div>
        <i class="fa-regular fa-trash-can delete_from_rejected text-error text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>
      <p class="job_information py-5">${rejected.jobInfo || "Remote • Full-time"}</p>
      <div>
        <button class="status_btn btn btn-error btn-soft">Rejected</button>
      </div>
      <p class="job_description pb-5 pt-2">${rejected.jobDescription || "Application rejected"}</p>
      <div class="flex gap-2">
        <button class="move_to_interview btn btn-success btn-soft">INTERVIEW</button>
      </div>
    `;
    filterSection.append(div);
  }

  // Add delete functionality for rejected list
  document.querySelectorAll(".delete_from_rejected").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const card = this.closest(".job_card");
      const companyName = card.querySelector("h4").innerText;
      rejectedList = rejectedList.filter(
        (item) => item.companyName !== companyName,
      );
      calculateCount();
      renderRejectedList();
    });
  });

  // Add move to interview functionality
  document.querySelectorAll(".move_to_interview").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const card = this.closest(".job_card");
      const companyName = card.querySelector("h4").innerText;
      const jobData = rejectedList.find(
        (item) => item.companyName === companyName,
      );

      if (jobData) {
        // Remove from rejected
        rejectedList = rejectedList.filter(
          (item) => item.companyName !== companyName,
        );
        // Add to interview
        const interviewExists = interviewList.find(
          (item) => item.companyName === companyName,
        );
        if (!interviewExists) {
          jobData.status = "Interview";
          interviewList.push(jobData);
        }
        calculateCount();
        renderRejectedList();
      }
    });
  });
}

// ===========================
// Main Event Listeners
// ===========================
allJobsSection.addEventListener("click", function (event) {
  const target = event.target;
  const parentNode = target.closest(".job_card");

  if (!parentNode) return;

  const companyName = parentNode.querySelector("h4").innerText;
  const jobTitle =
    parentNode.querySelector(".text-gray-400")?.innerText || "Position";
  const jobInfo =
    parentNode.querySelector(".job_information")?.innerText ||
    "Remote • Full-time";
  const jobDescription =
    parentNode.querySelector(".job_description")?.innerText || "";
  const statusBtn = parentNode.querySelector(".status_btn");

  // Handle Interview Button Click
  if (target.classList.contains("interview_btn")) {
    // Check if already in interview or rejected list
    const inInterview = interviewList.find(
      (item) => item.companyName === companyName,
    );
    const inRejected = rejectedList.find(
      (item) => item.companyName === companyName,
    );

    if (inInterview) {
      alert("This job is already in the Interview list!");
      return;
    }

    if (inRejected) {
      alert("This job is in the Rejected list. Remove it from Rejected first!");
      return;
    }

    // Add to interview list
    const jobData = {
      companyName: companyName,
      jobTitle: jobTitle,
      jobInfo: jobInfo,
      jobDescription: jobDescription,
      status: "Interview",
    };
    interviewList.push(jobData);

    // Update status button
    if (statusBtn) {
      statusBtn.innerText = "Interview";
      statusBtn.className = "status_btn btn btn-success btn-soft";
    }

    calculateCount();

    // If interview tab is active, re-render
    if (interviewBtnMain.classList.contains("btn-primary")) {
      renderInterviewList();
    }
  }

  // Handle Rejected Button Click
  if (target.classList.contains("rejected_btn")) {
    // Check if already in interview or rejected list
    const inInterview = interviewList.find(
      (item) => item.companyName === companyName,
    );
    const inRejected = rejectedList.find(
      (item) => item.companyName === companyName,
    );

    if (inRejected) {
      alert("This job is already in the Rejected list!");
      return;
    }

    if (inInterview) {
      alert(
        "This job is in the Interview list. Remove it from Interview first!",
      );
      return;
    }

    // Add to rejected list
    const jobData = {
      companyName: companyName,
      jobTitle: jobTitle,
      jobInfo: jobInfo,
      jobDescription: jobDescription,
      status: "Rejected",
    };
    rejectedList.push(jobData);

    // Update status button
    if (statusBtn) {
      statusBtn.innerText = "Rejected";
      statusBtn.className = "status_btn btn btn-error btn-soft";
    }

    calculateCount();

    // If rejected tab is active, re-render
    if (rejectedMainBtn.classList.contains("btn-primary")) {
      renderRejectedList();
    }
  }

  // Handle Delete Button Click
  if (target.classList.contains("delete_btn")) {
    const companyName = parentNode.querySelector("h4").innerText;

    // Remove from lists if present
    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );

    // Remove the card
    parentNode.remove();

    // Reset status button if needed
    const statusBtn = parentNode.querySelector(".status_btn");
    if (statusBtn) {
      statusBtn.innerText = "Not Applied";
      statusBtn.className = "status_btn btn btn-soft";
    }

    calculateCount();

    // Re-render active tab
    if (interviewBtnMain.classList.contains("btn-primary")) {
      renderInterviewList();
    } else if (rejectedMainBtn.classList.contains("btn-primary")) {
      renderRejectedList();
    }
  }
});

// ===========================
// Initial Setup
// ===========================
// Hide filter section initially
filterSection.classList.add("hidden");

// Add click event to filter buttons
allMainBtn.addEventListener("click", function () {
  toggleStyle("total-main-btn");
});

interviewBtnMain.addEventListener("click", function () {
  toggleStyle("interview-main-btn");
});

rejectedMainBtn.addEventListener("click", function () {
  toggleStyle("rejected-main-btn");
});
