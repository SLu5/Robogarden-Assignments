class Student {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    getNationality(): void {
        console.log(this.nationality);
    }
}

class UnderGraduates extends Student implements Iundergrad{
    batch: number;
    GPA: number;
    constructor(name: string, age: number, nationality: string, batch: number, GPA: number) {
        super(name, age, nationality);
        this.batch = batch;
        this.GPA = GPA;
    }
}

interface Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
}

let undergradStudent = new UnderGraduates('Phil Philippe III', 12, 'Egyptian', 12, 12);

undergradStudent.getNationality();

//let undergradStudent: Iundergrad = {
//    name: 'Phil Philippe III', age: 12, gender: 'Male', nationality: 'Egyptian', batch: 12, GPA: 12}