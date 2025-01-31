window.addEventListener("load", () => {
    //===================
    // Settings Icon
    //===================
    const iconContainer = document.createElement("div");
    Object.assign(iconContainer.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: "1005",
        cursor: "pointer"
    });

    const settingsIcon = document.createElement("div");
    settingsIcon.innerHTML = "⚙️";
    Object.assign(settingsIcon.style, {
        fontSize: "28px",
        padding: "12px",
        borderRadius: "50%",
        backgroundColor: "#0056a3",
        color: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px"
    });

    //===================
    // Button Container
    //===================
    const buttonContainer = document.createElement("div");
    Object.assign(buttonContainer.style, {
        position: "fixed",
        bottom: "80px",
        right: "30px",
        zIndex: "1000",
        backgroundColor: "rgba(255,255,255,0.95)",
        padding: "15px",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        display: "none",
        flexDirection: "column",
        gap: "12px",
        transition: "all 0.3s ease",
        minWidth: "280px",
        maxHeight: "70vh",
        overflowY: "auto"
    });
        //===================
    // Container Header
    //===================
    const containerHeader = document.createElement("div");
    containerHeader.innerHTML = `
        <div style="display: flex;
                    align-items: center;
                    gap: 15px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    margin-bottom: 10px;">
            <div>
                <h3 style="margin: 0; color: #0056a3;"><b>VTOP SHORTCUT</b></h3>
                <div style="font-size: 0.8em; color: #666;">v2.1.0</div>
            </div>
        </div>
    `;

    //===================
    // Container Footer
    //===================
    const containerFooter = document.createElement("div");
    containerFooter.innerHTML = `
        <div style="padding-top: 12px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    margin-top: 10px;
                    text-align: center;
                    font-size: 0.8em;">
            Developed by <a href="https://github.com/monu808" 
                          target="_blank"
                          style="color: #0056a3;
                                 text-decoration: none;
                                 font-weight: 500;">
                          Narendra Singh
                        </a>
        </div>
    `;
    //===================
    // Hover Interactions
    //===================
    let hideTimeout;
    iconContainer.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        buttonContainer.style.display = "flex";
        settingsIcon.style.transform = "rotate(90deg) scale(1.1)";
    });

    iconContainer.addEventListener("mouseleave", () => {
        settingsIcon.style.transform = "rotate(0deg) scale(1)";
        hideTimeout = setTimeout(() => {
            buttonContainer.style.display = "none";
        }, 300);
    });

    buttonContainer.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
    buttonContainer.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            buttonContainer.style.display = "none";
        }, 300);
    });
    // Hover effect for container
    buttonContainer.addEventListener("mouseenter", () => {
        buttonContainer.style.transform = "translateX(0) scale(1.02)";
    });
    buttonContainer.addEventListener("mouseleave", () => {
        buttonContainer.style.transform = "translateX(0) scale(1)";
    });

    //===================
    // Button Creation
    //===================
    const createButton = (text, icon = "") => {
        const button = document.createElement("button");
        button.innerHTML = `${icon} ${text}`;
        Object.assign(button.style, {
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#0056a3",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            width: "100%"
        });

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-2px)";
            button.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        });

        return button;
    };

    // Buttons with icons
    const attendanceButton = createButton("Show Timetable", "📅");
    const timetableButton = createButton("Show Attendance", "📊");
    const gradeButton = createButton("Show Grades", "📚");
    const darkModeButton = createButton("🌙 Dark Mode", "🌓");
    const gpaButton = createButton("GPA Calculator", "🧮");

    // Add all buttons to container
    [attendanceButton, timetableButton, gradeButton, darkModeButton, gpaButton]
        .forEach(btn => buttonContainer.appendChild(btn));
        // Assemble container
        buttonContainer.appendChild(containerHeader);
        [attendanceButton, timetableButton, gradeButton, darkModeButton, gpaButton]
            .forEach(btn => buttonContainer.appendChild(btn));
        buttonContainer.appendChild(containerFooter);

    // GPA Modal and Overlay
    const gpaModal = document.createElement("div");
    const overlay = document.createElement("div");
    
    Object.assign(gpaModal.style, {
        display: "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255,255,255,0.95)",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
        zIndex: "1001",
        minWidth: "400px",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
    });

    Object.assign(overlay.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "1000",
        backdropFilter: "blur(5px)",
    });

    //===================
    // Enhanced GPA Calculator UI
    //===================
    gpaModal.innerHTML = `
        <div style="margin-bottom: 15px; text-align: center;">
            <h3 style="margin: 0 0 20px 0; 
                      color: #0056a3; 
                      font-size: 1.8em;
                      font-weight: 700;
                      text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                GPA Calculator
            </h3>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <input type="number" 
                       id="gpaCredits" 
                       placeholder="Credits"
                       style="padding: 12px;
                              border: 2px solid #e0e0e0;
                              border-radius: 8px;
                              font-size: 16px;
                              transition: all 0.2s ease;
                              background: rgba(255,255,255,0.8);
                              &:focus { outline: none; border-color: #0056a3; }">
                
                <select id="gpaGrade" 
                        style="padding: 12px;
                               border: 2px solid #e0e0e0;
                               border-radius: 8px;
                               font-size: 16px;
                               appearance: none;
                               background: rgba(255,255,255,0.8) url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230056a3" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 12px center;">
                    ${['S (10)', 'A (9)', 'B (8)', 'C (7)', 'D (6)', 'E (5)', 'F (0)', 'N (0)', 'W (NA)', 'U (NA)', 'P (NA)']
                        .map(opt => {
                            const [letter, value] = opt.split(' (');
                            return `<option value="${value.replace(')', '')}" 
                                          style="padding: 8px;
                                                 background: white;
                                                 &:hover { background: #f0f0f0; }">
                                      ${letter}
                                  </option>`;
                        }).join('')}
                </select>
            </div>

            <button id="addCourse" 
                    style="margin: 10px 0 20px 0;
                           width: 100%;
                           padding: 14px;
                           background: linear-gradient(135deg, #0056a3, #003366);
                           color: white;
                           border: none;
                           border-radius: 10px;
                           cursor: pointer;
                           font-weight: 600;
                           transition: all 0.2s ease;
                           &:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }">
                ➕ Add Course
            </button>

            <div id="courseList" 
                 style="margin-bottom: 20px;
                        max-height: 300px;
                        overflow-y: auto;
                        padding-right: 8px;">
                <!-- Courses will be added here -->
            </div>

            <div style="display: flex; 
                        justify-content: space-between; 
                        align-items: center;
                        padding: 15px;
                        background: rgba(0,86,163,0.1);
                        border-radius: 10px;">
                <div style="font-size: 1.1em;">
                    <strong style="color: #0056a3;">Total GPA:</strong> 
                    <span id="totalGPA" style="font-weight: 700; color: #003366;">0.00</span>
                </div>
                <button id="resetGPA" 
                        style="padding: 8px 20px;
                               background: #ff4444;
                               color: white;
                               border: none;
                               border-radius: 8px;
                               cursor: pointer;
                               transition: all 0.2s ease;
                               &:hover { background: #cc0000; transform: scale(1.05); }">
                    🔄 Reset
                </button>
            </div>
        </div>
    `;

    //===================
    // Dark Mode Enhancements
    //===================
    const updateDarkModeStyles = (isDark) => {
        const styles = {
            backgroundColor: isDark ? 'rgba(40,40,40,0.95)' : 'rgba(255,255,255,0.95)',
            color: isDark ? '#ffffff' : '#000000',
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        };

        // Apply to button container
        Object.assign(buttonContainer.style, styles);
        Object.assign(settingsIcon.style, {
            backgroundColor: isDark ? 'rgba(40,40,40,0.9)' : 'rgba(255,255,255,0.9)',
            color: isDark ? '#fff' : '#000',
            boxShadow: isDark ? '0 2px 8px rgba(255,255,255,0.1)' : '0 2px 8px rgba(0,0,0,0.1)'
        });
    

        // Apply to GPA modal
        Object.assign(gpaModal.style, {
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            borderColor: styles.borderColor,
        });

        // Update form elements
        const inputs = gpaModal.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)';
            input.style.color = isDark ? '#ffffff' : '#000000';
            input.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : '#e0e0e0';
        });
    };

    // Modified dark mode handler
    darkModeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("vit-helper-dark-mode");
        darkModeButton.innerHTML = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        darkModeButton.style.backgroundColor = isDark ? "#2a2a2a" : "#0056a3";
        chrome.storage.local.set({ darkMode: isDark });
        updateDarkModeStyles(isDark);
    });

    // Rest of the functionality remains same as previous optimized version
    // ... [Include all previous functionality code here] ...
    const navigateToSection = (url, semesterValue) => {
        const sidebarButton = document.querySelector(".SideBarMenuBtn");
        if (!sidebarButton) {
            alert("Sidebar button not found!");
            return;
        }

        sidebarButton.click();
        
        setTimeout(() => {
            const targetButton = document.querySelector(`[data-url="${url}"]`);
            if (!targetButton) {
                alert("Target section not found!");
                return;
            }

            targetButton.click();
            
            setTimeout(() => {
                const semesterDropdown = document.querySelector("#semesterSubId");
                if (semesterDropdown) {
                    semesterDropdown.value = semesterValue;
                    semesterDropdown.dispatchEvent(new Event("change", { bubbles: true }));
                }
            }, 500);
        }, 500);
    };

    // Button Handlers
    attendanceButton.addEventListener("click", () => {
        navigateToSection("academics/common/StudentTimeTable", "BL20242505");
        setTimeout(() => {
            const autoButton = document.querySelector(".btn.btn-md.btn-primary.btn-block");
            autoButton?.click();
        }, 1000);
    });

    timetableButton.addEventListener("click", () => {
        navigateToSection("academics/common/StudentAttendance", "BL20242505");
        setTimeout(() => {
            const autoButton = document.querySelector(".btn.btn-md.btn-primary.btn-block");
            autoButton?.click();
        }, 1000);
    });

    gradeButton.addEventListener("click", () => 
        navigateToSection("examinations/examGradeView/StudentGradeHistory", "BL20242505"));



    chrome.storage.local.get(['darkMode'], (result) => {
        if (result.darkMode) {
            document.body.classList.add('vit-helper-dark-mode');
            darkModeButton.innerText = "☀️ Light Mode";
        }
    });

        // Dark Mode Functionality
        const darkModeStyles = document.createElement("style");
        darkModeStyles.textContent = `
            .vit-helper-dark-mode {
                background-color: #1a1a1a !important;
                color: #e0e0e0 !important;
            }
            .vit-helper-dark-mode table, .vit-helper-dark-mode tr, .vit-helper-dark-mode td {
                background-color: #2a2a2a !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(darkModeStyles);

        // GPA Calculator Functionality
        let courses = [];
        gpaModal.innerHTML = `
            <div style="margin-bottom: 15px; text-align: center;">
                <h3 style="margin: 0 0 15px 0; color: #0056a3;">GPA Calculator</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <input type="number" id="gpaCredits" placeholder="Credits" style="padding: 8px;">
                    <select id="gpaGrade" style="padding: 8px;">
                        ${['S (10)', 'A (9)', 'B (8)', 'C (7)', 'D (6)', 'E (5)', 'F (0)', 'N (0)', 'W (NA)', 'U (NA)', 'P (NA)']
                            .map(opt => {
                                const [letter, value] = opt.split(' (');
                                return `<option value="${value.replace(')', '')}">${letter}</option>`;
                            }).join('')}
                    </select>
                </div>
                <button id="addCourse" style="margin: 10px 0; width: 100%; padding: 10px; background-color: #0056a3; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Add Course
                </button>
                <div id="courseList" style="margin-bottom: 10px;"></div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div><strong>Total GPA:</strong> <span id="totalGPA">0.00</span></div>
                    <button id="resetGPA" style="padding: 5px 10px; background-color: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">
                        Reset
                    </button>
                </div>
            </div>
        `;
    
        document.body.appendChild(overlay);
        document.body.appendChild(gpaModal);
        document.body.appendChild(buttonContainer);
    
        // GPA Event Listeners
        gpaButton.addEventListener("click", () => {
            gpaModal.style.display = "block";
            overlay.style.display = "block";
        });
    
        overlay.addEventListener("click", () => {
            gpaModal.style.display = "none";
            overlay.style.display = "none";
        });
    
        document.getElementById("addCourse").addEventListener("click", addCourseHandler);
        document.getElementById("resetGPA").addEventListener("click", resetCourses);
    
        // GPA Functions
        function addCourseHandler() {
            const credits = parseFloat(document.getElementById("gpaCredits").value);
            const gradeValue = document.getElementById("gpaGrade").value;
            const gradeLetter = document.getElementById("gpaGrade").selectedOptions[0].text.split(' ')[0];
    
            if (!credits || credits <= 0) {
                alert("Please enter valid credits");
                return;
            }
    
            courses.push({
                credits,
                grade: gradeValue === "NA" ? 0 : parseFloat(gradeValue),
                letter: gradeLetter,
                remark: getGradeRemark(gradeLetter),
                nonContributing: gradeValue === "NA"
            });
    
            updateGPADisplay();
        }
    
        function resetCourses() {
            courses = [];
            updateGPADisplay();
        }
    
        function updateGPADisplay() {
            const contributingCourses = courses.filter(c => !c.nonContributing);
            const totalCredits = contributingCourses.reduce((sum, c) => sum + c.credits, 0);
            const totalGradePoints = contributingCourses.reduce((sum, c) => sum + (c.credits * c.grade), 0);
            const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.00;
    
            document.getElementById("courseList").innerHTML = courses.map((course, i) => `
                <div style="margin: 5px 0; padding: 5px; background-color: ${course.nonContributing ? '#ffeeba' : '#f8f9fa'}; border-radius: 5px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Course ${i + 1}: ${course.credits} credits</span>
                        <strong>${course.letter}</strong>
                    </div>
                    <div style="font-size: 0.9em; color: #6c757d;">
                        ${course.remark} ${course.nonContributing ? '(Non-contributing)' : ''}
                    </div>
                </div>
            `).join('');
    
            document.getElementById("totalGPA").textContent = gpa;
        }
    
        function getGradeRemark(grade) {
            return {
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
            }[grade] || '';
        }
    // Enhanced course display with animations
    function updateGPADisplay() {
        const courseList = document.getElementById("courseList");
        const contributingCourses = courses.filter(c => !c.nonContributing);
        const totalCredits = contributingCourses.reduce((sum, c) => sum + c.credits, 0);
        const totalGradePoints = contributingCourses.reduce((sum, c) => sum + (c.credits * c.grade), 0);
        const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.00;

        // Animate course entries
        courseList.innerHTML = courses.map((course, i) => `
            <div class="course-entry" 
                 style="margin: 10px 0;
                        padding: 15px;
                        background: ${course.nonContributing ? 'rgba(255,228,150,0.2)' : 'rgba(0,86,163,0.05)'};
                        border-radius: 8px;
                        border-left: 4px solid ${course.nonContributing ? '#ffd700' : '#0056a3'};
                        animation: slideIn 0.3s ease;
                        transition: all 0.2s ease;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span style="font-weight: 600; color: ${course.nonContributing ? '#ffd700' : '#0056a3'};">Course ${i + 1}</span>
                        <span style="font-size: 0.9em; color: #666;">${course.credits} credits</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.2em; font-weight: 700;">${course.letter}</span>
                        <span style="font-size: 1em; color: #666;">(${course.grade})</span>
                    </div>
                </div>
                <div style="margin-top: 8px; font-size: 0.9em; color: #888;">
                    ${course.remark} ${course.nonContributing ? '🌟 Non-contributing' : ''}
                </div>
            </div>
        `).join('');

        document.getElementById("totalGPA").textContent = gpa;
    }

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .course-entry:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        #courseList::-webkit-scrollbar {
            width: 6px;
        }
        
        #courseList::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
        }
        
        #courseList::-webkit-scrollbar-thumb {
            background: #0056a3;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);
    iconContainer.appendChild(settingsIcon);
    iconContainer.appendChild(settingsIcon);

    // Append elements to body
    document.body.appendChild(iconContainer);
    document.body.appendChild(overlay);
    document.body.appendChild(gpaModal);
    document.body.appendChild(buttonContainer);
    document.body.appendChild(header);
    document.body.appendChild(footer);
});