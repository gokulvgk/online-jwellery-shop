package packages.react_backend.DAOmodels;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import packages.react_backend.DTOmodels.Purchase;

@Data
@Entity
public class PurchaseEntity 
{   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String product;
    private Integer price;
    private Integer quantity; 
    private Integer totalPrice;
    public PurchaseEntity(Purchase purchase) {
        this.username = purchase.getUsername();
        this.product = purchase.getProduct();
        this.price = purchase.getPrice();
        this.quantity = purchase.getQuantity();
        this.totalPrice = this.price * this.quantity;
    }
}
