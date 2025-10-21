package packages.react_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import packages.react_backend.DTOmodels.Purchase;
import packages.react_backend.DAOmodels.PurchaseEntity;
import packages.react_backend.repositories.PurchaseRepo;
import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepo purchaseRepo;

    public void saveAll(List<Purchase> purchases) {
    List<PurchaseEntity> entities = purchases.stream()
            .map(PurchaseEntity::new) 
            .toList();

    purchaseRepo.saveAll(entities);
}

}