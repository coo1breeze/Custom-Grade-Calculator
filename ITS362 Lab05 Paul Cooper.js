            function calculator() {
                        
                var grade1 = 0.0, grade2 = 0.0, grade3 = 0.0, grade4 = 0.0, grade5 = 0.0, grade6 = 0.0, result = 0.0;
                $("#labsT #labs").each(function() {grade1 += Number($(this).val());});
                $('#quizzesT #quizzes').each(function() { grade2 += Number($(this).val()); });
                $('#examsT #exams').each(function() { grade3 += Number($(this).val()); });
                $('#projectsT #projects').each(function() { grade4 += Number($(this).val()); });
                $('#extracreditsT #extracredits').each(function() { grade5 += Number($(this).val()); });
                $('#participationT #participation').each(function() { grade6 += Number($(this).val()); });
                var total = ((grade1 + grade2 + grade3 + grade4 + grade5 + grade6) / 5) / 145;

                console.log("Grade 1: " + grade1);
                console.log("Grade 2: " + grade2);
                console.log("Grade 3: " + grade3);
                console.log("Grade 4: " + grade4);
                console.log("Grade 5: " + grade5);
                console.log("Grade 6: " + grade6);
                console.log(total);
                if (total < 0.60) {
                    result = "F";
                } else if (total >= 0.60 && total < 0.70) {
                    result = "D";
                } else if (total >= 0.70 && total < 0.80) {
                    result = "C";
                } else if (total >= 0.80 && total < 0.90) {
                    result = "B";
                } else if (total >= 0.90) {
                    result = "A";
                } else {
                    result = "...waiting for all boxes to be filled...";
                }
                var display = document.getElementById('outputDiv');

                display.innerHTML = 'You resulting grade is:  ' + result;
            }
            

            function savePoints() {
                var display = document.getElementById('outputDiv');
                document.cookie = stringPal();
                display.innerHTML = "Points saved";
            }

            function stringPal() {
                var stringToSend = {
                    labs: "",
                    quizzes: "",
                    exams: "",
                    projects: "",
                    extracredits: "",
                    participation: ""
                };
                stringToSend.labs = document.getElementById("labs").value;
                stringToSend.quizzes = document.getElementById("quizzes").value;
                stringToSend.exams = document.getElementById("exams").value;
                stringToSend.projects = document.getElementById("projects").value;
                stringToSend.extracredits = document.getElementById("extracredits").value;
                stringToSend.participation = document.getElementById("participation").value;
                return JSON.stringify(stringToSend);
            }

            function loadPoints() {
                var display = document.getElementById('outputDiv');
                display.innerHTML = "";
                var cookie = JSON.parse(document.cookie);
                console.log("Cookie:" + cookie);
                document.getElementById("labs").value = cookie.labs;
                document.getElementById("quizzes").value = cookie.quizzes;
                document.getElementById("exams").value = cookie.exams;
                document.getElementById("projects").value = cookie.projects;
                document.getElementById("extracredits").value = cookie.extracredits;
                document.getElementById("participation").value = cookie.participation;
                display.innerHTML = "Points loaded";
            }

            $(document).ready(function() {
                $(document).keyup(function() {
                    calculator();
                });});


            $(function() { $("#addLab").click(function() { $('#labsT').append($('<input type="text" size="2" id="labs" class="amount"/>')); });});
            $(function() { $("#removeLab").click(function() { $('#labsT').children("input").last().remove(); calculator(); });});
            
            $(function() { $("#addQuiz").click(function() { $('#quizzesT').append($('<input type="text" size="2" id="quizzes" class="amount"/>')); });});
            $(function() { $("#removeQuiz").click(function() { $('#quizzesT').children("input").last().remove(); calculator(); });});
            
            $(function() { $("#addExam").click(function() { $('#examsT').append($('<input type="text" size="2" id="exams" class="amount"/>')); });});
            $(function() { $("#removeExam").click(function() { $('#examsT').children("input").last().remove(); calculator(); });});
            
            $(function() { $("#addProject").click(function() { $('#projectsT').append($('<input type="text" size="2" id="projects" class="amount"/>')); });});
            $(function() { $("#removeProject").click(function() { $('#projectsT').children("input").last().remove(); calculator(); });});
            
            $(function() { $("#addExtra").click(function() { $('#extracreditsT').append($('<input type="text" size="2" id="extracredits" class="amount"/>')); });});
            $(function() { $("#removeExtra").click(function() { $('#extracreditsT').children("input").last().remove(); calculator(); });});
            
            $(function() { $("#addPart").click(function() { $('#participationT').append($('<input type="text" size="2" id="participation" class="amount"/>')); });});
            $(function() { $("#removePart").click(function() { $('#participationT').children("input").last().remove(); calculator(); });});