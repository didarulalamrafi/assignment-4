let interview_job_count_list = [];
let rejected_job_count_list = [];
let current_job_count_list = "all";

let all_job_count = document.getElementById("all_job_count");
let interview_job_count = document.getElementById("interview_job_count");
let rejected_job_count = document.getElementById("rejected_job_count");
let available_job_count = document.getElementById("available_job_count");

let interviewJobCount = document.getElementById("interviewJobCount");
let rejectedJobCount = document.getElementById("rejectedJobCount");
let countElement = document.getElementById("countElement");

let filtered_job_section = document.getElementById("filtered_job_section");
let job_cards_section = document.getElementById("job_cards_section");

let all_toggle_btn = document.getElementById("total-main-btn");
let interview_toggle_btn = document.getElementById("interview-main-btn");
let rejected_toggle_btn = document.getElementById("rejected-main-btn");

let mainContainer = document.querySelector("main");
let no_job_section = document.getElementById("empty_state");

// ===========================
// Count Calculation
// ===========================
function calculateCount() {
  all_job_count.innerText = job_cards_section.children.length;
  available_job_count.innerText = job_cards_section.children.length;
  interview_job_count.innerText = interview_job_count_list.length;
  rejected_job_count.innerText = rejected_job_count_list.length;
  interviewJobCount.innerText = interview_job_count_list.length;
  rejectedJobCount.innerText = rejected_job_count_list.length;

  // Show/hide no job section
  if (job_cards_section.children.length === 0) {
    no_job_section.classList.remove("hidden");
  } else {
    no_job_section.classList.add("hidden");
  }
}
calculateCount();

// ===========================
// Toggle Style Function
// ===========================
function toggleStyle(id) {
  // Remove all active styles
  all_toggle_btn.classList.remove("btn-primary", "btn-active");
  interview_toggle_btn.classList.remove("btn-primary", "btn-active");
  rejected_toggle_btn.classList.remove("btn-primary", "btn-active");

  // Add soft styles
  all_toggle_btn.classList.add("btn-soft");
  interview_toggle_btn.classList.add("btn-soft");
  rejected_toggle_btn.classList.add("btn-soft");

  // Add active style to selected button
  const selected_toggle_btn = document.getElementById(id);
  selected_toggle_btn.classList.remove("btn-soft");
  selected_toggle_btn.classList.add("btn-primary", "btn-active");

  current_job_count_list = id;

  // Handle section visibility
  if (id === "interview-main-btn") {
    job_cards_section.classList.add("hidden");
    filtered_job_section.classList.remove("hidden");
    rejectedJobCount.classList.add("hidden");

    if (interview_job_count_list.length > 0) {
      no_job_section.classList.add("hidden");
      interviewJobCount.classList.remove("hidden");
      countElement.classList.remove("hidden");
    } else {
      no_job_section.classList.remove("hidden");
      interviewJobCount.classList.add("hidden");
      countElement.classList.add("hidden");
    }
    renderInterviewJob();
  } else if (id === "total-main-btn") {
    filtered_job_section.classList.add("hidden");
    no_job_section.classList.add("hidden");
    interviewJobCount.classList.add("hidden");
    rejectedJobCount.classList.add("hidden");
    countElement.classList.add("hidden");
    job_cards_section.classList.remove("hidden");
  } else if (id === "rejected-main-btn") {
    job_cards_section.classList.add("hidden");
    filtered_job_section.classList.remove("hidden");
    interviewJobCount.classList.add("hidden");

    if (rejected_job_count_list.length > 0) {
      no_job_section.classList.add("hidden");
      rejectedJobCount.classList.remove("hidden");
      countElement.classList.remove("hidden");
    } else {
      no_job_section.classList.remove("hidden");
      rejectedJobCount.classList.add("hidden");
      countElement.classList.add("hidden");
    }
    renderRejectedJob();
  }
}

// ===========================
// Main Click Handler (for buttons inside job cards)
// ===========================
mainContainer.addEventListener("click", function (event) {
  const target = event.target;

  // Handle Interview Button Click
  if (target.classList.contains("interview_btn")) {
    const parentNode = target.closest(".job_card");
    if (!parentNode) return;

    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;

    // Update status button
    const statusBtn = parentNode.querySelector(".status_btn");
    if (statusBtn) {
      statusBtn.innerText = "INTERVIEW";
      statusBtn.classList.remove("btn-soft", "btn-error");
      statusBtn.classList.add("btn-success");
    }

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn: "INTERVIEW",
      job_description,
    };

    // Check if already in interview list
    const job_exist = interview_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      interview_job_count_list.push(jobs);
    }

    // Remove from rejected list if present
    rejected_job_count_list = rejected_job_count_list.filter(
      (item) => item.job_title !== jobs.job_title,
    );

    // Re-render if in rejected tab
    if (current_job_count_list === "rejected-main-btn") {
      renderRejectedJob();
    }

    calculateCount();
  }

  // Handle Rejected Button Click
  else if (target.classList.contains("rejected_btn")) {
    const parentNode = target.closest(".job_card");
    if (!parentNode) return;

    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;

    // Update status button
    const statusBtn = parentNode.querySelector(".status_btn");
    if (statusBtn) {
      statusBtn.innerText = "REJECTED";
      statusBtn.classList.remove("btn-soft", "btn-success");
      statusBtn.classList.add("btn-error");
    }

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn: "REJECTED",
      job_description,
    };

    // Check if already in rejected list
    const job_exist = rejected_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      rejected_job_count_list.push(jobs);
    }

    // Remove from interview list if present
    interview_job_count_list = interview_job_count_list.filter(
      (item) => item.job_title !== jobs.job_title,
    );

    // Re-render if in interview tab
    if (current_job_count_list === "interview-main-btn") {
      renderInterviewJob();
    }

    calculateCount();
  }

  // Handle Delete Button Click (for cards in filtered section)
  else if (target.classList.contains("delete_btn")) {
    const job_card = target.closest(".job_card");
    if (!job_card) return;

    const job_title = job_card.querySelector(".job_title").innerText;

    // Remove from lists
    interview_job_count_list = interview_job_count_list.filter(
      (item) => item.job_title !== job_title,
    );
    rejected_job_count_list = rejected_job_count_list.filter(
      (item) => item.job_title !== job_title,
    );

    // Remove the card
    job_card.remove();
    calculateCount();

    // Re-render current tab
    if (current_job_count_list === "interview-main-btn") {
      renderInterviewJob();
    } else if (current_job_count_list === "rejected-main-btn") {
      renderRejectedJob();
    }
  }
});

