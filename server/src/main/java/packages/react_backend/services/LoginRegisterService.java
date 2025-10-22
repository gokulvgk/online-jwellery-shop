package packages.react_backend.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import packages.react_backend.DTOmodels.UserCredentials;
import packages.react_backend.repositories.UsersRepo;
import packages.react_backend.DAOmodels.UsersEntity;


@Service
public class LoginRegisterService 
{
    @Autowired
    private UsersRepo repo;
    public boolean validateUserCredentials(UserCredentials credentials) 
    {
        return repo.existsByUsername(credentials.getUsername());
    }

    public boolean registerUser(UserCredentials credentials)
    {
        credentials.setPassword(EncoderService.encode(credentials.getPassword()));
        repo.save(new UsersEntity(credentials));
        return true;
    }

    public boolean authenticateUser(UserCredentials credentials) 
    {
        UsersEntity user = repo.findByUsername(credentials.getUsername());
        if (user == null) return false;
        return EncoderService.matches(credentials.getPassword(), user.getPassword());
    }

}
