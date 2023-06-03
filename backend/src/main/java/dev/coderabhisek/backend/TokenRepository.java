package dev.coderabhisek.backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Repository
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TokenRepository {
    private List<String> tokens = new ArrayList<>();

    public boolean addToken(String token) {
        return tokens.add(token);
    }

    public boolean removeToken(String token) {
        return tokens.remove(token);
    }

    public Optional<String> findToken(String token) {
        return tokens
                .stream()
                .filter(s -> s.equals(token))
                .findFirst();
    }

}
