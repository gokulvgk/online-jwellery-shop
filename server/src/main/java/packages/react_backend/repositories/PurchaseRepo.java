package packages.react_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import packages.react_backend.DAOmodels.PurchaseEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepo extends JpaRepository<PurchaseEntity, Integer> {
    
}
