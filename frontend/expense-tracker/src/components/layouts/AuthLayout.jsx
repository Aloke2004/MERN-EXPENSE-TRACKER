import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-10 pb-12">
        <h2 className="text-2xl font-bold text-black">Expense Tracker</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
