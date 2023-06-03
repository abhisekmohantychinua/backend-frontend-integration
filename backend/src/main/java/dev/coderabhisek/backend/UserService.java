package dev.coderabhisek.backend;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    public User addUser(User user) {
        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUser(String username) {
        var user=repository
                .findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User name not found!"));
        System.out.println(username);
        System.out.println(user);
        return user;
    }

    public String authorize(User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            user = repository.findByUsername(user.getUsername()).orElseThrow(() -> new UsernameNotFoundException(""));
            String token = jwtUtil.generateToken(user);
            tokenRepository.addToken(token);
            System.out.println(token);
            return token;

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            throw new UsernameNotFoundException("NO user present!");
        }
    }

}
