import { createContext, useContext, useMemo, useState } from "react";
import { getClientList, createClient } from "../services/api";
import { useEffectOnce, useAsyncFn } from "react-use";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [{ loading: clientDataLoading }, fetchClientData] = useAsyncFn(
    async (sortCriteria) => {
      try {
        const query = {};
        if (sortCriteria && sortCriteria.length > 0) {
          sortCriteria.forEach((sort) => {
            query[sort.field] = sort.direction;
          });
        }

        const response = await getClientList(query);
        setClientData(response.data.data);
        toast.success("Client List Fetched Successfully");
        return response.data.data;
      } catch (error) {
        toast.error(error.response.data.error);
      }
    },
    []
  );

  const [{ loading: createClientLoading }, handleCreateClient] = useAsyncFn(
    async (data) => {
      try {
        const response = await createClient(data);
        toast.success("Client Created Successfully");
        await fetchClientData();
        return response.data;
      } catch (error) {
        toast.error(error.response.data.error);
      }
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
