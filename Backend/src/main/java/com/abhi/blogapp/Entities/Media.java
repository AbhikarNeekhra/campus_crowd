package com.abhi.blogapp.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="filename", length = 256)
    private String fileName;

    @Column(name="filetype", length = 100)
    private String fileType;

    @Lob
    @Column(name="file_data")
    private byte[] fileData;

    @OneToOne(mappedBy = "postImage", cascade = CascadeType.ALL)
    private Post post;


}
