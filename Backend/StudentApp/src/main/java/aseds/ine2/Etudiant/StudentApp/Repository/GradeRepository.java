package aseds.ine2.Etudiant.StudentApp.Repository;

import aseds.ine2.Etudiant.StudentApp.gradeEntity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GradeRepository extends JpaRepository<Grade, Long> {

    @Query("SELECT g FROM Grade g WHERE g.student.id = :studentId")
    List<Grade> findGradesByStudentId(@Param("studentId") Long studentId);

}
