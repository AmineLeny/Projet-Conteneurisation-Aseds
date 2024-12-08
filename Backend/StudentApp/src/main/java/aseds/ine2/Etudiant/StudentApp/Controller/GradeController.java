package aseds.ine2.Etudiant.StudentApp.Controller;

import aseds.ine2.Etudiant.StudentApp.Service.GradeService;
import aseds.ine2.Etudiant.StudentApp.gradeEntity.Grade;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
public class GradeController {
    private final GradeService gradeService;
    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    @PostMapping
    public ResponseEntity<Grade> addGrade(@RequestParam Long studentId, @RequestParam String courseName, @RequestParam double value) {
        return ResponseEntity.ok(gradeService.addGrade(studentId,courseName,value));
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<List<Grade>> getGradesByStudent(@PathVariable Long studentId){
        return ResponseEntity.ok(gradeService.getGradesByStudent(studentId));
    }








}
