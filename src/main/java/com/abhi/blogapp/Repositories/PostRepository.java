package com.abhi.blogapp.Repositories;

import com.abhi.blogapp.Entities.Category;
import com.abhi.blogapp.Entities.Post;
import com.abhi.blogapp.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);
}
