package aseds.ine2.Etudiant.StudentApp.Service;

import aseds.ine2.Etudiant.StudentApp.Repository.StudentRepository;
import aseds.ine2.Etudiant.StudentApp.studentEntity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public Student createStudent(String name){
        Student student = new Student();
        student.setName(name);
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() { return studentRepository.findAll(); }

}
