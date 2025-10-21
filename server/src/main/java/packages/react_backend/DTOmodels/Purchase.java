package packages.react_backend.DTOmodels;

import lombok.Data;

@Data
public class Purchase
{   
    private String product;
    private String username;
    private Integer price;
    private Integer quantity;

}
