import React from "react";

const assets = [
  {
    name: "Bitcoin",
    underControl: true,
    currentPrice: 65000,
    purchasedPrice: 45000,
    quantity: 0.5,
  },
  {
    name: "Ethereum",
    underControl: false,
    currentPrice: 3500,
    purchasedPrice: 2000,
    quantity: 2,
  },
  {
    name: "Apple Stock",
    underControl: true,
    currentPrice: 180,
    purchasedPrice: 150,
    quantity: 10,
  },
];

const AssetCard = ({ asset }) => {
  const gainLoss =
    (asset.currentPrice - asset.purchasedPrice) * asset.quantity;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition-all">
      <h2 className="text-xl font-semibold mb-2">{asset.name}</h2>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Under Control:</span>{" "}
        {asset.underControl ? "Yes" : "No"}
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Current Price:</span> $
        {asset.currentPrice}
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Purchased Price:</span> $
        {asset.purchasedPrice}
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Quantity:</span> {asset.quantity}
      </div>
      <div
        className={`text-sm font-medium mt-2 ${
          gainLoss >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        Gain/Loss: ${gainLoss.toFixed(2)}
      </div>

      {/* ✅ Payment component */}
      <Payment />
    </div>
  );
};

export default function AssetDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Asset Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset, index) => (
          <AssetCard asset={asset} key={index} />
        ))}
      </div>
    </div>
  );
}
