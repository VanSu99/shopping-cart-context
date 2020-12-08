import React, { createContext, useState } from "react";
import Loading from "../components/Loading";

// tạo React Context để lưu state của Loading Component
export const LoadingContext = createContext(false);
//export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }) {
  // LoadingProvider là Cpt cao nhất sẽ wrap các Cpt con bên trong và con có thể call data, function có trong Context
  const [loading, setLoading] = useState(false);

  const value = {
    loading: loading,
    showLoading: () => setLoading(true),
    hideLoading: () => setLoading(false),
  };

  return (
    <LoadingContext.Provider value={value}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}

// Tại Component nào muốn sử dụng Loading -> import useLoading() -> const { showLoading, hideLoading } = useLoading();
