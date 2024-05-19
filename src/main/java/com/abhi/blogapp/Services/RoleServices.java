package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.Role;
import com.abhi.blogapp.Repositories.RoleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServices {
    @Autowired
    private RoleRepository roleRepository;

}
