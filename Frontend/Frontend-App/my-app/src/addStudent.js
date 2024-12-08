import axios from 'axios';


export const addStudent = async (studentName) => {
   try {
    const response =  await axios.post(`http://localhost:8080/students?name=${studentName}`);
    console.log('Student added successfully:', response.data);
    return response;    
}catch(error){
        console.error("Erro adding student",error);
    }
} 