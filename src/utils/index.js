export function getError(field, errors, touch) {
  const isTouched = touch[field];
  if (isTouched) {
    return errors[field];
  }
}
