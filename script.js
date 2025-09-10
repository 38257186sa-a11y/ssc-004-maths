function checkAnswers() {
  let score = 0;
  const total = document.querySelectorAll(".question").length;

  document.querySelectorAll(".question").forEach((q, index) => {
    const selected = q.querySelector("input[type='radio']:checked");
    const result = q.querySelector(".result");
    if (selected) {
      if (selected.value === "true") {
        score++;
        result.textContent = "✔ Correct!";
        result.style.color = "green";
      } else {
        result.textContent = "✘ Wrong!";
        result.style.color = "red";
      }
    } else {
      result.textContent = "⚠ Not attempted!";
      result.style.color = "orange";
    }
  });

  document.getElementById("score").textContent = 
    `Your Score: ${score} / ${total}`;
}
