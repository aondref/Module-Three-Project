package com.example.server.model;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Data //The data annotation from lombok is pretty cool. It handles all the getter / setter mess of code. Very DRY.
@Table(name="users") //Name of the table in the database
public class User {

    @Id
    private Long id;
    private String name;
    private String email;
}
