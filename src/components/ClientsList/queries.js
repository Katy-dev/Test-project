import {request, GraphQLClient} from "graphql-request";
import {useMutation, useQuery} from "react-query";
import qgl from "graphql-tag";


export const GET_CLIENT = qgl`
        query{
            getClients {
                id
                firstName
                lastName
                phone
                avatarUrl
            }
        }
 `;

export const ADD_CLIENT = qgl`
mutation addClient($firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {
    addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {
    id, firstName, lastName, phone, avatarUrl             
    }
}
`;

export const UPDATE_CLIENT = qgl`
  mutation updateClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String,$avatarUrl: String) {
    updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {
    id, firstName, lastName, phone, avatarUrl             
    }
}
`;

export const useClientsList = (key, query, config = {}) => {
    const endpoint = "https://test-task.expane.pro/api/graphql";
    const fetchData = async () => await request(endpoint, query)
    return useQuery(key, fetchData, config);
};

export const AddUpdateClient = (mutation, variables, config = {}) => {
    const endpoint = "https://test-task.expane.pro/api/graphql";
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: 'Bearer MY_TOKEN',
        }
    });

    const fetchData = async () => await graphQLClient.request(mutation, variables);
    return useMutation(fetchData, config);
};
