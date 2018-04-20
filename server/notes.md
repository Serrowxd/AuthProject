# Auth Review Notes

## Cookies

* automatically included on every request
* unique to each domain + device pair
* cannot be sent to a different domain
* sent in the cookie header
* has a body that can have extra identifying information
* max size around 4KB

## Tokens

* have to wire them up manually on both server and client
* sent inside the Authentication header
* **can be sent to any domain**. Important when your client and server are deployed to different servers/domains.
* larger site limit than cookies (research the size)

# Flow

* client sends credentials
* server verify credentials
* server sends back token
* client stores the token
* client sends token on every request
* server verifies that token is valid
* server provides access to resource

## JWTs

* on successful register or login, take user id + server secret to generate jwt.
* on request for protected resource, take jwt + server secret to decode token and optain user id.
* the tree methods we'll use are: `sign`, `verify` and `decode`.

## Our goals:

* register
* login
* logout
* reset password
* restrict access to a protected resource

## The players:

* Register / access a protected resource: The `jwt` strategy is used to register new users, extract token from header and decoding.
* Login: The local strategy to verify username and password on login and provide a token on success.
* For jwt signing and decoding the tokens we use `jsonwebtoken`.
