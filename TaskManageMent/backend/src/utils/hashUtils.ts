const bcrypt = require('bcrypt');

// Set the salt rounds (higher rounds = better security, but slower performance)
const SALT_ROUNDS = 10;

/**
 * Hashes a plain text password.
 * @param {string} password - The plain text password to hash.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
export const hashPassword = async (password : string) => {
  if (!password) {
    throw new Error('Password cannot be empty');
  }
  return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Compares a plain text password with a hashed password.
 * @param {string} password - The plain text password.
 * @param {string} hash - The hashed password to compare with.
 * @returns {Promise<boolean>} - A promise that resolves to true if passwords match, false otherwise.
 */
export const comparePassword = async (password : string, hash: string) => {
  if (!password || !hash) {
    throw new Error('Password and hash are required for comparison');
  }
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
