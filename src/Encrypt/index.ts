import * as Crypto from 'expo-crypto';

export const encrypt = async (text: string) => {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    text
  );
  return digest;
};