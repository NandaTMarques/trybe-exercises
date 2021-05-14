db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.updateMany({}, { $set: { valorUnitario: NumberDecimal("0.00") } });

db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany({ tags: { $all: ["bovino"] } }, { $inc: { avaliacao: 5 } });

db.produtos.updateMany({ tags: { $all: ["ave"] } }, { $inc: { avaliacao: 3 } });

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { 
    ultimaModificacao: true,
    },
  },
);

db.produtos.updateMany(
  { nome: {
    $ne: ["McChicken"] } },
    { $addToSet: { ingredientes: "ketchup" },
  },
);