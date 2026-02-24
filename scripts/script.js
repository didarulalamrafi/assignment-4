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

let job_interview_btn = document.getElementById("job_interview_btn");
let job_rejected_btn = document.getElementById("job_rejected_btn");

let all_toggle_btn = document.getElementById("all_toggle_btn");
let interview_toggle_btn = document.getElementById("interview_toggle_btn");
let rejected_toggle_btn = document.getElementById("rejected_toggle_btn");

let mainContainer = document.querySelector("main");
let no_job_section = document.getElementById("no_job_section");

function calculateCount() {
  all_job_count.innerText = job_cards_section.children.length;
  available_job_count.innerText = job_cards_section.children.length;
  interview_job_count.innerText = interview_job_count_list.length;
  rejected_job_count.innerText = rejected_job_count_list.length;
  interviewJobCount.innerText = interview_job_count_list.length;
  rejectedJobCount.innerText = rejected_job_count_list.length;
}
calculateCount();

function toggleStyle(id) {
  all_toggle_btn.classList.add("btn-primary", "btn-soft");
  interview_toggle_btn.classList.add("btn-primary", "btn-soft");
  rejected_toggle_btn.classList.add("btn-primary", "btn-soft");

  all_toggle_btn.classList.remove("btn-primary");
  interview_toggle_btn.classList.remove("btn-primary");
  rejected_toggle_btn.classList.remove("btn-primary");

  const selected_toggle_btn = document.getElementById(id);
  selected_toggle_btn.classList.remove("btn-primary", "btn-soft");
  selected_toggle_btn.classList.add("btn-primary");

  current_job_count_list = id;

  if (id === "interview_toggle_btn") {
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
  } else if (id === "all_toggle_btn") {
    filtered_job_section.classList.add("hidden");
    no_job_section.classList.add("hidden");
    interviewJobCount.classList.add("hidden");
    rejectedJobCount.classList.add("hidden");
    countElement.classList.add("hidden");
    job_cards_section.classList.remove("hidden");
  } else if (id === "rejected_toggle_btn") {
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

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;

    parentNode.querySelector(".status_btn").innerText = "INTERVIEW";
    parentNode.querySelector(".status_btn").classList.remove("btn-soft");
    parentNode.querySelector(".status_btn").classList.remove("btn-error");
    parentNode.querySelector(".status_btn").classList.add("btn-success");

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn: "INTERVIEW",
      job_description,
    };

    const job_exist = interview_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      interview_job_count_list.push(jobs);
    }

    rejected_job_count_list = rejected_job_count_list.filter(
      (item) => item.job_title != jobs.job_title,
    );

    if (current_job_count_list === "rejected_toggle_btn") {
      renderRejectedJob();
    }

    calculateCount();
  } else if (event.target.classList.contains("rejected_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;

    parentNode.querySelector(".status_btn").innerText = "REJECTED";
    parentNode.querySelector(".status_btn").classList.remove("btn-success");
    parentNode.querySelector(".status_btn").classList.remove("btn-soft");
    parentNode.querySelector(".status_btn").classList.add("btn-error");

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn: "REJECTED",
      job_description,
    };

    const job_exist = rejected_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      rejected_job_count_list.push(jobs);
    }

    interview_job_count_list = interview_job_count_list.filter(
      (item) => item.job_title != jobs.job_title,
    );

    if (current_job_count_list === "interview_toggle_btn") {
      renderInterviewJob();
    }

    calculateCount();
  }
});

function renderInterviewJob() {
  filtered_job_section.innerHTML = "";
  for (const interview_job_item of interview_job_count_list) {
    const div = document.createElement("div");
    div.innerHTML = `<div id="job_card" class="bg-white rounded-lg p-6 my-5">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="job_title text-lg font-semibold pb-1">${interview_job_item.job_title}</h2>
                        <p class="job_position text-[#64748B]">${interview_job_item.job_position}</p>
                    </div>

                    <i class="fa-regular fa-trash-can delete_btn text-error text-2xl"></i>
                </div>

                <p class="job_information py-5">${interview_job_item.job_information}</p>
                <div>
                    <button class="status_btn btn btn-success ">${interview_job_item.status_btn}</button>
                </div>

                <p class="job_description pb-5 pt-2">${interview_job_item.job_description}</p>
                <div>
                    <button id="job_interview_btn"
                        class="interview_btn btn btn-success btn-soft mr-2">INTERVIEW</button>
                    <button id="job_rejected_btn" class="rejected_btn btn btn-error btn-soft">REJECTED</button>
                </div>
            </div>`;
    filtered_job_section.appendChild(div);
  }
}

function renderRejectedJob() {
  filtered_job_section.innerHTML = "";
  for (const rejected_job_item of rejected_job_count_list) {
    const div = document.createElement("div");
    div.innerHTML = `<div id="job_card" class="bg-white rounded-lg p-6 my-5">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="job_title text-lg font-semibold pb-1">${rejected_job_item.job_title}</h2>
                        <p class="job_position text-[#64748B]">${rejected_job_item.job_position}</p>
                    </div>

                    <i class="fa-regular fa-trash-can delete_btn text-error text-2xl"></i>
                </div>

                <p class="job_information py-5">${rejected_job_item.job_information}</p>
                <div>
                    <button class="status_btn btn btn-error ">${rejected_job_item.status_btn}</button>
                </div>

                <p class="job_description pb-5 pt-2">${rejected_job_item.job_description}</p>
                <div>
                    <button id="job_interview_btn"
                        class="interview_btn btn btn-success btn-soft mr-2">INTERVIEW</button>
                    <button id="job_rejected_btn" class="rejected_btn btn btn-error btn-soft">REJECTED</button>
                </div>
            </div>`;
    filtered_job_section.appendChild(div);
  }
}

job_cards_section.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete_btn")) {
    const job_card = event.target.closest(".job_card");
    job_card.remove();
  }
  calculateCount();
});
