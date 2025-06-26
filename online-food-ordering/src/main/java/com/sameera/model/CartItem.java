package com.sameera.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


//    Let’s look at the relationship between Cart and CartItem:
//    A Cart has a list of CartItems (List<CartItem> item)
//    A CartItem has a Cart reference
//    This is a bidirectional relationship — they reference each other.
    @JsonIgnore
    @ManyToOne
    private Cart cart;

    @ManyToOne
    private Food food;

    private int quantity;


    @ElementCollection
    private List<String> ingredients;

    private Long totalPrice;
}
