package me.pabloestrada.api.impl.authentication;

import com.google.inject.Inject;
import me.pabloestrada.api.AuthenticationService;
import me.pabloestrada.core.authentication.UserAuthenticator;

import java.util.Optional;

public final class AuthenticationServiceImpl
    extends AuthenticationService
{
    private UserAuthenticator userAuthenticator;

    @Inject
    public AuthenticationServiceImpl(final UserAuthenticator userAuthenticator) {
        this.userAuthenticator = userAuthenticator;
    }

    @Override
    public Optional<String> signJWT(final String username, final String password) {
        return userAuthenticator.signJWT(username, password);
    }

    @Override
    public String verifyJWT(final String token) {
        Optional<String> verified = userAuthenticator.verifyJWT(token);
        if (verified.isPresent()) {
            return verified.get();
        } else {
            return "INVALID";
        }
    }
}
