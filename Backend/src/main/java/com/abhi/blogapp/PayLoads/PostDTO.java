package com.abhi.blogapp.PayLoads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    private String postTitle;
    private String postSubTitle;
    private String postContent;
    private String imageName;
    private Date addedDate;
    private CategoryDTO category;
    private UserDTO user;
}
