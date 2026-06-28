let students = JSON.parse(localStorage.getItem("attendance")) || [];

function renderStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>
                <select onchange="changeStatus(${index}, this.value)">
                    <option value="Present" ${student.status==="Present"?"selected":""}>Present</option>
                    <option value="Absent" ${student.status==="Absent"?"selected":""}>Absent</option>
                </select>
            </td>
        </tr>
        `;
    });
}

function addStudent() {
    const name = document.getElementById("studentName").value.trim();

    if(name===""){
        alert("Enter student name");
        return;
    }

    students.push({
        name:name,
        status:"Present"
    });

    document.getElementById("studentName").value="";
    renderStudents();
}

function changeStatus(index, status){
    students[index].status=status;
}

function saveAttendance(){
    localStorage.setItem("attendance", JSON.stringify(students));
    alert("Attendance Saved");
}

renderStudents();
