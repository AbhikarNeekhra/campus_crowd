//package com.abhi.blogapp.Controllers;
//
//import com.abhi.blogapp.PayLoads.JwtAuthRequest;
//import com.abhi.blogapp.PayLoads.JwtAuthResponse;
//import com.abhi.blogapp.Security.JwtTokenHelper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/v1/log")
//public class AuthController {
//    @Autowired
//    private JwtTokenHelper jwtTokenHelper;
//    @Autowired
//    private UserDetailsService userDetailsService;
//    @Autowired
//    private final AuthenticationManager authenticationManager;
//
//    public AuthController(AuthenticationManager authenticationManager) {
//        this.authenticationManager = authenticationManager;
//    }
//
//
//    @PostMapping("/login")
//    public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request){
//        this.authenticate(request.getUsername(), request.getPassword());
//        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
//        String token = this.jwtTokenHelper.generateToken(userDetails);
//        JwtAuthResponse response = new JwtAuthResponse();
//        response.setToken(token);
//        return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
//    }
//
//    private void authenticate(String username, String password) {
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
//        authenticationManager.authenticate(authenticationToken);
//    }
//
//}
