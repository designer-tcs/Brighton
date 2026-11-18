export const BEST_REGISTER_URL =
  "https://pgpay.icici.bank.in/pg/portal/pay/initiatePayOrder?merchantID=100000000543884";

/** Open through the end of 17 January 2027, Asia/Kolkata. */
export function bestRegistrationIsOpen(now = new Date()) {
  return now.getTime() < Date.parse("2027-01-18T00:00:00+05:30");
}
