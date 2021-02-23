package com.example.server.model;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="expense")
public class Expense {

    @Id
    private Long id;
    private String expenses;
    private Double amount;
}
