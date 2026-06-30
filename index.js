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
console.log(interviewBtnMain);

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

  if(selected == interviewBtnMain){
    allJobsSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    console.log("love you")
  }
}


// ******************************
// toggle Part close
// ******************************

// main body part start

const allJobSection = document.getElementById("all-jobs");
// console.log(allJobsSection);
allJobSection.addEventListener("click", function (event) {
 
 console.log(event.target.classList.contains("interview-btn")) 
  if (event.target.classList.contains("interview-btn")) {

  const parentNode = event.target.parentNode.parentNode;
  const compnayName = parentNode.querySelector(".company-name").innerText;
  const applyStatus = parentNode.querySelector(".no-apply").innerText;
  const jobCardInfo = {
    compnayName,
    applyStatus
  }
  
  parentNode.querySelector('.no-apply').innerText = "Interview";
  parentNode.querySelector('.no-apply').classList.remove('hidden')
  const bildinCard = interviewList.find(item => item.compnayName === jobCardInfo.compnayName);
  if(!bildinCard){
    interviewList.push(jobCardInfo);
  }
  interviewSet()
}
});

function interviewSet(){
  interviewList.innerText = " ";
  for(let interview of interviewList){
    let div = document.createElement('div');
    div.className = 'job p-6 space-y-5 bg-white rounded-xl'
    div.innerHTML = `
    <div class="job-title flex items-center justify-between">
                    <div>
                        <h4 class="company-name text-lg font-semibold text-[#002C5C]">Mobile First Corp</h4>
                        <p class="text-gray-400">React Native Developer</p>
                    </div>
                    <div class="deleted text-gray-400">
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <p class="text-gray-400">Remote • Full-time • $130,000 - $175,000</p>
                <div>
                    <button class="no-apply hidden btn btn-soft text-[#002C5C] font-medium"> NOT APPLY </button>
                </div>
                <p class="text-gray-400">Build cross-platform mobile applications using React Native. Work on products
                    used
                    by millions
                    of users
                    worldwide.</p>
                <div class="space-x-2">
                    <button class=" interview-btn btn btn-outline btn-success font-semibold">INVERVIEW</button>
                    <button class="rejected btn btn-outline btn-error font-semibold">REJECTED</button>
                </div>
    `
    filterSection.append(div);
  }
}

const filterSection = document.getElementById('filter-section');
// console.log(interviewList);
