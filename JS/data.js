
export class studentInfo{
    constructor(ID, Fname, Lname, Mname, program, Grade, Semester, PaymentStatus){
        this.ID = ID;
        this.Fname = Fname;
        this.Lname = Lname;
        this.Mname = Mname;
        this.program = program;
        this.Grade = Grade;
        this.Semester = Semester;
        this.PaymentStatus = PaymentStatus;
    }
}

export class courseInfo{
    constructor(){
        this.courseName = ["math","English","Amharic","Biology","Physics","Chemistry","Aptitude","History","Geography","Computer","Sport","Art","SpokenEnglish","Civics", "Economics","Science","Music"];
        this.courseCode = ["MATH101","ENG101","AMH101","BIO101","PHY101","CHEM101","APT101","HIST101","GEO101","COMP101","SPORT101","ART101","SPEAK101","CIVICS101","ECON101","SCI101","MUS101"];
        this.courseGrade = [1,2,3,4,5,6,7,8,9,10,11,12];
    }
}



export const coursesByGrade = {
  "1": [
    { name: "Math", code: "MATH101" },
    { name: "English", code: "ENG101" },
    { name: "Amharic", code: "AMH101" },
    { name: "Computer", code: "COMP101" },
    { name: "Sport", code: "SPORT101" }
  ],
  "5": [
    { name: "Math", code: "MATH105" },
    { name: "English", code: "ENG105" },
    { name: "Biology", code: "BIO105" },
    { name: "Chemistry", code: "CHEM105" },
    { name: "History", code: "HIST105" }
  ],
  "9": [
    { name: "Math", code: "MATH109" },
    { name: "English", code: "ENG109" },
    { name: "Physics", code: "PHY109" },
    { name: "Civics", code: "CIVICS109" },
    { name: "Economics", code: "ECON109" }
  ],
  "11": [
    { name: "Math", code: "MATH111" },
    { name: "English", code: "ENG111" },
    { name: "Physics", code: "PHY111" },
    { name: "Chemistry", code: "CHEM111" },
    { name: "Biology", code: "BIO111" },
    { name: "Geography", code: "GEO111" },
    { name: "Art", code: "ART111" }
  ]
};


export function displayCourses(student){
    const courses = new courseInfo();
    if(student.Grade === "1" || student.Grade === "2" || student.Grade === "3" || student.Grade === "4"){
        console.log("Grade 1 courses:");
        console.log(coursesByGrade["1"]);
    }else if(student.Grade === "5" || student.Grade === "6" ||student.Grade === "7" ||student.Grade === "8"){
        console.log("Grade 5 courses:");
        console.log(coursesByGrade["5"]);
    }else if(student.Grade === "9" || student.Grade === "10"){
        console.log("Grade 9 courses:");
        console.log(coursesByGrade["9"]);
    }else if(student.Grade === "11" || student.Grade === "12"){
        console.log("Grade 11 courses:");
        console.log(coursesByGrade["11"]);
    }
}
        





