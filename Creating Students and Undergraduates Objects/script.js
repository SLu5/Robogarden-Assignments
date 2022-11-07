var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    Student.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    return Student;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, gender, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    return UnderGraduates;
}(Student));
var undergradStudent = new UnderGraduates('Phil Philippe III', 12, 'Male', 'Egyptian', 12, 12);
undergradStudent.getNationality();
//let undergradStudent: Iundergrad = {
//    name: 'Phil Philippe III', age: 12, gender: 'Male', nationality: 'Egyptian', batch: 12, GPA: 12}
