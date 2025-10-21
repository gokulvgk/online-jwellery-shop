package packages.react_backend.DAOmodels;

import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import packages.react_backend.DTOmodels.UserCredentials;

@Entity
@Data
@NoArgsConstructor
public class UsersEntity 
{
    @Id
    private String username;
    private String password;

    public UsersEntity(UserCredentials credentials) 
    {
        this.username = credentials.getUsername();
        this.password = credentials.getPassword();
    }
    
}
