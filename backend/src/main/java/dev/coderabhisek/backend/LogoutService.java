package dev.coderabhisek.backend;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {
    private final TokenRepository tokenRepository;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println(authHeader + "not starts with bearer");
            return;
        }

        String jwt = authHeader.substring(7);
        if (tokenRepository.findToken(jwt).isPresent()) {
            tokenRepository.removeToken(jwt);
            System.out.println("removed from repo " + jwt);
        }
        SecurityContextHolder.clearContext();

    }

}
