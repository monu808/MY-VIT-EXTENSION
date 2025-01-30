document.getElementById("attendance").onclick = () => {
    window.open("https://vtop.vitbhopal.ac.in/vtop/content", "_blank");
};

document.getElementById("timetable").onclick = () => {
    window.open("https://vtop.vitbhopal.ac.in/vtop/content", "_blank");
};

document.getElementById("gpaCalculator").addEventListener("click", () => {
    document.getElementById("gpaModal").style.display = "block";
  });
  // Implement GPA calculation logic here.