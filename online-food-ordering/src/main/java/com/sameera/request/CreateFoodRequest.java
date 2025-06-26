package com.sameera.request;

import com.sameera.model.Category;
import com.sameera.model.IngrediantsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {

    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarian;
    private boolean seasional;
    private List<IngrediantsItem> ingredients;
}
