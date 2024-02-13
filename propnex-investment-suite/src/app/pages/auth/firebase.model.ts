export class fbUser {
  constructor(
    public email: string,
    public favourites: fbPostal[],
    public generalRec: fbPostal[],
    public name: string,
    public password: string,
    public personalRec: string[],
    public userType: string,
    public isVerified: boolean
  ) {}
}

export class fbPostal {
  constructor(
    public name: string,
    public address: string,
    public postal: string,
    public landArea: Float32Array,
    public grossFloorArea: Float32Array,
    public tenure: string,
    public numRooms: number,
    public numStorey: Int16Array,
    public askingPrice: number,
    public priceRoom: Float32Array,
    public GFA: string,
    public roomRate: Float32Array,
    public netOperatingProfit: Float32Array,
    public approvedUsage: string,
    public region: string,
    public locationMRT: string,
    public locationSch: string,
    public district: string,
    public imageUrl?: string,
    public units?: fbUnit[]
  ) {}
}
  export class fbUnit {
    constructor(
      public bedrooms: string,
      public floorplan: string,
      public size: string,
      public unitNumber: string,
      public UnitFacing: string,
    ) {}
  }

  export class fbRec {
    constructor(
      public place: string,
      public rec1: string,
      public rec2: string,
      public rec3: string,
    ) {}
  }