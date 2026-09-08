export function calculateEmi(
  principal,
  duration,
  interestRate
) {
  if (interestRate === 0) {
    return principal / duration;
  }

  const monthlyRate = interestRate / 100 / 12;

  return (
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, duration)) /
    (Math.pow(1 + monthlyRate, duration) - 1)
  );
}

export function formatPrice(price) {
  return `₹${Math.round(price).toLocaleString("en-IN")}`;
}