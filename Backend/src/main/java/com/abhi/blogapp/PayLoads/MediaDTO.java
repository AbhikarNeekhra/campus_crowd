package com.abhi.blogapp.PayLoads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MediaDTO {
    private Long id;
    private String fileName;
    private String fileType;
}
