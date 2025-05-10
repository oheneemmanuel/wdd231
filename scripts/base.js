window.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById("LastModified").textContent = `Last Modified: ${lastModified}`;

    const displayMenu = document.getElementById("menu-option");
    const menuButton = document.getElementById("menu");
    menuButton.addEventListener('click',() => {
        displayMenu.classList.toggle("show");
        menuButton.classList.toggle("show");
    });

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ];
    document.getElementById('All-course').addEventListener('click', () => filterCourses('All'));
    document.getElementById('Wdd-course').addEventListener('click', () => filterCourses('WDD'));
    document.getElementById('Cse-course').addEventListener('click', () => filterCourses('CSE'));
    
    function filterCourses(subject) {
        let filteredCourses;
        if (subject === 'All') {
            filteredCourses = courses;
        } else {
            filteredCourses = courses.filter(course => course.subject === subject);
        }
        

        const courseList = document.getElementById('Course-container');
        courseList.innerHTML = ''; // Clear previous content
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        document.getElementById('totalCredits').textContent = `The total number of credits is ${totalCredits}`;

        
        filteredCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                
            `;
            courseList.appendChild(courseItem);
        });
    }
      
      
    
})


