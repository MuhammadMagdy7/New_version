import dbConnect from '../../lib/db';
import Employee from '../../models/Employee';




export default async  function Portfolio() {

    await dbConnect();
    const employees = await Employee.find({});
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">الموظفين</h1>
      <div>
        {employees.map((project) => (
          <div key={project._id} className="project">
            <h2>{project.name}</h2>
            <p>{new Date(project.date).toLocaleDateString()}</p>
            <img src={project.image} alt={project.title} />

            <p>Facebook {project.facebook}</p>
            <p>linkedin {project.linkedin}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

