package com.abhi.blogapp.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "userImageName", length = 256)
    private String fileName;

    @Column(name = "userImageType", length = 100)
    private String fileType;

    @Lob
    @Column(name = "userImageData")
    private byte[] fileData;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

//User Media End
}