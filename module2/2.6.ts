
const addCourseToStudent = <T extends { id: number; name: string; age: number }>(student: T) => {
    const course: string = " Next Level Developer on load  ";
    return {
        ...student,
        course
    }

}


console.log(addCourseToStudent({ id: 88, name: "sifat", age: 55 }))
console.log(addCourseToStudent({ emni: "sonti monti" }))