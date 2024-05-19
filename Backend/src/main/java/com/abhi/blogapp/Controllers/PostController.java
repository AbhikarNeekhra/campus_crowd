package com.abhi.blogapp.Controllers;

import com.abhi.blogapp.PayLoads.PostDTO;
import com.abhi.blogapp.Services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    PostServices postServices;

    @PostMapping("/user/{userId}/category/{categoryId}")
    public boolean createPosts(
            @RequestParam("title") String title,
            @RequestParam("subTitle") String subTitle,
            @RequestParam("content") String content,
            @PathVariable("userId") Integer userId,
            @PathVariable("categoryId") Integer categoryId,
            @RequestParam(value = "image", required = true) MultipartFile file) throws IOException {
        //        return new ResponseEntity<>(createPost, HttpStatus.CREATED);
        return postServices.CreatePost(title, subTitle, content, userId, categoryId, file);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPosts(){
        return new ResponseEntity<>(postServices.getAllPosts(), HttpStatus.OK);
    }


    @RequestMapping("/getPost/{postId}")
    public ResponseEntity<PostDTO> getPostById(@PathVariable("postId") Integer id) {
        PostDTO dto = postServices.getPostById(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
}