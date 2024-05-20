const validMachineReadableRegex =/^[A-Za-z0-9](?!.*__)(?:[A-Za-z0-9_]*[A-Za-z0-9])?$/

const isValidMachineReadableColumnName = (input) => {
  // VAULT_PAGINATION_TOKEN_KEY is a special column name used in pagination
  // we can considered those as reserved column names and do not allow user to use them.
  if (input === '' || input === '_' || input.includes(' ')) {
    return false
  }

  return validMachineReadableRegex.test(input) && !input.startsWith('_') && !input.endsWith('_')
}

console.log(isValidMachineReadableColumnName("Total___Total"))