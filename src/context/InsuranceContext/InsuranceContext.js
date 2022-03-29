import { createContext } from "react";

const today = new Date().toISOString().slice(0, 10);
let date = new Date()
date = date.setDate(date.getDate() + 1);
const tomorrow = new Date(date).toISOString().slice(0, 10);

export const InsuranceContext = createContext({
  insuranceCategory: "short-term",
  setInsuranceCategory: () => {},
  insurancePackage: "basic",
  insuranceAddition: [],
  startDate: today,
  endDate: tomorrow,
  persons: 1,
  packagePrice: 1.2
});
