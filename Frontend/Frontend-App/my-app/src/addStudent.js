import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
export const addStudent = async (studentName) => {
   try {
    const response =  await axios.post(`${BACKEND_URL}/students?name=${studentName}`);
    console.log('Student added successfully:', response.data);
    return response;    
}catch(error){
        console.error("Erro adding student",error);
    }
} 