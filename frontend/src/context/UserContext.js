import { createContext, useContext, useMemo, useState } from "react";
import { getClientList, createClient } from "../services/api";
import { useEffectOnce, useAsyncFn } from "react-use";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [{ loading: clientDataLoading }, fetchClientData] = useAsyncFn(
    async (sortCriteria) => {
      const query = {}
      if(sortCriteria && sortCriteria.length > 0){
        sortCriteria.forEach((sort) => {
          query[sort.field] = sort.direction;
        });
      }

      console.log({ query });
      const response = await getClientList(query);
      setClientData(response.data.data);
      return response.data.data;
    },
    []
  );

  const [{ loading: createClientLoading }, handleCreateClient] = useAsyncFn(
    async (data) => {
      console.log({ data });
      const response = await createClient(data);
      fetchClientData();
      return response.data;
    },
    [fetchClientData]
  );

  useEffectOnce(() => {
    fetchClientData();
  });

  const value = useMemo(() => {
    return {
      clientData,
      clientDataLoading,
      createClientLoading,
      handleCreateClient,
      isModalOpen,
      setIsModalOpen,
      fetchClientData,
    };
  }, [
    clientData,
    clientDataLoading,
    createClientLoading,
    isModalOpen,
    handleCreateClient,
    fetchClientData,
  ]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
