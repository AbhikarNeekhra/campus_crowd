package com.abhi.blogapp.Services;

import com.abhi.blogapp.Entities.Category;
import com.abhi.blogapp.Entities.Media;
import com.abhi.blogapp.Entities.Post;
import com.abhi.blogapp.Entities.User;
import com.abhi.blogapp.Exceptions.ResourceNotFoundException;
import com.abhi.blogapp.PayLoads.PostDTO;
import com.abhi.blogapp.Repositories.CategoryRepository;
import com.abhi.blogapp.Repositories.MediaRepository;
import com.abhi.blogapp.Repositories.PostRepository;
import com.abhi.blogapp.Repositories.UserRepository;
import com.abhi.blogapp.Utils.MediaUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServices {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private FileServices fileServices;

    public boolean CreatePost(String title, String subTitle, String Content, Integer userId, Integer categoryId, MultipartFile file) throws IOException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId.toString()));
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "Id", categoryId.toString()));
        PostDTO postDTO = new PostDTO();
        postDTO.setPostTitle(title);
        postDTO.setPostSubTitle(subTitle);
        postDTO.setImageName(file.getOriginalFilename());
        postDTO.setPostContent(Content);
        Post post = modelMapper.map(postDTO, Post.class);
        post.setAddedDate(new Date());
        post.setUser(user);
        post.setCategory(category);
        // Save the image and associate it with the post
        Media media = mediaRepository.save(Media.builder()
                .fileName(file.getOriginalFilename())
                .fileType(file.getContentType())
                .fileData(MediaUtils.compressImage(file.getBytes())).build());
        post.setPostImage(media);
        media.setPost(post);
        postRepository.save(post);
        mediaRepository.save(media);
        return true;
    }

    public Post updatePost(PostDTO postDTO, Integer postId) {
        Post existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "Id", postId.toString()));

        // Update the post details
        existingPost.setPostTitle(postDTO.getPostTitle());
        existingPost.setPostSubTitle(postDTO.getPostSubTitle());
        existingPost.setPostContent(postDTO.getPostContent());

        return postRepository.save(existingPost);
    }

    public void deletePost(Integer postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "Id", postId.toString()));

        // Delete the associated media
        Media media = post.getPostImage();
        if (media != null) {
            mediaRepository.delete(media);
        }

        postRepository.delete(post);
    }

    public List<PostDTO> getAllPosts() {
        List<Post> pos = postRepository.findAll();
        List<PostDTO> posd = pos.stream().map((post)->modelMapper.map(post, PostDTO.class)).toList();
        return posd;
    }

    public PostDTO getPostById(Integer postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "Id", postId.toString()));
        return modelMapper.map(post, PostDTO.class);
    }

    public List<Post> getPostByCategory(Integer categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "Id", categoryId.toString()));
        return postRepository.findByCategory(category);
    }

    public List<Post> getPostByUser(Integer userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId.toString()));
        return postRepository.findByUser(user);
    }

//    public List<Post> searchPost(String keyword) {
//        return postRepository.findByPostTitleContainingOrPostContentContaining(keyword, keyword);
//    }
}