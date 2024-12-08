import axios from 'axios';

export const fetchStudents = async () => {
    try{
        const response = await axios.get('http://localhost:8080/students');
        return response.data;


    } catch(error) { 
        console.error('Error fetching students', error);
    }

};

export const fetchGrades = async (studentId) =>  {
    try{
        const responseGrade = await axios.get(`http://localhost:8080/grades/${studentId}`);
        return responseGrade.data;
    }catch(error){
        console.error('Error fetching grade for this student}',error);
    }
}
