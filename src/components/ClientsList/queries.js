import { request, gql } from "graphql-request";

const useClientsList = () => {

  const endpoint = "https://test-task.expane.pro/api/graphql"
  return useClientsList("Client", async () => {
    const {
      Client: {data},
    } = await request(
        endpoint,
        gql`
        Client {
          id
          lastName 
          firstName
          phone
          avatarUrl
           }
          }
        }
      `
    );
    return data;
  });
}

export default useClientsList;
