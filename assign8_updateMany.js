db.sm.updateMany(
  { "products.productCode": "PR001" },
  { $set: { "products.$[item].unitPrice": 220.5 } },
  { arrayFilters: [{ "item.productCode": "PR001" }] },
);
