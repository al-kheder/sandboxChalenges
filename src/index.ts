import { Dates } from "./types/Date.type";
import { Customer } from "./types/Customer.type";

const extractDates = (customer: Customer) => {
  const dates: Dates[] = [];
  if (!customer.ListOfPeriods) {
    return dates;
  }
  const periodStrings = customer.ListOfPeriods.split("|");
  for (const periodString of periodStrings) {
    const [startDateString, endDateString] = periodString.trim().split("-");
    if (!startDateString || !endDateString) {
      // throw new Error(`Invalid period string: ${periodString}`);
      return dates;
    }
    const startDate = startDateString.trim();
    console.log("here is start date" + startDate);
    const endDate = endDateString.trim();
    if (startDate.length !== 10 || endDate.length !== 10) {
      throw new Error("should return error message for invalid ListOfPeriods");
    }
    dates.push({ startDate, endDate });
  }
  return dates;
};
/*
function isValidDate(date: string): boolean {
  // Implement your date validation logic here
  // You might want to use a library like 'date-fns' or 'moment' for this
  // For simplicity, I'm assuming any non-empty string is a valid date
  return date.trim() !== "";
}
*/
export default extractDates;
