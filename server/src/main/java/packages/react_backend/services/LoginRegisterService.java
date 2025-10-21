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
    private UsersRepo Repo;
    public boolean validateUserCredentials(UserCredentials credentials) 
    {
        return Repo.existsByUsername(credentials.getUsername());
    }

    public boolean registerUser(UserCredentials credentials) 
    {
        Repo.save(new UsersEntity(credentials));
        return true;
    }

}
