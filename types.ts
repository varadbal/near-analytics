
export type AccountId = string;
export type Timestamp = u64;
export type Data = u16;

/* Rational number representation 
 * as there are no floats on the blockchain, these numbers are stored as integers and a factor to be divided by for the represented number
 */
@nearBindgen
export class Rational {
    constructor(
        public num : Data,
        public den : Data
    ) {}
}

@nearBindgen
export class Decimal {
    constructor(
        public num : u8,
        public den : u8
    ) {}
}