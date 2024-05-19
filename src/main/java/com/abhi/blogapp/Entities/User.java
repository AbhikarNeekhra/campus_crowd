package com.abhi.blogapp.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="user_name", nullable=false, length = 100)
    private String name;

    @Column(name="user_email", nullable=false, length = 100)
    private String email;

    @Column(name="user_password", nullable=false, length = 100)
    private String password;

    @Column(name="image_name", nullable = false)
    private String imagename;

    @OneToOne
    @JoinColumn(name = "userImageId")
    private UserMedia userImage;

    @Column(name="user_about", nullable=false, length = 100)
    private String about;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "roleId"))
    private Set<Role> roles = new HashSet<>();

    public String getRoleNames() {
        return roles.stream()
                .map(Role::getRoleName)
                .map(RoleEnum::toString)
                .collect(Collectors.joining(", "));
    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        List<SimpleGrantedAuthority> authorities =  roles.stream().map((role) -> new SimpleGrantedAuthority(role.getRoleName().toString())).collect(Collectors.toList());
//        return authorities;
//    }
//
//
//    @Override
//    public String getUsername() {
//        return name;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
}