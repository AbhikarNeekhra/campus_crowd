package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.Media;
import com.abhi.blogapp.PayLoads.MediaDTO;
import com.abhi.blogapp.Repositories.MediaRepository;
import com.abhi.blogapp.Utils.MediaUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class MediaServices {

    @Autowired
    private MediaRepository mediaRepo;

    public MediaDTO uploadImage(MultipartFile file) throws IOException {
        Media media = mediaRepo.save(Media.builder()
                .fileName(file.getOriginalFilename())
                .fileType(file.getContentType())
                .fileData(MediaUtils.compressImage(file.getBytes())).build());
        return mediaToDTO(media);
    }

    private MediaDTO mediaToDTO(Media media){
        MediaDTO dto = new MediaDTO();
        dto.setFileName(media.getFileName());
        dto.setFileType(media.getFileType());
        dto.setId(media.getId());
        return dto;
    }

    @Transactional
    public byte[] getImage(String name) {
        Optional<Media> dbImage = mediaRepo.findByfileName(name);
        byte[] image = MediaUtils.decompressImage(dbImage.get().getFileData());
        return image;
    }

    @Transactional
    public byte[] getImageById(Long id) {
        Optional<Media> dbImage = mediaRepo.findById(id);
        byte[] image = MediaUtils.decompressImage(dbImage.get().getFileData());
        return image;
    }


}
