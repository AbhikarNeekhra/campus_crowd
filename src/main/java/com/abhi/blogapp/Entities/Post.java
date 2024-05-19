package com.abhi.blogapp.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer postId;

    @Column(name="post_title", length = 100, nullable = false)
    private String postTitle;

    @Column(name = "subtitle", length = 100, nullable = false)
    private String postSubTitle;

    @Column(name="post_content", length = 10000)
    private String postContent;

    @Column(name="image")
    private String imageName;

    @OneToOne
    @JoinColumn(name = "image_id")
    private Media postImage;

    private Date addedDate;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
