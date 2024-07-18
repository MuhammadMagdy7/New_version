//app/dashboard/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Tablecom from "@/components/Tablecom";
import Link from "next/link";
import Spinner from "@/components/Layout/Spinner";

interface Item {
  _id: string;
  name: string;
  images: string[];
}

const useFetchData = <T extends Item>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setData(
        response.data.services ||
          response.data.products ||
          response.data.employees ||
          []
      );
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, setData, loading, error, refetch: fetchData };
};
export default function Admin() {
  const { data: session } = useSession();
  const {
    data: services,
    setData: setServices,
    loading: servicesLoading,
    error: servicesError,
    refetch: refetchServices,
  } = useFetchData<Item>("/api/services");
  const {
    data: products,
    setData: setProducts,
    loading: productsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useFetchData<Item>("/api/products");
  const {
    data: employees,
    setData: setEmployees,
    loading: employeesLoading,
    error: employeesError,
    refetch: refetchEmployees,
  } = useFetchData<Item>("/api/employees");

  const handleDelete = useCallback(async (id: string, type: string) => {
    try {
      const response = await axios.delete(`/api/${type}/${id}`);
      if (response.data.success) {
        alert("Data deleted successfully");
        // Refresh data here by refetching
        switch (type) {
          case 'products':
            refetchProducts();
            break;
          case 'services':
            refetchServices();
            break;
          case 'employees':
            refetchEmployees();
            break;
          default:
            break;
        }
      } else {
        throw new Error(response.data.error || "Unknown error occurred");
      }
    } catch (error: any) {
      alert(`Error deleting data: ${error.message}`);
    }
  }, [refetchProducts, refetchServices, refetchEmployees]);

  if (!session) {
    return <p>Access Denied</p>;
  }

  if (servicesLoading || productsLoading || employeesLoading) {
    return <Spinner />;
  }

  if (servicesError || productsError || employeesError) {
    return <p>Error: {servicesError || productsError || employeesError}</p>;
  }

  return (
    <div className="min-h-[calc(100vh-12px)] container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <Tablecom
          services={services}
          button={
            <Link className="btn" href="/addService">
              Add Service
            </Link>
          }
          onDelete={(id: string) => handleDelete(id, "services")}
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <Tablecom
          products={products}
          button={
            <Link className="btn" href="/addProduct">
              Add portfolio
            </Link>
          }
          onDelete={(id: string) => handleDelete(id, "products")}
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Customers</h2>
        <Tablecom
          employees={employees}
          button={
            <Link className="btn" href="/addEmployee">
              Add customer
            </Link>
          }
          onDelete={(id: string) => handleDelete(id, "employees")}
        />
      </div>
    </div>
  );
}
