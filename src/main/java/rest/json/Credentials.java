package rest.json;

import lombok.Data;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Data
public class Credentials {
    @NotNull(message = "Username must not be null or empty!")
    @NotEmpty(message = "Username must not be null or empty!")
    @Size(min = 4, message = "Username is too short!")
    @Size(max = 15, message = "Username is too long!")
    private String username;
    @NotNull(message = "Password must not be null or empty!")
    @NotEmpty(message = "Password must not be null or empty!")
    @Size(min = 4, message = "Password is too short!")
    private String password;
}
