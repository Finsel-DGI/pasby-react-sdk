import { plainToInstance, Expose } from "class-transformer";

/**
 * A national uses pasby to communicate with services with just a click of a button.
 * 
 * This class governs the sever return object 
 */
export class PasbyNationalObject {
  /* eslint new-cap: ["error", { "capIsNew": false }]*/
  @Expose() user = ""; // uses the format org_{id}
  @Expose() address: Address | undefined;
  @Expose() bio: Bio | undefined;
  @Expose() contact: Contact | undefined;
  @Expose() financial: Financial | undefined;
  @Expose() naming: Naming | undefined;
  @Expose() nationality: Nationality | undefined;

  /**
   * Change record to this class
   *
   * @param {Record<string, unknown>} obj  json object from db
   * @return {PasbyNationalObject} this class
   */
  public static fromJson(obj: Record<string, unknown>)
    : PasbyNationalObject {
    const result: PasbyNationalObject = plainToInstance(PasbyNationalObject, obj,
      { excludeExtraneousValues: true });
    return result;
  }

  /**
   * This class handler to json
   * @return {string} text
   */
  public toJsonString(): string {
    return JSON.stringify(this);
  }

  /**
   * Check if of this class type
   * @param {Object} error the object
   * @returns {boolean} returns true or false
   */
  public static isOfInstance(error: Object): boolean {
    return error instanceof PasbyNationalObject;
  }


  /**
  * get document in map format
  * @return { Record<string, unknown>} returns doc map .
  */
  public toMap()
    : Record<string, unknown> {
    const res = JSON.parse(this.toJsonString());
    return res;
  }
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
