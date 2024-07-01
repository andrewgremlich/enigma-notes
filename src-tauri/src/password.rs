// hash password with argon2
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use hex;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Password {
    pub hash: String,
    salt: String,
}

impl Password {
    pub fn new(password: &[u8]) -> Self {
        let argon2 = Argon2::default();
        let salt = SaltString::generate(&mut OsRng);

        // make key derivation here? https://docs.rs/argon2/0.5.3/argon2/#key-derivation

        if let Ok(hash) = argon2.hash_password(password, &salt) {
            return Self {
                hash: hash.to_string(),
                salt: hex::encode(salt.to_string()),
            };
        } else {
            panic!("Failed to hash password");
        }
    }

    pub fn verify(&self, password: &[u8]) -> bool {
        let parsed_hash = PasswordHash::new(&self.hash).unwrap();

        Argon2::default()
            .verify_password(password, &parsed_hash)
            .is_ok()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_password() {
        let password = "password";
        let password_bytes = password.as_bytes();

        let hashed_password = Password::new(password_bytes);

        assert!(hashed_password.verify(password_bytes));
    }
}
