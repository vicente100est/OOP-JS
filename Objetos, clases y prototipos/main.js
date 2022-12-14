/* Creating a new object called natalia. */
const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

/**
 * The function Student() is a constructor function that creates a new object with the properties name,
 * age, cursosAprobados, and aprobarCurso.
 * @param name - The name of the student
 * @param age - Number
 * @param cursosAprobados - an array of strings
 */
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.aprobarCurso("Curso de JavaScript Moderno");

/* Adding a new method to the Student prototype. */
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const Vicente = new Student(
    "Vicente",
    23,
    [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "LinQ"
    ]
);

// Class
/* The class Students has a constructor that takes three parameters, name, age, and cursosAprobados,
and assigns them to the properties name, age, and cursosAprobados. The class also has a method
aprobarCurso() that takes a parameter nuevoCurso and adds it to the array cursosAprobados. */
class Students {
    constructor({
        name,
        age,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
/**
 * The function aprobarCurso() takes a parameter nuevoCurso and adds it to the array cursosAprobados.
 * @param nuevoCurso - The new course to be added to the list of approved courses.
 */
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const lucy = new Students("Lucy", 17, ["Curso de Responsive Design", "Curso de JavaScript Moderno"]);
const michelle = new Students("Michelle", 18);