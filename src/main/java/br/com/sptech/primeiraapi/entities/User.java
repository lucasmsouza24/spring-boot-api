package br.com.sptech.primeiraapi.entities;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class User {
    // attributes
    private String email;
    private String password;

    // constructor
    public User(String email, String password) {
        this.email = email;
        this.password = this.getHashMd5(password);
    }

    // methods

    /**
     * @param email {@type String}   
     * @param password {@type String}  
     * @return {@type boolean}  
     * - {@value true} if the user is authenticated correctly  
     * and {@value false} if it isn't
     */
    public boolean auth(String email, String password) {
        return this.email.equals(email) && this.password.equals(password);
    }
    public boolean auth(User user) {
        return auth(user.getEmail(), user.getPassword());
    }

    private String getHashMd5(String value) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        BigInteger hash = new BigInteger(1, md.digest(value.getBytes()));
        return hash.toString(16);
    }
    
    @Override
    public String toString() {
        return "User [email=" + email + ", password=" + password + "]";
    }

    // getters and setters
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
