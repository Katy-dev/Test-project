import { request, GraphQLClient } from "graphql-request";
import { useQuery} from "react-query";


const useClientsList = (key, query, variables, config={}) => {

  const endpoint = "https://test-task.expane.pro/api/graphql";
  const fetchData =  async () => await request (endpoint,query, variables)
  return useQuery( key,fetchData,config );
}

export default useClientsList;
