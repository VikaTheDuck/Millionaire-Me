// InfoPage.js
import React from 'react';

const InfoPage = () => {
  return (
    <div className="pt-10 container mx-auto mt-8 p-8 bg-green-100">
      <h1 className="text-5xl font-semibold mb-6 text-green-800">Personal Finance Q&A 💸</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. What is a budget, and why is it important?</h2>
        <p className="text-gray-700">
          A budget is a financial plan that outlines your income, expenses, and savings goals. It helps you manage your money effectively and avoid overspending.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. How can I start saving for the future?</h2>
        <p className="text-gray-700">
          Start by setting clear savings goals, creating a budget, and consistently putting aside a portion of your income into a savings account or investment.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. What are the benefits of investing?</h2>
        <p className="text-gray-700">
          Investing can help grow your wealth over time through the power of compounding. It provides an opportunity for long-term financial growth and can help you achieve your financial goals.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. How do I create an emergency fund?</h2>
        <p className="text-gray-700">
          An emergency fund is crucial for unexpected expenses. Start by saving three to six months' worth of living expenses in a separate account that is easily accessible.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Should I pay off debt or save first?</h2>
        <p className="text-gray-700">
          It's often advisable to pay off high-interest debt first, then focus on building savings. This strategy can save you money on interest payments.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. What's the difference between a Roth IRA and a Traditional IRA?</h2>
        <p className="text-gray-700">
          Both are retirement accounts, but Roth IRA contributions are made after-tax, and withdrawals are tax-free in retirement. Traditional IRA contributions are tax-deductible, but withdrawals are taxed.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. How can I improve my credit score?</h2>
        <p className="text-gray-700">
          Pay bills on time, reduce credit card balances, and avoid opening too many new credit accounts. Regularly check your credit report for errors.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Is it better to rent or buy a home?</h2>
        <p className="text-gray-700">
          The decision depends on your financial situation and lifestyle. Consider factors like housing market conditions, your long-term plans, and monthly budget.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">9. How can I save on everyday expenses?</h2>
        <p className="text-gray-700">
          Look for discounts, use coupons, buy generic brands, and review your subscription services. Small changes can add up to significant savings over time.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">10. What's the importance of a will and estate planning?</h2>
        <p className="text-gray-700">
          A will outlines your wishes for the distribution of your assets. Estate planning ensures a smooth transfer of assets to heirs and can minimize tax implications.
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
