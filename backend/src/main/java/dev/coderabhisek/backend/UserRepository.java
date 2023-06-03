package dev.coderabhisek.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Repository
public class UserRepository {
    private List<User> users = List
            .of(User
                    .builder()
                    .username("abhisek")
                    .password("pass")
                    .about("I am the developer.")
                    .build());

    public List<User> findAll() {
        return users;
    }

    public Optional<User> findByUsername(String username) {
        return users
                .stream()
                .filter(user -> user.getUsername().equals(username))
                .findFirst();

    }

    public User save(User user) {
        users.add(user);
        return user;
    }
}
