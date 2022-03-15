//Assignment STEP 2-4
class Student{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    
    constructor(name:string, age:number, nationality:string){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gender = "female";
    }

    getNationality(){
        console.log(this.nationality);
    }
}

//Assignment STEP 5,6 and 8,9
class UnderGraduate extends Student implements Iundergrad{
    batch: number;
    gpa: number;
    constructor(name, age, nationality, batch, gpa){
        super(name, age, nationality);
        this.batch = batch;
        this.gpa = gpa;
    }
}

//Assignment STEP 7
interface Iundergrad{
    batch: number;
    gpa: number;
}

//Assignment STEP 9 - create instance and log to console.
let uGrad = new UnderGraduate("Billy Bob", 22, "Canada", 2, 4.0);
uGrad.getNationality();