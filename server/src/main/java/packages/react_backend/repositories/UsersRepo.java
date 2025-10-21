package packages.react_backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import packages.react_backend.DAOmodels.UsersEntity;


@Repository
public interface UsersRepo extends JpaRepository<UsersEntity, String>
{
    boolean existsByUsername(String username);
}
