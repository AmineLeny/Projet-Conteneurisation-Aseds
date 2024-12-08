package aseds.ine2.Etudiant.StudentApp.studentEntity;
import aseds.ine2.Etudiant.StudentApp.gradeEntity.Grade;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="student_id")
    private Long id;
    private String name;
    private LocalDate creationDate = LocalDate.now();
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    private List<Grade> grades = new ArrayList<>();

public Student(){
}

    public Student(List<Grade> grades, LocalDate creationDate, String name) {
        this.grades = grades;
        this.creationDate = creationDate;
        this.name = name;
    }

    public List<Grade> getGrades() {
        return grades;
    }
    public void setGrades(List<Grade> grades) {
        this.grades = grades;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



}
