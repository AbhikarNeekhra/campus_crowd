package com.abhi.blogapp.PayLoads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List; // Import List

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    private int id;
    private String name;
    private String email;
    private String password;
    private String imagename;
    private String about;
    private List<String> roles;
}
