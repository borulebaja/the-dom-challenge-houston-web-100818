var numbers = {};
var i = 0;
var interval = setInterval(increment, 1000);
function increment() {
  i = i + 1;
  document.getElementById("counter").innerHTML = i;
}
var allComments = "";

function submitComment() {
  var commentValue = document.querySelector("#textBox").value;
  allComments += `<li> ${commentValue}</li>`;

  document.querySelector("#list").innerHTML = allComments;
}

function decrement() {
  i = i - 1;
  document.getElementById("counter").innerHTML = i;
}

function like() {
  if (numbers[i]) {
    numbers[i] += 1;
  } else {
    numbers[i] = 1;
  }
  var list = "";
  for (var num in numbers) {
    list += `<li>${num} has been liked ${numbers[num]} times.</li>`;
  }
  document.querySelector(".likes").innerHTML = list;
}

function resume() {
  document.getElementById("pause").innerText = "Pause";
  document.getElementById("-").addEventListener("click", decrement);

  document.getElementById("+").addEventListener("click", increment);

  document.getElementById("<3").addEventListener("click", like);
  document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
  });
}

document.getElementById("pause").addEventListener("click", pauseButtons);

function pauseButtons() {
  document.getElementById("-").removeEventListener("click", decrement);

  document.getElementById("+").removeEventListener("click", increment);

  document.getElementById("<3").removeEventListener("click", like);

  document.getElementById("pause").addEventListener("click", resume);
  document.getElementById("pause").innerText = "Resume";
}

document.getElementById("submit").addEventListener("click", submitComment);

resume();
