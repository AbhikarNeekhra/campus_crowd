package com.abhi.blogapp.Controllers;

import com.abhi.blogapp.Entities.UserMedia;
import com.abhi.blogapp.Repositories.UserImageRepository;
import com.abhi.blogapp.Services.UserImageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/userImage")
public class UserMediaController {

    @Autowired
    private UserImageServices userImageServices;

    @GetMapping("/{Id}")
    public ResponseEntity<?> getImageById(@PathVariable("Id") Integer id){
        return new ResponseEntity<>(userImageServices.getUserImageById(id), HttpStatus.OK);
    }

}
