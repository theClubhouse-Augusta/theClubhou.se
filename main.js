var students = {
    "names": [
        'Veronica',
        'Terry',
        'Kat',
        'Melva',
        'Amaris',
        'Joel',
        'Rain',
        'Lathan',
        'Wilisa',
        'Taylor',
        'Chris'
    ],
    "lastClicked": []
}

/* Build the listener function for the swap */
function loadStudentStyle (event) {

        // Get all of the Student Names
    var studentName = event.target.classList;

    studentName.forEach(function(string) {
        if(string.indexOf("--") !== -1) {
            studentName = string.split("--")[1];
        }
    });

    // check if we have been here before
    if(students.lastClicked.length > 0) {
        
        // remove from the students.lastClicked list
        var lastStudent = students.lastClicked.pop().toLowerCase();


        // get a link with the href of the old style tag    
        var oldLink = document.querySelector("link[href='" + lastStudent + ".css']");

        // remove an old link from the DOM
        oldLink.parentNode.removeChild(oldLink);
    }

    


    // Create new link Element 
    var styleLink = document.createElement('link');  

    // set the attributes for link element 
    styleLink.rel = 'stylesheet';  
    styleLink.type = 'text/css'; 

    styleLink.href = studentName.toLowerCase() + '.css';  
    
    // Get HTML head element to append  
    // link element to it  

    students.lastClicked.push(studentName);

    document.getElementsByTagName('HEAD')[0].appendChild(styleLink);
}



/* 
* Build the List of items 
*/
function studentSwapList () {

    if(document.querySelector(".style-swap")) {
        return;
    }

    var createStudentElement = function (studentName) {

        var studentElement = document.createElement("li");

        studentElement.classList.add("style-swap__item");
        studentElement.classList.add("style-swap__item--" + studentName);

        studentElement.textContent = "Styling by: " + studentName;

        return studentElement;
    }



    var studentList = document.createElement("ul");
    studentList.classList.add("style-swap");

    studentList.addEventListener("click", function (event) {
        loadStudentStyle(event);
    });

    students.names.forEach(function (studentName) {
        // Create a list item for each student.
        var studentEl = createStudentElement(studentName);

        studentList.appendChild(studentEl);
    });

    return studentList;
}



/*
* Create a button just to assist in development.
* Take this out for production.
*/ 
window.onload = function () {
    var devBtn = document.createElement("div");
    devBtn.textContent = "Load Student List";
    devBtn.style = "padding: 40px";

    devBtn.addEventListener("click", function (e) {
        document.body.appendChild(studentSwapList());
    });

    document.body.appendChild(devBtn);
}