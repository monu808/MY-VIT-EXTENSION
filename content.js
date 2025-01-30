window.addEventListener("load", () => {
    // Add buttons to the top of the page
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "fixed";
    buttonContainer.style.top = "50px"; // Adjusted position to make it slightly lower
    buttonContainer.style.right = "10px";
    buttonContainer.style.zIndex = "1000";
    buttonContainer.style.backgroundColor = "#f0f0f0";
    buttonContainer.style.padding = "10px";
    buttonContainer.style.borderRadius = "8px";
    buttonContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";

    // Create Attendance Button
    const attendanceButton = document.createElement("button");
    attendanceButton.innerText = "Show Timetable";
    attendanceButton.style.margin = "5px";
    attendanceButton.style.padding = "10px";
    attendanceButton.style.border = "none";
    attendanceButton.style.borderRadius = "5px";
    attendanceButton.style.backgroundColor = "#0056a3";
    attendanceButton.style.color = "white";
    attendanceButton.style.cursor = "pointer";

    // Create Timetable Button
    const timetableButton = document.createElement("button");
    timetableButton.innerText = "Show Attendance";
    timetableButton.style.margin = "5px";
    timetableButton.style.padding = "10px";
    timetableButton.style.border = "none";
    timetableButton.style.borderRadius = "5px";
    timetableButton.style.backgroundColor = "#0056a3";
    timetableButton.style.color = "white";
    timetableButton.style.cursor = "pointer";

        // Create Timetable Button
        const gradeButton = document.createElement("button");
        gradeButton.innerText = "Show Grade";
        gradeButton.style.margin = "5px";
        gradeButton.style.padding = "10px";
        gradeButton.style.border = "none";
        gradeButton.style.borderRadius = "5px";
        gradeButton.style.backgroundColor = "#0056a3";
        gradeButton.style.color = "white";
        gradeButton.style.cursor = "pointer";

        // Create Dark Mode Button
        const darkModeButton = document.createElement("button");
        darkModeButton.innerText = "🌙 Dark Mode";
        // Apply consistent styling with other buttons
        darkModeButton.style.margin = "5px";
        darkModeButton.style.padding = "10px";
        darkModeButton.style.border = "none";
        darkModeButton.style.borderRadius = "5px";
        darkModeButton.style.backgroundColor = "#0056a3";
        darkModeButton.style.color = "white";
        darkModeButton.style.cursor = "pointer";

    // Append buttons to the container
    buttonContainer.appendChild(attendanceButton);
    buttonContainer.appendChild(timetableButton);
    buttonContainer.appendChild(gradeButton);
    // Add dark mode button to container
    buttonContainer.appendChild(darkModeButton);

    // Append the container to the body
    document.body.appendChild(buttonContainer);

    // Logic for Attendance Button
    attendanceButton.addEventListener("click", () => {
        const sidebarButton = document.querySelector(".SideBarMenuBtn");
        if (sidebarButton) {
            // Step 1: Click the sidebar button
            sidebarButton.click();
    
            // Give time for the sidebar to expand
            setTimeout(() => {
                // Step 2: Click on "Time Table" item
                const timeTableButton = document.querySelector('[data-url="academics/common/StudentTimeTable"]');
                if (timeTableButton) {
                    timeTableButton.click();
    
                    // Give time for the Time Table section to load
                    setTimeout(() => {
                        // Step 3: Select semester dropdown and set value
                        const semesterDropdown = document.querySelector("#semesterSubId");
                        if (semesterDropdown) {
                            semesterDropdown.value = "BL20242505"; // Update with desired semester value
    
                            // Trigger the onchange event
                            const event = new Event("change", { bubbles: true });
                            semesterDropdown.dispatchEvent(event);
                        } else {
                            //alert("Semester dropdown not found!");
                        }
                    }, 500); // Adjust delay if needed for the dropdown to load
                } else {
                    alert("Time Table option not found!");
                }
            }, 500); // Adjust delay if needed for the Time Table button to load
        } else {
            alert("Sidebar button not found!");
        }
    });

    

    // Logic for Timetable Button
    timetableButton.addEventListener("click", () => {
        const sidebarButton = document.querySelector(".SideBarMenuBtn");
        if (sidebarButton) {
            // Step 1: Click the sidebar button
            sidebarButton.click();
    
            // Give time for the sidebar to open
            setTimeout(() => {
                // Step 2: Click on "Time Table" item
                const timeTableButton = document.querySelector('[data-url="academics/common/StudentAttendance"]');
                if (timeTableButton) {
                    timeTableButton.click();
    
                    // Give time for the Time Table section to load
                    setTimeout(() => {
                        // Step 3: Select semester dropdown and set value
                        const semesterDropdown = document.querySelector("#semesterSubId");
                        if (semesterDropdown) {
                            semesterDropdown.value = "BL20242505"; // Update with desired semester value
    
                            // Trigger the onchange event
                            const event = new Event("change", { bubbles: true });
                            semesterDropdown.dispatchEvent(event);
    
                            // Give time for the dropdown change to process
                            setTimeout(() => {
                                // Step 4: Click the auto button
                                const autoButton = document.querySelector(".btn.btn-md.btn-primary.btn-block");
                                if (autoButton) {
                                    autoButton.click(); // Trigger the button click
                                } else {
                                    alert("Auto button not found!");
                                }
                            }, 500); // Adjust delay as needed
                        } else {
                            //alert("Semester dropdown not found!");
                        }
                    }, 500); // Adjust delay as needed
                } else {
                    alert("Time Table option not found!");
                }
            }, 500); // Adjust delay as needed
        } else {
            alert("Sidebar button not found!");
        }
    });

// Logic for Grade Button
gradeButton.addEventListener("click", () => {
    const sidebarButton = document.querySelector(".SideBarMenuBtn");
    if (sidebarButton) {
        // Step 1: Click the sidebar button
        sidebarButton.click();

        // Give time for the sidebar to expand
        setTimeout(() => {
            // Step 2: Click on "Grade View" item
            const gradeButton = document.querySelector('[data-url="examinations/examGradeView/StudentGradeHistory"]');
            if (gradeButton) {
                gradeButton.click();
                
                // Give time for the Grade section to load
                setTimeout(() => {
                    // Step 3: You can add semester selection here if needed
                    const semesterDropdown = document.querySelector("#semesterSubId");
                    if (semesterDropdown) {
                        semesterDropdown.value = "BL20242505";
                        const event = new Event("change", { bubbles: true });
                        semesterDropdown.dispatchEvent(event);
                    }
                }, 500);
                
            } else {
                alert("Grade option not found in sidebar!");
            }
        }, 500); // Match the delay used in other buttons
        
    } else {
        alert("Sidebar button not found!");
    }
});

    // Inject CSS
    const style = document.createElement("style");
    style.textContent = `
        .vit-helper-dark-mode {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        .vit-helper-dark-mode table,
        .vit-helper-dark-mode tr,
        .vit-helper-dark-mode td {
            background-color: #2a2a2a !important;
            color: #ffffff !important;
        }
    `;
    document.head.appendChild(style);

    // Load saved dark mode state
    chrome.storage.local.get(['darkMode'], (result) => {
        if (result.darkMode) {
            document.body.classList.add('vit-helper-dark-mode');
            darkModeButton.innerText = "☀️ Light Mode";
        }
    });

    // Dark Mode Toggle Handler
    darkModeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("vit-helper-dark-mode");
        darkModeButton.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        chrome.storage.local.set({ darkMode: isDark });
    });

    // Inside the window.addEventListener("load", () => { ... } block

