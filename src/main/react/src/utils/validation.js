export function validateTextInput(inputField) {
    const validityState = inputField.validity;

    let validityResult = false;

    if (validityState.valueMissing) {
        inputField.setCustomValidity('Enter Y value!');

    } else if (validityState.rangeUnderflow || validityState.rangeOverflow) {
        inputField.setCustomValidity('Enter a value in the range [-3 .. 5]');
    } else {
        validityResult = true;
        inputField.setCustomValidity('');
    }
    return validityResult;
}