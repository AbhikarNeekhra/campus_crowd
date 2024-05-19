package com.abhi.blogapp.PayLoads;

import lombok.Data;

@Data
public class JwtAuthRequest {

    private String username;

    private String password;

}
