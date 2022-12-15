//objeos literales
/*
const juan = {
    name: "JuanitoBanana",
    username: "juanito_banana",
    points: 100,
    socialMedia: {
        twitter: "juanito_banana",
        instagram: "juanito_banana",
        facebook: undefined,
    },
    aprovedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de introduccion a la produccion de vgs",
                "Curso de Unity 2020"
            ]
        }
    ]
}

const vicente = {
    name: "vicente",
    username: "vicentc0de",
    points: 100,
    socialMedia: {
        twitter: "vicentc0de",
        instagram: "vicenc0de",
        facebook: undefined,
    },
    aprovedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de introduccion a la produccion de vgs",
                "Curso de Unity 2020"
            ]
        }
    ]
}

*/

class learningPaths{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}

const web = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [{
        name: "Curso Definitivo de HTML y CSS"
    }]
});

const vgs = new learningPaths({
    name: "Escuela de Videojuegos",
    courses: [{
        name: "Curso de introduccion a la produccion de vgs"
    }]
});
/* The constructor function is a function that is called when an object is created from a class */
class Student {
    /**
     * The constructor function is a function that is called when an object is created from a class.
     */
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

/* Creating a new object from the class Student. */
const lucy = new Student({
    name: "Lucy",
    username: "lucy_89",
    email: "lucijfdjklfd@gmail.com",
    instagram : "lucy_89",
    learningPaths: [
        web,
        vgs
    ]
});