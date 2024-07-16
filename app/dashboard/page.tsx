'use client';

import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Tablecom from "@/components/Tablecom";
import Link from "next/link";

interface Service {
  name: string;
  images: string[];
}

interface Product {
  name: string;
  images: string[];
}

interface Employee {
  name: string;
  images: string[];
}

// Custom hook لجلب البيانات
const useFetchData = <T,>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // تأكد من أن البيانات تُعطى في response.data مباشرة
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook لإدارة النموذج
const useForm = <T,>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setForm(initialState);
  }, [initialState]);

  return { form, handleInputChange, resetForm };
};

interface FormComponentProps<T> {
  onSubmit: (data: T) => Promise<void>;
  formFields: T;
  submitButtonText: string;
}

// مكون فرعي للنموذج
const FormComponent = <T,>({ onSubmit, formFields, submitButtonText }: FormComponentProps<T>) => {
  const { form, handleInputChange, resetForm } = useForm<T>(formFields);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(form);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      {Object.entries(formFields).map(([name]) => (
        <input
          key={name}
          name={name}
          type={name === 'date' ? 'date' : (name === 'image' || name === 'media') ? 'file' : 'text'}
          placeholder={`Enter ${name}`}
          onChange={handleInputChange}
          required
          className='border border-black p-1'
          multiple={name === 'media'}
        />
      ))}
      <button type="submit" className="btn">{submitButtonText}</button>
    </form>
  );
};

export default function Admin() {
  const { data: session } = useSession();
  const { data: services, loading: servicesLoading, error: servicesError } = useFetchData<Service>('/api/services');
  const { data: products, loading: productsLoading, error: productsError } = useFetchData<Product>('/api/products');
  const { data: employees, loading: employeesLoading, error: employeesError } = useFetchData<Employee>('/api/employees');

  const handleSubmit = useCallback(async (type: string, data: any) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (key === 'media' && Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          formData.append('media', value[i]);
        }
      } else {
        formData.append(key, value);
      }
    }

    try {
      const response = await axios.post(`/api/${type}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        alert('Data added successfully');
      } else {
        throw new Error(response.data.error || 'Unknown error occurred');
      }
    } catch (error) {
      alert(`Error adding data: ${error.message}`);
    }
  }, []);

  const handleDelete = useCallback(async (id: string, type: string) => {
    try {
      const response = await axios.delete(`/api/${type}/${id}`);
      if (response.data.success) {
        alert('Data deleted successfully');
        // Refresh data here
      } else {
        throw new Error(response.data.error || 'Unknown error occurred');
      }
    } catch (error) {
      alert(`Error deleting data: ${error.message}`);
    }
  }, []);

  if (!session) {
    return <p>Access Denied</p>;
  }

  if (servicesLoading || productsLoading || employeesLoading) {
    return <p>Loading...</p>;
  }

  if (servicesError || productsError || employeesError) {
    return <p>Error: {servicesError || productsError || employeesError}</p>;
  }

  return (
    <div className="min-h-[calc(100vh-12px)] container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8">لوحة التحكم</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">الخدمات</h2>
        <Tablecom items={services} button={<Link className="btn" href={"/addService"}>Add Service</Link>} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">المشاريع</h2>
        <Tablecom items={products} button={<Link className="btn" href={"/addProduct"}>Add Project</Link>} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">الموظفين</h2>
        <Tablecom items={employees} button={<Link className="btn" href={"/addEmployee"}>Add Employee</Link>} />
      </div>
    </div>
  );
}
