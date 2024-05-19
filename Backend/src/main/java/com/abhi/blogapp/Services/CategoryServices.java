package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.Category;
import com.abhi.blogapp.Exceptions.ResourceNotFoundException;
import com.abhi.blogapp.PayLoads.CategoryDTO;
import com.abhi.blogapp.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServices {
    @Autowired
    CategoryRepository catRepo;

    public CategoryDTO createCategory(CategoryDTO dto){
        Category cat = dtoCategory(dto);
        Category added = catRepo.save(cat);
        return CatToDto(added);
    }

    public CategoryDTO GetCategoryById(Integer id){
        Category cat = catRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Category", "Id", id.toString()));
        return CatToDto(cat);
    }

    public void DeleteCategory(Integer id){
        Category cat = catRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Category", "Id", id.toString()));
        catRepo.delete(cat);
    }

    public CategoryDTO UpdateCategory(CategoryDTO dto, Integer id){
        Category cat = catRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category", "Id", id.toString()));
        cat.setCategoryId(id);
        cat.setCategoryTitle(dto.getCategoryTitle());
        cat.setCategoryDescription(dto.getCategoryDescription());
        catRepo.save(cat);
        return CatToDto(cat);
    }

    public List<CategoryDTO> GetAllCategory(){
        List<Category> cat = catRepo.findAll();
        List<CategoryDTO> dto = cat.stream().map(this::CatToDto).toList();
        return dto;
    }

    public CategoryDTO getCategoryByName(String name){
        Category category = catRepo.findByCategoryTitle(name).orElseThrow(()-> new ResourceNotFoundException("Category", "title", name));
        return CatToDto(category);
    }


    private Category dtoCategory(CategoryDTO dto){
        Category cat = new Category();
        cat.setCategoryId(dto.getCategoryId());
        cat.setCategoryTitle(dto.getCategoryTitle());
        cat.setCategoryDescription(dto.getCategoryDescription());
        return cat;
    }

    private CategoryDTO CatToDto(Category cat){
        CategoryDTO dto = new CategoryDTO();
        dto.setCategoryId(cat.getCategoryId());
        dto.setCategoryTitle(cat.getCategoryTitle());
        dto.setCategoryDescription(cat.getCategoryDescription());
        return dto;
    }

}
