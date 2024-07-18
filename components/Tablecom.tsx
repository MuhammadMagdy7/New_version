// components/Tablecom
import { Item } from "@/types";

interface TablecomProps {
  services?: Item[];
  products?: Item[];
  employees?: Item[];
  button: JSX.Element;
  onDelete: (id: string, type: string) => void; // تعديل النوع هنا
  type: string; // إضافة خاصية 'type'
}

const Tablecom: React.FC<TablecomProps> = ({ services, products, employees, button, onDelete, type }) => {
  const items = services || products || employees || [];

  return (
    <div>
      {items.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() => onDelete(item._id, type)} // تمرير النوع هنا
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {button}
    </div>
  );
};

export default Tablecom;