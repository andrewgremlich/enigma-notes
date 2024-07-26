// const { iv, ciphertext } = await encryptData("test", derivedKey);
// console.log(await decryptData(ciphertext, derivedKey, iv));

export async function getSalt() {
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  return {
    saltBuffer: salt,
    saltHex: Array.from(new Uint8Array(salt)),
  };
}

export async function getKeyFromPassword(password: BufferSource) {
  const { saltBuffer } = await getSalt();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    password,
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"]
  );

  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function hashData(data: BufferSource) {
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return { hashHex, hashArray, hashBuffer };
}

export async function encryptData(plaintext: string, key: CryptoKey) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const cipherTextBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    new TextEncoder().encode(plaintext)
  );
  return {
    iv: Buffer.from(iv).toString("base64"),
    cipherText: Buffer.from(cipherTextBuffer).toString("base64"),
  };
}

export async function decryptData(
  ciphertext: string,
  iv: string,
  key: CryptoKey
) {
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: Buffer.from(iv, "base64"),
    },
    key,
    Buffer.from(ciphertext, "base64")
  );

  return new TextDecoder().decode(decrypted);
}
