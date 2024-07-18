// components/Tablecom
const Tablecom = ({ services, products, employees, button, onDelete }) => {
  return (
    <div className="grid grid-cols-7">
      <div className="overflow-x-auto col-span-6">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {services &&
              services.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 max-w-xs truncate">
                    {item.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item.image}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item._id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => onDelete(item._id, "services")} // أو 'services' أو 'employees' حسب نوع العنصر
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {products &&
              products.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 max-w-xs truncate">
                    {item.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item.image}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item._id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => onDelete(item._id, "products")} // أو 'services' أو 'employees' حسب نوع العنصر
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {employees &&
              employees.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 max-w-xs truncate">
                    {item.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item.image}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs truncate">
                    {item._id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => onDelete(item._id, "employees")} // أو 'services' أو 'employees' حسب نوع العنصر
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto">{button}</div>
    </div>
  );
};

export default Tablecom;
