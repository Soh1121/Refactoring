class Person {
    constructor (name) {
        this._name = name;
        this._courses = [];
    }

    get name() {return this._name;}
    get courses() {return this._courses.slice();}
    set courses(aList) {this._courses = aList.slice();}

    addCourse(aCource) {
        this._courses.push(aCource);
    }

    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() {return this._name;}
    get isAdvanced() {return this._isAdvanced;}
}

numAdvancedCourses = aPerson.courses
    .filter(c => c.isAdvanced)
    .length
;

const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}
