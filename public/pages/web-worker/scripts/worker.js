let result;
self.addEventListener(
  "message",
  function(e) {
    for (let i = 0; i < 1e9; i++) {
      result = i;
    }
    // Send message back to the main script
    self.postMessage("Done! Worker counted to " + result);
  },
  false
);
