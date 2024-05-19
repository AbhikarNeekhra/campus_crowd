package com.abhi.blogapp.Controllers;

import com.abhi.blogapp.PayLoads.ApiResponse;
import com.abhi.blogapp.PayLoads.CategoryDTO;
import com.abhi.blogapp.Services.CategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    CategoryServices categoryServices;

    @PostMapping("/add")
    public ResponseEntity<CategoryDTO> AddCategory(@RequestBody CategoryDTO dto){
        CategoryDTO resp = categoryServices.createCategory(dto);
        return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<CategoryDTO> FindCategory(@PathVariable("Id") Integer id){
        CategoryDTO dto = categoryServices.GetCategoryById(id);
        return new ResponseEntity<>(dto, HttpStatus.FOUND);
    }

    @GetMapping("/title/{name}")
    public ResponseEntity<CategoryDTO> FindCategoryByName(@PathVariable("name") String name){
        CategoryDTO dto = categoryServices.getCategoryByName(name);
        return new ResponseEntity<>(dto, HttpStatus.FOUND);
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<ApiResponse> DeleteCategory(@PathVariable("Id") Integer id){
        categoryServices.DeleteCategory(id);
        return new ResponseEntity<>(new ApiResponse("Category Deleted Successfully", true), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CategoryDTO>> findALl(){
        List<CategoryDTO> dto = categoryServices.GetAllCategory();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("/update/{Id}")
    public ResponseEntity<CategoryDTO> UpdateCategory(@RequestBody CategoryDTO dto ,@PathVariable("Id") Integer id){
        CategoryDTO resp = categoryServices.UpdateCategory(dto, id);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }



}
