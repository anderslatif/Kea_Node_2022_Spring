import bcrypt from "bcrypt";
const saltRounds = 12;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$12$nG8.kVEUV0tWI2Sfk3WUdu4.3RXpiTFyqjJ7PpeJYvBNBGbfhzlea";


const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
console.log(isSame);


const resultingHashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(hashedPassword);




