document.addEventListener("DOMContentLoaded", function() {
    let skills = ["HTML", "CSS", "JavaScript", "PHP", "Laravel"];
    let skillList = document.getElementById("skill-list");

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillList.appendChild(li);
    });
});
