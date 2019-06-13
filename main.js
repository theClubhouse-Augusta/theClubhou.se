var loadStudentStyle = function (event) {

    var studentName = event.target.classList;

    studentName.forEach(function(string) {
        if(string.indexOf("--") !== -1) {
            studentName = string.split("--")[1];
        }
    });


    // Create new link Element 
    var styleLink = document.createElement('link');  

    // set the attributes for link element 
    styleLink.rel = 'stylesheet';  
    styleLink.type = 'text/css'; 

    styleLink.href = studentName.toLowerCase() + '.css';  


    // Get HTML head element to append  
    // link element to it  
    console.log(document.getElementsByTagName('HEAD'));
    // document.getElementsByTagName('HEAD')[0].appendChild(styleLink);
}

var studentSwapList = function () {

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

    var studentNames = [ 
        'Veronica',
        'Terry',
        'Kat',
        'Melva',
        'Ameris',
        'Joel',
        'Rain',
        'Lathan',
        'Wilisa',
        'Taylor',
        'Chris'
    ];

    var studentList = document.createElement("ul");
    studentList.classList.add("style-swap");

    studentList.addEventListener("click", function (event) {
        loadStudentStyle(event);
    });

    studentNames.forEach(function (studentName) {
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