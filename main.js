
var styleSwapper = function () {

    var createStudentElement = function (studentName) {
        var studentItem = document.createElement("li");
        studentItem.classList.add("style-swap__item style-swap__item--" + studentName);
        studentItem.textContent = studentName;
    }

    var createHeaderLink = function (studentName) {

    }

    var studentNames = [ 
        'Veronica',
        'Terry',
        'Katharine',
        'Melva',
        'Ameris',
        'Joel',
        'Rain',
        'Lathan',
        'Wilisa',
        'Taylor',
        'Chris'
    ];

    studentNames.forEach(function (studentName) {
        createHeaderLink(studentName);
        createStudentElement(studentName);

    });


    var studentList = document.createElement("ul");
    studentList.classList.add("style-swap");
}






/*
* Create a button just to assist in development.
* Take this out for production.
*/ 
window.onload = function () {
    var devBtn = document.createElement = "div";
    devBtn.textContent = "Load Student List";
    devBtn.addEventListener("click", function (e) {
        styleSwapper();
    });
    document.appendChild(devBtn);
}