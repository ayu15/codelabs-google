let time = 0;
const resetBtn = document.querySelector("#reset");
const btn1 = document.querySelector("#button1");
const output = document.querySelector("#output");
const btn2 = document.querySelector("#button2");
const timerElem = document.querySelector("#timer");

window.setInterval(function() {
  time++;
  timerElem.innerHTML = time;
}, 100);

resetBtn.addEventListener("click", function() {
  output.innerHTML = "";
  time = 0;
});

btn1.addEventListener("click", function() {
  let result;

  for (let i = 0; i < 1e9; i++) {
    result = i;
  }

  output.innerHTML = `Done! Counted to + ${result}`;
});

btn2.addEventListener("click", function() {
  // Create a new worker containing all "text/js-worker" scripts.
  var worker = new Worker("./scripts/worker.js");

  // Listen for a message from the worker
  worker.addEventListener(
    "message",
    function(e) {
      output.innerHTML = `${e.data}`;
    },
    false
  );

  // Start the worker
  worker.postMessage("");
});
