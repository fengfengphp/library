import CryptoJS from 'crypto-js'
const KEY = CryptoJS.enc.Utf8.parse('1234567887654321')
const IV = CryptoJS.enc.Utf8.parse('1234567887654321')
export function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null,
        str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    );
}

export function Encrypt(word) {
    let key = KEY
    let iv = IV
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    let hexStr = encrypted.ciphertext.toString().toUpperCase();
    return hexStr
}


