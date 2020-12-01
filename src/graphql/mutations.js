/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimeAllowance = /* GraphQL */ `
  mutation CreateTimeAllowance(
    $input: CreateTimeAllowanceInput!
    $condition: ModelTimeAllowanceConditionInput
  ) {
    createTimeAllowance(input: $input, condition: $condition) {
      id
      date
      allowance
      note
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeAllowance = /* GraphQL */ `
  mutation UpdateTimeAllowance(
    $input: UpdateTimeAllowanceInput!
    $condition: ModelTimeAllowanceConditionInput
  ) {
    updateTimeAllowance(input: $input, condition: $condition) {
      id
      date
      allowance
      note
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeAllowance = /* GraphQL */ `
  mutation DeleteTimeAllowance(
    $input: DeleteTimeAllowanceInput!
    $condition: ModelTimeAllowanceConditionInput
  ) {
    deleteTimeAllowance(input: $input, condition: $condition) {
      id
      date
      allowance
      note
      createdAt
      updatedAt
    }
  }
`;