// ===========================
// Render Interview Jobs
// ===========================
function renderInterviewJob() {
  filtered_job_section.innerHTML = "";

  if (interview_job_count_list.length === 0) {
    filtered_job_section.innerHTML = `
      <div class="bg-white rounded-lg p-10 text-center">
        <p class="text-2xl font-semibold text-gray-500">No interviews scheduled</p>
        <p class="text-gray-400 mt-2">Click "INTERVIEW" on a job to add it here</p>
      </div>
    `;
    return;
  }

  for (const interview_job_item of interview_job_count_list) {
    const div = document.createElement("div");
    div.className = "job_card bg-white rounded-lg p-3 sm:p-6 my-5";
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="job_title text-lg font-semibold text-[#002C5C]">${interview_job_item.job_title}</h2>
          <p class="job_position text-gray-400">${interview_job_item.job_position}</p>
        </div>
        <i class="fa-regular fa-trash-can delete_btn text-error text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>

      <p class="job_information py-5">${interview_job_item.job_information}</p>
      <div>
        <button class="status_btn btn btn-success btn-soft">${interview_job_item.status_btn}</button>
      </div>

      <p class="job_description pb-5 pt-2">${interview_job_item.job_description}</p>
      <div class="flex gap-2">
        <button class="interview_btn btn btn-success btn-soft">INTERVIEW</button>
        <button class="rejected_btn btn btn-error btn-soft">REJECTED</button>
      </div>
    `;
    filtered_job_section.appendChild(div);
  }
}

// ===========================
// Render Rejected Jobs
// ===========================
function renderRejectedJob() {
  filtered_job_section.innerHTML = "";

  if (rejected_job_count_list.length === 0) {
    filtered_job_section.innerHTML = `
      <div class="bg-white rounded-lg p-10 text-center">
        <p class="text-2xl font-semibold text-gray-500">No rejected applications</p>
        <p class="text-gray-400 mt-2">Click "REJECTED" on a job to add it here</p>
      </div>
    `;
    return;
  }

  for (const rejected_job_item of rejected_job_count_list) {
    const div = document.createElement("div");
    div.className = "job_card bg-white rounded-lg p-3 sm:p-6 my-5";
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="job_title text-lg font-semibold text-[#002C5C]">${rejected_job_item.job_title}</h2>
          <p class="job_position text-gray-400">${rejected_job_item.job_position}</p>
        </div>
        <i class="fa-regular fa-trash-can delete_btn text-error text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>

      <p class="job_information py-5">${rejected_job_item.job_information}</p>
      <div>
        <button class="status_btn btn btn-error btn-soft">${rejected_job_item.status_btn}</button>
      </div>

      <p class="job_description pb-5 pt-2">${rejected_job_item.job_description}</p>
      <div class="flex gap-2">
        <button class="interview_btn btn btn-success btn-soft">INTERVIEW</button>
        <button class="rejected_btn btn btn-error btn-soft">REJECTED</button>
      </div>
    `;
    filtered_job_section.appendChild(div);
  }
}

// ===========================
// Delete from Main Job Cards
// ===========================
job_cards_section.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete_btn")) {
    const job_card = event.target.closest(".job_card");
    if (!job_card) return;

    const job_title = job_card.querySelector(".job_title").innerText;

    // Remove from lists
    interview_job_count_list = interview_job_count_list.filter(
      (item) => item.job_title !== job_title,
    );
    rejected_job_count_list = rejected_job_count_list.filter(
      (item) => item.job_title !== job_title,
    );

    // Remove the card
    job_card.remove();
    calculateCount();
  }
});

// ===========================
// Initial Setup
// ===========================
// Hide filter section and counters initially
filtered_job_section.classList.add("hidden");
interviewJobCount.classList.add("hidden");
rejectedJobCount.classList.add("hidden");
countElement.classList.add("hidden");
no_job_section.classList.add("hidden");
