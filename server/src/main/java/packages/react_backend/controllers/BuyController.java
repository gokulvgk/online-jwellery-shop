package packages.react_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import packages.react_backend.DTOmodels.Purchase;
import packages.react_backend.services.PurchaseService;



@RestController
@RequestMapping("/buy")
@CrossOrigin(origins = "http://localhost:5173")
public class BuyController {
    @Autowired
    private PurchaseService purchaseService;
    @PostMapping
    public String buy(@RequestBody List<Purchase> purchases) {
            purchaseService.saveAll(purchases);
            return "Purchase successful!";
}

    
    
}
