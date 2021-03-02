import React from 'react';
import useClientsList from "../ClientsList/queries"
import qgl from "graphql-tag"

type Fn<T> = ({}) => Array<T>;

interface Props {
  editRow: Fn<Array<any>>
  clients:
      Array<{
        id: string,
        firstName: string,
        lastName: string,
        phone: number,
        avatarUrl: string
      }>
}
/*
const getClient = qgl`
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
const addClient = qgl`
mutation addClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String,$avatarUrl: String) {
    addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {
        firstName
        lastName
        phone
        avatarUrl
    }
}
`;
*/

const editSVG = <svg height="20px" viewBox="0 0 512 512.00004" width="20px"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="255.5664972986" x2="255.5664972986"
                  y1=".000039" y2="512.0003355972">
    <stop offset="0" stopColor="#2af598"/>
    <stop offset="1" stopColor="#009efd"/>
  </linearGradient>
  <path
      d="m511.132812 79.929688c-.019531-21.390626-8.367187-41.488282-23.507812-56.59375-31.226562-31.15625-81.992188-31.113282-113.183594.117187l-322.207031 323.503906c-10.480469 10.472657-18.480469 23.4375-23.136719 37.496094l-.300781.914063-28.796875 126.632812 126.984375-28.429688.945313-.3125c14.0625-4.65625 27.035156-12.648437 37.542968-23.152343l322.25-323.542969c15.113282-15.132812 23.429688-35.246094 23.410156-56.632812zm-440.714843 375.34375-13.464844-13.472657 9.722656-42.765625 46.613281 46.640625zm389.003906-346.9375-312.847656 314.105468-56.652344-56.6875 214.300781-215.160156 32.632813 32.632812 28.261719-28.261718-32.691407-32.691406 30.402344-30.519532 32.75 32.75 28.261719-28.261718-32.808594-32.808594 11.707031-11.753906c15.605469-15.625 41.023438-15.648438 56.65625-.050782 7.578125 7.5625 11.757813 17.625 11.769531 28.332032.007813 10.710937-4.152343 20.777343-11.742187 28.375zm-249.164063 363.261718h300.875v39.96875h-340.707031zm0 0"
      fill="url(#a)"/>
</svg>

const ClientsList: React.FC<Props> = (props) => {
    //const { status, data, isLoading, error } = useClientsList( "getClients", getClient );


  return (
      <>
        <table className="table w-full">
          <thead className="table-row-group">
          <tr className="table-row">
            <th className="table-cell p-5 border-b-1 text-left">First Name</th>
            <th className="table-cell p-5 border-b-1 text-left">Last Name</th>
            <th className="table-cell p-5 border-b-1 text-left">Phone</th>
            <th className="table-cell p-5 border-b-1 text-left">AvatarUrl</th>
          </tr>
          </thead>
          <tbody>
          {props.clients ? (
             props.clients.map((client) => (
                  <tr key={client.id}>
                    <td className="table-cell p-5 border-b border-green-400">{client.firstName}</td>
                    <td className="table-cell p-5 border-b border-green-400">{client.lastName}</td>
                    <td className="table-cell p-5 border-b border-green-400">{client.phone}</td>
                    <td className="table-cell p-5 border-b border-green-400">{client.avatarUrl?.substr(0, 15)}</td>
                    <td className="table-cell border-b border-green-400">
                      <button
                          className="outline-none focus:outline-none p-1"
                          onClick={() => {
                        props.editRow(client)
                      }}>
                        {editSVG}</button>
                    </td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan={3}>None users</td>
              </tr>
          )}
          </tbody>
        </table>
      </>
  )
}
export default ClientsList;

