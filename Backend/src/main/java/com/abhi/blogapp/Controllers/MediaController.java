package com.abhi.blogapp.Controllers;

import com.abhi.blogapp.Entities.Media;
import com.abhi.blogapp.PayLoads.MediaDTO;
import com.abhi.blogapp.Services.MediaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
@CrossOrigin(origins = "http://localhost:5173")
public class MediaController {

    @Autowired
    MediaServices mediaServices;

    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        MediaDTO dto = mediaServices.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @GetMapping("filename/{name}")
    public ResponseEntity<?> sendImageByName(@PathVariable("name") String name){
        return new ResponseEntity<>(mediaServices.getImage(name), HttpStatus.OK);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<?> sendImage(@PathVariable("Id") Long id){
        return new ResponseEntity<>(mediaServices.getImageById(id), HttpStatus.OK);
    }


}
