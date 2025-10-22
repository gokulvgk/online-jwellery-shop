package packages.react_backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import packages.react_backend.DTOmodels.Response;
import packages.react_backend.DTOmodels.UserCredentials;
import packages.react_backend.services.LoginRegisterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:5173")

@RequestMapping("/")
public class LoginRegisterController {

    @Autowired
    Response response;
    @Autowired
    LoginRegisterService loginRegisterService;

    @PostMapping("/login")
    public ResponseEntity<Response> login (@RequestBody UserCredentials credentials) 
    {

        if (loginRegisterService.authenticateUser(credentials) == false) 
        {
            response.setMessage("invalid credentials");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
        response.setMessage("login success");
        return new ResponseEntity<>(response, HttpStatus.FOUND);
    }

    @PostMapping("/register")
    public ResponseEntity<Response> register (@RequestBody UserCredentials credentials) 
    {
        if (loginRegisterService.validateUserCredentials(credentials) == true) 
        {
            response.setMessage("user already exists");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }
        else if (loginRegisterService.registerUser(credentials) == false) 
        {
            response.setMessage("registration failed");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else
        {
        response.setMessage("registration success");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
        }

    }   
    
}
