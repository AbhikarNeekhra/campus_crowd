package com.abhi.blogapp.Repositories;
import com.abhi.blogapp.Entities.User;
import com.abhi.blogapp.Entities.UserMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmailAndPassword(String email, String password);
    boolean existsByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String email);
    Optional<User> findByName(String name);
    Optional<User> deleteUsersByName(String name);
}
