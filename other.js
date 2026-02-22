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
