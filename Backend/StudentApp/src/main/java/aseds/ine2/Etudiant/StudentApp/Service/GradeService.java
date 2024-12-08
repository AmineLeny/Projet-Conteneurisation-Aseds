package aseds.ine2.Etudiant.StudentApp.Service;

import aseds.ine2.Etudiant.StudentApp.Repository.GradeRepository;
import aseds.ine2.Etudiant.StudentApp.Repository.StudentRepository;
import aseds.ine2.Etudiant.StudentApp.gradeEntity.Grade;
import aseds.ine2.Etudiant.StudentApp.studentEntity.Student;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GradeService {

    private final GradeRepository gradeRepository;
    public final StudentRepository studentRepository;
    public GradeService(GradeRepository gradeRepository, StudentRepository studentRepository) {
        this.gradeRepository = gradeRepository;
        this.studentRepository = studentRepository;
    }

    public List<Grade> getGradesByStudent(Long studentId) {
        return gradeRepository.findGradesByStudentId(studentId);
    }

    public Grade addGrade(Long studentId, String courseName, double value) {
        Student student = studentRepository.findById(studentId).orElseThrow(()-> new RuntimeException("Student not found"));
        Grade grade = new Grade();
        grade.setStudent(student);
        grade.setCourseName(courseName);
        grade.setValue(value);
        return gradeRepository.save(grade);


    }
}
