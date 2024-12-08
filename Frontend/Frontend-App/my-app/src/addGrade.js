import axios from 'axios';

export const addGrade = async (student, matiere, note) => {
  // Basic validation to ensure that matiere and note are provided
  if (!matiere.trim() || !note) {
    throw new Error("Both course name (matiere) and grade (note) must be provided.");
  }

  try {
    // Make the API request to add a grade
    const addGradeResponse = await axios.post(
      `http://localhost:8080/grades?studentId=${student.id}&courseName=${matiere}&value=${note}`
    );

    // Check if the response status is successful (200-299)
    if (addGradeResponse.status >= 200 && addGradeResponse.status < 300) {
      console.log("Grade added successfully:", addGradeResponse.data);
      return addGradeResponse.data; // Returning the response data after a successful request
    } else {
      throw new Error("Failed to add grade. Unexpected response status.");
    }
  } catch (error) {
    // Log and propagate the error
    console.error("Error adding grade:", error);
    throw error; // Re-throw the error for the calling function to handle
  }
};
