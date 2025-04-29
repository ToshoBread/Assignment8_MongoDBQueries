db.sm.updateOne(
  { storeID: "SM003" },
  {
    $push: {
      products: {
        productCode: "PR004",
        description: "FIBISCO CHOCO MALLOWS 2PCS",
        unitPrice: 14.65,
        stock: 10,
      },
    },
  },
);
