db.sm.insertOne({
  storeID: "SM001",
    branchName: "SM Hyper Cainta",
    location: "Cainta Rizal",
    products: [
      {
        productCode: "PR001",
        description: "NESCAFE GOLD BLEND SOLUBLE COFFEE 50G",
        unitPrice: 212.5,
        stock: 50,
      },
      {
        productCode: "PR002",
        description: "ALPINE EVAPORATED FULL CREAM MILK 370ML",
        unitPrice: 66.8,
        stock: 100,
      },
      {
        productCode: "PR003",
        description: "REBISCO WAFERTIME CHOCOLATE 13GX20S",
        unitPrice: 44.45,
        stock: 30,
      },
});

db.sm.insertMany([
  {
    storeID: "SM002",
    branchName: "SM Supermarket - Marikina",
    location: "Marikina City",
    products: [
      {
        productCode: "PR001",
        description: "NESCAFE GOLD BLEND SOLUBLE COFFEE 50G",
        unitPrice: 212.5,
        stock: 100,
      },
      {
        productCode: "PR002",
        description: "ALPINE EVAPORATED FULL CREAM MILK 370ML",
        unitPrice: 66.8,
        stock: 75,
      },
      {
        productCode: "PR004",
        description: "FIBISCO CHOCO MALLOWS 2PCS",
        unitPrice: 14.65,
        stock: 20,
      },
    ],
  },
  {
    storeID: "SM003",
    branchName: "SM Save More - Anonas",
    location: "Quezon City",
    products: [
      {
        productCode: "PR002",
        description: "ALPINE EVAPORATED FULL CREAM MILK 370ML",
        unitPrice: 66.8,
        stock: 15,
      },
      {
        productCode: "PR003",
        description: "REBISCO WAFERTIME CHOCOLATE 13GX20S",
        unitPrice: 44.45,
        stock: 25,
      },
    ],
  },
]);
