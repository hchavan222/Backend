import { randomBytes } from "crypto";

export function getRandomData(){
    const ID = randomBytes(20).toString('hex')
    return ID
}