import { useEffect, useState } from "react"
import { fetchGrades } from "./fetchData"
import PropTypes from "prop-types";
import { addGrade } from "./addGrade";

const GradeTable = ({student, OnBack }) => {

    const [studentGradeList, setStudentGradeList] = useState([]);
const [matiere, setMatiere] = useState("");
const [note, setNote] = useState("");
const [colors, setcolors] = useState({});
const goBack = ()=>{
    OnBack((prev)=>!prev);
}
   


    useEffect(()=>{
        const fetchStudentGrades = async () => {
            try {
              const studentGradesResponse = await fetchGrades(student.id);
              setStudentGradeList(studentGradesResponse);
              const colors = {};
        for (const grade of studentGradeList) {
          colors[grade.id] = grade.value > 10 ? "green" : "red";
      }
      setcolors(colors);
            } catch (error) {
              console.error("Error fetching student grades:", error);
            }
          };
          fetchStudentGrades();


    },[OnBack])

const handleAddGrade = async (matiere,note)=>{
    if (!matiere.trim() || !note) {
        alert("Please enter both course name and grade.");
        return;
      }
      
      try {
        const resultGrade = await addGrade(student, matiere, note);

      if (resultGrade) {
        
        // Clear the note input
        console.log('Greade added:', resultGrade);
        
        
        const updatedGrades = await fetchGrades(student.id);
        setStudentGradeList(updatedGrades);
        setMatiere("");  // Clear the matiere input
        setNote("");   //
      } 
        // Ensure note is a number before passing it
    
      } catch (error) {
        console.log(error);
      }


}


  return (
    <div>
        <button className="buttonBack" onClick={()=>goBack()}>
        Go back
      </button>
      <table className="table-etudiants" >

        <thead>
            <tr>
                <th>
                Matiere
                </th>
                <th>
                Notes
                </th>
            </tr>
        </thead>
        <tbody>
            
                {studentGradeList.map((grade,key)=>(
                    <tr  key={key}>
                        <td  style={{backgroundColor :colors[grade.id]}} > {grade.courseName}</td>
                        <td>{grade.value}</td>
                        
                    </tr>
                ))}
            
        </tbody>
      </table>

      <div className="center-inside">
        <button onClick={async ()=>await handleAddGrade(matiere,note)} className="button center-button">Ajouter une note</button>
        <input
          className="input"
          placeholder="Matiere"
          type="text"
          value={matiere}
          onChange={(e) => setMatiere(e.target.value)}
        />
        <input
          className="input"
          placeholder="Note"
          type="number"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  )
}

  

GradeTable.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired, // Assuming `name` is always a string
        creationDate: PropTypes.string.isRequired, // ISO date string
        grades: PropTypes.arrayOf(
            PropTypes.shape({
                courseName: PropTypes.string, // Optional, depending on grades structure
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Grade value
            })
        ), // Array of grades
    }).isRequired,
    OnBack: PropTypes.func.isRequired,
};


export default GradeTable
