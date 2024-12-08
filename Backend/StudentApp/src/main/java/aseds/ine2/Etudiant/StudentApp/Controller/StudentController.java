package aseds.ine2.Etudiant.StudentApp.Controller;

import aseds.ine2.Etudiant.StudentApp.Service.StudentService;
import aseds.ine2.Etudiant.StudentApp.studentEntity.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    private final StudentService studentService;
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestParam String name){
        return ResponseEntity.ok(studentService.createStudent(name));

    }

    @GetMapping
    public ResponseEntity<List<Student>> getStudents(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }



}
