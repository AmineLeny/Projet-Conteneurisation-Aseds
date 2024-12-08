package aseds.ine2.Etudiant.StudentApp.Repository;

import aseds.ine2.Etudiant.StudentApp.studentEntity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
