package com.example.server.model;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="income")
public class Income {

    @Id
    private Long id;
    private String Income;
    private Double amount;
}
