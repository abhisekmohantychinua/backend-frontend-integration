package dev.coderabhisek.backend;

import java.util.List;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Repository
public class UserRepository {
    private static List<User> users = List
            .of(User
                    .builder()
                    .username("abhisek")
                    .password("pass")
                    .about("I am the developer.")
                    .build());

    public List<User> findAll() {
        return users;
    }

    public User findByUsername(String username) {
        return users
                .stream()
                .filter(user -> user.getUsername().equals(username))
                .findFirst()
                .get();

    }

}
