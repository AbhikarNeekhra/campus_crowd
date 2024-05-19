package com.abhi.blogapp.Repositories;

import com.abhi.blogapp.Entities.Media;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MediaRepository extends JpaRepository<Media, Long> {
    Optional<Media> findByfileName(String name);
}
