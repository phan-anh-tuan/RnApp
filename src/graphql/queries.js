/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeAllowance = /* GraphQL */ `
  query GetTimeAllowance($id: ID!) {
    getTimeAllowance(id: $id) {
      id
      date
      allowance
      note
      createdAt
      updatedAt
    }
  }
`;
export const listTimeAllowances = /* GraphQL */ `
  query ListTimeAllowances(
    $filter: ModelTimeAllowanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeAllowances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        allowance
        note
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
