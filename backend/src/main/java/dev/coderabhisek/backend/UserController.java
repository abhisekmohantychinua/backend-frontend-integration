package dev.coderabhisek.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity
                .ok("HEllo world");
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        System.out.println("Called");
        return ResponseEntity
                .ok(userService.addUser(user));
    }

    @PostMapping("/token")
    public ResponseEntity<String> login(@RequestBody User user) {
        return ResponseEntity
                .ok(userService.authorize(user));
    }

    @GetMapping("/about/{username}")
    public ResponseEntity<String> about(@PathVariable String username) {
        var a = userService.getUser(username).getAbout();
        System.out.println(a);
        return ResponseEntity
                .ok(a);
    }

}
