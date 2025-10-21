package packages.react_backend.DTOmodels;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class UserCredentials 
{
    private String username;
    private String password;

}