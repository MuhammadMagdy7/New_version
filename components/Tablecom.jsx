
const Tablecom = ({ items, button }) => {
  return (
    <div className="grid grid-cols-7">
      <div className="overflow-x-auto col-span-6">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
        {items?.Services &&
          items?.Services.map((item, idx) => (
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
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
          ))}

{items?.products &&
          items?.products.map((item, idx) => (
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
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
          ))}

                  {items?.Employees &&
          items?.Employees.map((item, idx) => (
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
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
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
