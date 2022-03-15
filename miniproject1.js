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
//Assignment STEP 2-4
var Student = /** @class */ (function () {
    function Student(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gender = "female";
    }
    Student.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    return Student;
}());
//Assignment STEP 5,6 and 8,9
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(name, age, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    return UnderGraduate;
}(Student));
//Assignment STEP 9 - create instance and log to console.
var uGrad = new UnderGraduate("Billy Bob", 22, "Canada", 2, 4.0);
uGrad.getNationality();
