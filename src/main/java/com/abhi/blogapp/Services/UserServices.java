package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.Media;
import com.abhi.blogapp.Entities.Role;
import com.abhi.blogapp.Entities.User;
import com.abhi.blogapp.Entities.UserMedia;
import com.abhi.blogapp.Exceptions.ResourceNotFoundException;
import com.abhi.blogapp.PayLoads.UserDTO;
import com.abhi.blogapp.Repositories.MediaRepository;
import com.abhi.blogapp.Repositories.RoleRepository;
import com.abhi.blogapp.Repositories.UserImageRepository;
import com.abhi.blogapp.Repositories.UserRepository;
import com.abhi.blogapp.Utils.MediaUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    MediaRepository mediaRepository;

    @Autowired
    UserImageRepository userImageRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO AuthenticateUser(String email, String password){
        Integer id;
        if(userRepo.findByEmailAndPassword(email, password) != null){
            id = userRepo.findByEmailAndPassword(email, password).getId();
        } else {
            throw new ResourceNotFoundException("User", "User Email", email);
        }
        User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "Email", email));
        return convertToUserDTO(user);
    }

    public User createUser(String username, String email, String password, String about, MultipartFile image, Integer Roleid) throws IOException {
        User user = new User();
        user.setName(username);
        user.setEmail(email);
        user.setPassword(password);
        user.setImagename(image.getOriginalFilename());
        Role role = roleRepo.findById(Roleid).orElseThrow(()->new ResourceNotFoundException("Role", "Role Name", Roleid.toString()));
        Set<Role> roles = new HashSet<>(user.getRoles());
        user.setRoles(roles);
        user.setAbout(about);
        UserMedia userMedia= userImageRepository.save(UserMedia.builder()
                .fileName(image.getOriginalFilename())
                .fileType(image.getContentType())
                .fileData(MediaUtils.compressImage(image.getBytes())).build());
        user.setUserImage(userMedia);
        return userRepo.save(user);
    }

    public List<String> getRoleNamesByUserId(int userId) {
        Optional<User> userOptional = userRepo.findById(userId);
        if (userOptional.isPresent()) {
            Set<Role> roles = userOptional.get().getRoles();
            return roles.stream()
                    .map(Role::getRoleName)
                    .map(Enum::name)
                    .collect(Collectors.toList());
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
    }

    public UserDTO updateUser(UserDTO dto, Integer userId){
        User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "User ID", userId.toString()));
        user.setId(userId);
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setAbout(dto.getAbout());
        return convertToUserDTO(userRepo.save(user));
    }

    public List<UserDTO> getAllUsersWithRoles() {
        return userRepo.findAll().stream()
                .map(this::convertToUserDTO)
                .collect(Collectors.toList());
    }

    private UserDTO convertToUserDTO(User user) {
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        List<String> roleNames = getRoleNamesByUserId(user.getId());
        userDTO.setRoles(roleNames);
        return userDTO;
    }

    public UserDTO getUserById(Integer userId){
        User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("user", "id", userId.toString()));
        return convertToUserDTO(user);
    }

    public Integer getUserIdByName(String username) {
        User user = userRepo.findByName(username).orElseThrow(()-> new ResourceNotFoundException("User", "Username", username));
        return user.getId();
    }

    public List<UserDTO> getAllUsers(){
        List<User> users = userRepo.findAll();
        return users.stream().map(this::convertToUserDTO).collect(Collectors.toList());
    }


    public void deleteUser(String name) {

    }

//    public void deleteUser(Integer Id){
//        Optional<User> optionalUser = userRepo.findById(Id);
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//            roleRepo.deleteBy
//            // First, remove roles from the user
//            Set<Role> roles = user.getRoles();
//            roles.forEach(role -> {
//                Optional<Role> optionalRole = roleRepo.findRoleByRoleId(role.getRoleId());
//                optionalRole.ifPresent(roleRepo::delete);
//            });
//
//            user.setRoles(new HashSet<>());
//
//            // Now, delete the user
//            userRepo.delete(user);
//        }
}