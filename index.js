// For the range of integers 1 to 100, if the number is a multiple of 2 then output "Lease"
// if the number is a multiple of 5 then output "Plan"
// If the number is a multiple of both then output "LeasePlan"
// If the number is not a multiple of 2 or 5 then output the number
// The outputs should be separated by commas and there should be no trailing comma

const onlyMultipleOf2 = "Lease";
const onlyMultipleOf5 = "Plan";
const multipleOf2and5 = "LeasePlan";

getMultiple();

function getCorrectStringForMultiple(value) {
  const module2 = Math.round(value % 2);
  const module5 = Math.round(value % 5);
  if (module2 === 0 && module5 === 0) {
    return multipleOf2and5;
  } else if (module2 === 0) {
    return onlyMultipleOf2;
  } else if (module5 === 0) {
    return onlyMultipleOf5;
  } else {
    return `${value}`;
  }
}

function getMultiple() {
  let outputArr = [];
  for (let i = 1; i < 101; i++) {
    outputArr.push(getCorrectStringForMultiple(i));
  }

  return outputArr.join(",");
}
