import dbConnect from '../lib/db';
import Employee from '../models/Employee';

export default function Clients({ employees }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">عملاءنا السابقين</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee._id} className="employee">
            <h2>{employee.name}</h2>
            <img src={employee.image} alt={employee.name} />
            <p><a href={employee.facebook}>Facebook</a></p>
            <p><a href={employee.linkedin}>LinkedIn</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const employees = await Employee.find({});
  return { props: { employees: JSON.parse(JSON.stringify(employees)) } };
}