// Create GPA Calculator Button
const gpaButton = document.createElement("button");
gpaButton.innerText = "GPA Calculator";
gpaButton.style.margin = "5px";
gpaButton.style.padding = "10px";
gpaButton.style.border = "none";
gpaButton.style.borderRadius = "5px";
gpaButton.style.backgroundColor = "#0056a3";
gpaButton.style.color = "white";
gpaButton.style.cursor = "pointer";
buttonContainer.appendChild(gpaButton);

// GPA Calculator Modal
const gpaModal = document.createElement("div");
gpaModal.style.display = "none";
gpaModal.style.position = "fixed";
gpaModal.style.top = "50%";
gpaModal.style.left = "50%";
gpaModal.style.transform = "translate(-50%, -50%)";
gpaModal.style.backgroundColor = "#f0f0f0";
gpaModal.style.padding = "20px";
gpaModal.style.borderRadius = "10px";
gpaModal.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
gpaModal.style.zIndex = "1001";

// Modified GPA Calculator Content
gpaModal.innerHTML = `
    <div style="margin-bottom: 15px; text-align: center;">
        <h3 style="margin: 0 0 15px 0; color: #0056a3;">GPA Calculator</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <input type="number" id="gpaCredits" placeholder="Credits" style="padding: 8px;">
            <select id="gpaGrade" style="padding: 8px;">
                <option value="10">S</option>
                <option value="9">A</option>
                <option value="8">B</option>
                <option value="7">C</option>
                <option value="6">D</option>
                <option value="5">E</option>
                <option value="0">F</option>
                <option value="0">N</option>
                <option value="NA">W</option>
                <option value="NA">U</option>
                <option value="NA">P</option>
            </select>
        </div>
        <button id="addCourse" style="margin: 10px 0; width: 100%; padding: 10px; background-color: #0056a3; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Add Course
        </button>
        <div id="courseList" style="margin-bottom: 10px;"></div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong>Total GPA:</strong> 
                <span id="totalGPA">0.00</span>
            </div>
            <button id="resetGPA" style="padding: 5px 10px; background-color: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">
                Reset
            </button>
        </div>
    </div>
`;

