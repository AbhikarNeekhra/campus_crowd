package com.abhi.blogapp.Services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class FileServices {

    public String uploadPostImage(String path, MultipartFile file) throws IOException {
//        file name
        String fileName = file.getOriginalFilename();
//        full path
        String filePath = path + File.separator+fileName;
//        create folder if not created
        File filee = new File(path);
        if(!filee.exists()){
            filee.mkdir();
        }

//        file copy
        Files.copy(file.getInputStream(), Paths.get(filePath));
        return fileName;
    }



}
