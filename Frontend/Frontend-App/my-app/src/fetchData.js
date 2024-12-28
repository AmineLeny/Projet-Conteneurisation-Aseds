import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchStudents = async () => {
    try {

        const response = await axios.get(`${BACKEND_URL}/students`, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error('Error fetching students', error);
    }
};

export const fetchGrades = async (studentId) => {
    try {
        const responseGrade = await axios.get(`${BACKEND_URL}/grades/${studentId}`, { timeout: 10000 });
        return responseGrade.data;
    } catch (error) {
        console.error('Error fetching grade for this student', error);
    }
};
