/**
 * A national uses pasby to communicate with services with just a click of a button.
 *
 * This class governs the sever return object
 */
export declare class PasbyNationalObject {
    user: string;
    claims: {
        contact?: Contact;
        address?: Address;
        bio?: Bio;
        financial?: Financial;
        naming?: Naming;
        nationality: Nationality;
    } | undefined;
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PasbyNationalObject} this class
     */
    static fromJson(obj: Record<string, unknown>): PasbyNationalObject;
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString(): string;
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error: Object): boolean;
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap(): Record<string, unknown>;
}
interface Address {
    country: string;
    city: string;
    countryCode: string;
    formatted: string;
    latitude?: string;
    postCode: string;
    place: string;
    longitude?: string;
}
interface Bio {
    birthdate: string;
    gender: string;
    birthplace: string;
    dateOfDeath?: number;
    birthnumber: number;
    maritalStatus: string;
    age: number;
}
interface Contact {
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    email: string;
}
interface Financial {
    bvn: string;
    bvnLevel: string;
    bvnIAT: string;
    bvnBank: string;
}
interface Naming {
    titleSuffix?: string;
    given: string;
    middle: string;
    preferredUsername: string;
    nickname: string;
    name: string;
    titlePrefix?: string;
    family: string;
    title: string;
}
interface Nationality {
    pep: boolean;
    nationalities: string[];
    residence: string;
    primary: string;
}
export {};
