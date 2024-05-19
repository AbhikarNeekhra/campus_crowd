package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.UserMedia;
import com.abhi.blogapp.Exceptions.ResourceNotFoundException;
import com.abhi.blogapp.Repositories.UserImageRepository;
import com.abhi.blogapp.Utils.MediaUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImageServices {

    @Autowired
    private UserImageRepository userImageRepository;

    @Transactional
    public byte[] getUserImageById(Integer id){
        Optional<UserMedia> dbImage = userImageRepository.findByUser_Id(id);
        return MediaUtils.decompressImage(dbImage.get().getFileData());
    }


}
