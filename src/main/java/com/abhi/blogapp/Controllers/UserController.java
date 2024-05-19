package com.abhi.blogapp.Controllers;

import com.abhi.blogapp.Entities.User;
import com.abhi.blogapp.PayLoads.ApiResponse;
import com.abhi.blogapp.PayLoads.LoginDto;
import com.abhi.blogapp.PayLoads.UserDTO;
import com.abhi.blogapp.Repositories.UserRepository;
import com.abhi.blogapp.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("/login")
    public ResponseEntity<UserDTO> authenticate(@RequestBody LoginDto ldto) {
        UserDTO existingUser = userServices.AuthenticateUser(ldto.getEmail(), ldto.getPassword());
        return new ResponseEntity<>(existingUser, HttpStatus.FOUND);
    }

    @PostMapping("/add")
    public ResponseEntity<User> AddUser(@RequestParam("username") String username,
                                           @RequestParam("email") String email,
                                           @RequestParam("password") String password,
                                           @RequestParam("about") String about,
                                           @RequestParam("image")MultipartFile image
                                           ) throws IOException {
        User user = userServices.createUser(username, email, password, about, image, 2);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}/roles")
    public List<String> getUserRoles(@PathVariable int userId) {
        return userServices.getRoleNamesByUserId(userId);
    }

    @PutMapping("update/{userId}")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO dto, @PathVariable("userId") int Id) {
        UserDTO user = userServices.updateUser(dto, Id);
        return ResponseEntity.ok(user);
    }

//    @DeleteMapping("/{Id}")
//    public ResponseEntity<ApiResponse> DeleteUser(@PathVariable("Id") int id) {
//        userServices.deleteUser(id);
//        return new ResponseEntity<>(new ApiResponse("User Deleted Successfully", true), HttpStatus.OK);
//    }

    @GetMapping("/getId/{username}")
    public Integer getUserIdByName(@PathVariable("username") String username){
        return userServices.getUserIdByName(username);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<UserDTO> findById(@PathVariable("userId") int id) {
        UserDTO user = userServices.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @RequestMapping("/getAllWithRoles")
    public ResponseEntity<List<UserDTO>> getAllUsersWithRoles() {
        List<UserDTO> usersWithRoles = userServices.getAllUsersWithRoles();
        return ResponseEntity.ok(usersWithRoles);
    }


    @RequestMapping("/getAll")
    public ResponseEntity<List<UserDTO>> GetAll() {
        return ResponseEntity.ok(userServices.getAllUsers());
    }

}