import React from "react";

const DashboardLayout = ({
  children,
  zero_one,
  zero_two,
  three_plus,
  four_plus,
  five_plus,
  six_plus,
  seven_plus,
  two_one_two,
  no_goals,
  seven_plus_teams,
}: {
  children: React.ReactNode;
  zero_two: React.ReactNode;
  zero_one: React.ReactNode;
  three_plus: React.ReactNode;
  four_plus: React.ReactNode;
  five_plus: React.ReactNode;
  six_plus: React.ReactNode;
  seven_plus: React.ReactNode;
  two_one_two: React.ReactNode;
  no_goals: React.ReactNode;
  seven_plus_teams: React.ReactNode;
}) => {
  return (
    <div className="mt-24">
      <div>{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-8">
        <div>{no_goals}</div>
        <div>{zero_one}</div>
        <div>{zero_two}</div>
        <div>{three_plus}</div>
        <div>{four_plus}</div>
        <div>{five_plus}</div>
        <div>{six_plus}</div>
        <div>{seven_plus}</div>
        <div>{two_one_two}</div>
        <div>{seven_plus_teams}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
