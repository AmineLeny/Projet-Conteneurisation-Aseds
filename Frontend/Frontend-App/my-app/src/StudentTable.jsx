import { useEffect, useState } from "react";
import { fetchGrades, fetchStudents } from './fetchData';
import { addStudent } from "./addStudent";
import GradeTable from "./GradeTable";

const StudentTable = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [Check, setCheck] = useState(false);
  const [gradeItem, setGradeItem] = useState();
const [StudentColors, setStudentColors] = useState({});
  
  // Fetch students
  useEffect(() => {
    const getStudents = async () => {
      const studentsData = await fetchStudents();
      setStudents(studentsData);
      const colors = {};
      for (const student of studentsData) {
        const grades = await fetchGrades(student.id);
        const average = await calculateAverage(grades);
        colors[student.id] = average > 10 ? "green" : "red";
      }
      setStudentColors(colors);
    }
    
    getStudents();
  }, [students]);

  // Calculate average grade
  const calculateAverage = async (grades) => {
    const total = grades.reduce((sum, grade) => sum + parseFloat(grade.value), 0);
    return total / grades.length;
  };

  // Get row color based on average grade
  

  // Handle grade click (toggle details view)
  const handleGradeClick = (item) => { 
    setCheck((prev) => !prev);
    setGradeItem(item);
  };

  // Handle adding a student
  const handleClick = async () => {
    if (studentName.trim() === "") {
      alert("Please enter a student's name");
      return;
    }

    const result = await addStudent(studentName);

    if (result) {
      console.log('Student added:', result);
      setStudentName(""); // Clear input field after adding student
      // Optionally re-fetch students to show updated list
      const updatedStudents = await fetchStudents();
      setStudents(updatedStudents); // Update the student list
    } else {
      console.error("Error adding student");
    }
  };

  // Render GradeTable if Check is true
  if (Check) {
    return <GradeTable student={gradeItem} OnBack={() => setCheck(false)} />;
  }

  return (
    <>
      <div>
        <table className="table-etudiants">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date de création</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => {
              const rowColor = StudentColors[item.id];
              return (
                <tr key={index}>
                  <td style={{ backgroundColor: rowColor }} onClick={() => handleGradeClick(item)}>
                    {item.name}
                  </td>
                  <td>{item.creationDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="center-inside">
        <button onClick={handleClick} className="button center-button">
          Ajouter Étudiant
        </button>
        <input
          className="input"
          placeholder="Nom complet"
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
    </>
  );
};

export default StudentTable;