// Overlay
const overlay = document.createElement("div");
overlay.style.display = "none";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
overlay.style.zIndex = "1000";

document.body.appendChild(overlay);
document.body.appendChild(gpaModal);

let courses = [];

// GPA Calculator Logic
gpaButton.addEventListener("click", () => {
    gpaModal.style.display = "block";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    gpaModal.style.display = "none";
    overlay.style.display = "none";
});
//old
document.getElementById("addCourse").addEventListener("click", () => {
    const credits = parseFloat(document.getElementById("gpaCredits").value);
    const grade = parseFloat(document.getElementById("gpaGrade").value);
    
    if (!credits || credits <= 0) {
        alert("Please enter valid credits");
        return;
    }

    courses.push({ credits, grade });
    updateGPADisplay();
});

document.getElementById("resetGPA").addEventListener("click", () => {
    courses = [];
    updateGPADisplay();
});

function updateGPADisplay() {
    const courseList = document.getElementById("courseList");
    const totalGPASpan = document.getElementById("totalGPA");
    
    courseList.innerHTML = courses.map((course, index) => `
        <div style="margin: 5px 0; padding: 5px; background-color: ${course.nonContributing ? '#ffeeba' : '#f8f9fa'}; border-radius: 5px;">
            <div style="display: flex; justify-content: space-between;">
                <span>Course ${index + 1}: ${course.credits} credits</span>
                <strong>${course.letter}</strong>
            </div>
            <div style="font-size: 0.9em; color: #6c757d;">
                ${course.remark} ${course.nonContributing ? '(Non-contributing)' : ''}
            </div>
        </div>
    `).join('');

    // Calculate GPA only for contributing courses
    const contributingCourses = courses.filter(course => !course.nonContributing);
    
    const totalCredits = contributingCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalGradePoints = contributingCourses.reduce((sum, course) => sum + (course.credits * course.grade), 0);
    const gpa = totalGradePoints / totalCredits || 0;
    
    totalGPASpan.textContent = totalCredits > 0 ? gpa.toFixed(2) : "0.00 (No contributing courses)";
}

//new
// Modified GPA Calculator Logic
document.getElementById("addCourse").addEventListener("click", () => {
    const credits = parseFloat(document.getElementById("gpaCredits").value);
    const gradeValue = document.getElementById("gpaGrade").value;
    const gradeLetter = document.getElementById("gpaGrade").options[document.getElementById("gpaGrade").selectedIndex].text;
    
    if (!credits || credits <= 0) {
        alert("Please enter valid credits");
        return;
    }

    if (gradeValue === "NA") {
        courses.push({ 
            credits, 
            grade: 0, 
            letter: gradeLetter,
            remark: getGradeRemark(gradeLetter),
            nonContributing: true 
        });
    } else {
        courses.push({ 
            credits, 
            grade: parseFloat(gradeValue), 
            letter: gradeLetter,
            remark: getGradeRemark(gradeLetter),
            nonContributing: false 
        });
    }
    
    updateGPADisplay();
});

function getGradeRemark(grade) {
    const remarks = {
        'S': 'Pass in the Course',
        'A': 'Pass in the Course',
        'B': 'Pass in the Course',
        'C': 'Pass in the Course',
        'D': 'Pass in the Course',
        'E': 'Pass in the Course',
        'F': 'Failed in the course',
        'N': 'Not cleared components/Debarred/Absent/Malpractice',
        'W': 'Course registration Withdrawn',
        'U': 'Successfully completed Audit Course',
        'P': 'Passed in Pass-Fail course'
    };
    return remarks[grade] || '';
}

// Add dark mode compatibility
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('vit-helper-dark-mode')) {
        gpaModal.style.backgroundColor = '#2a2a2a';
        gpaModal.style.color = '#ffffff';
    } else {
        gpaModal.style.backgroundColor = '#f0f0f0';
        gpaModal.style.color = '#000000';
    }
});

});