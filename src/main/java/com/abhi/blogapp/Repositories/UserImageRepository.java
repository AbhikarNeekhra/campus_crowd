package com.abhi.blogapp.Repositories;

import com.abhi.blogapp.Entities.User;
import com.abhi.blogapp.Entities.UserMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserImageRepository extends JpaRepository<UserMedia, Integer> {
    Optional<UserMedia> findByUser_Id(int userId);
}
