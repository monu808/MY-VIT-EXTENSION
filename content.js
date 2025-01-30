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

    // Append buttons to the container
    buttonContainer.appendChild(attendanceButton);
    buttonContainer.appendChild(timetableButton);

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
});

