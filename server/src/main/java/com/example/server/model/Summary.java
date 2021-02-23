package com.example.server.model;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Data
@Table(name="summary")
public class Summary {

    @Id
    private Long id;
    private String summaries;
    private Double amount;
}
