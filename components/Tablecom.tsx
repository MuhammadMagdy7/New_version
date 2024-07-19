// components/Tablecom
import { Item } from "@/types";

interface TablecomProps {
  items: Item[];
  button: JSX.Element;
  onDelete: (id: string, type: string) => void;
  type: string;
}

const Tablecom: React.FC<TablecomProps> = ({ items, button, onDelete, type }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => onDelete(item._id, type)}
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
      <div className="mt-4">{button}</div>
    </div>
  );
};

export default Tablecom;
