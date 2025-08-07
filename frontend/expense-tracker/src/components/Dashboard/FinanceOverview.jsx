import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"]; // These colors are for Total Balance, Total Expenses, Total Income respectively, based on the `balanceData` array.

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome }, // Corrected name to "Total Income"
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance" // This label seems to be for the pie chart itself, perhaps indicating what the chart represents (e.g., the breakdown of the total balance, expenses, and income).
        totalAmount={`₹ ${totalBalance}`} // Displaying the total balance amount
        colors={COLORS}
        showTextAnchor // This prop is likely used by CustomPieChart to control text anchor visibility
      />
    </div>
  );
};

export default FinanceOverview;