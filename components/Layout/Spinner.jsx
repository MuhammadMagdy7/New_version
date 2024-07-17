import { Button } from 'react-daisyui';

const Spinner = () => {
  return (
    <div className="h-[420px] flex justify-center items-center">
    <Button className="btn btn-lg btn-link loading text-blue-400" loading={true} />
  </div>    

)
}

export default Spinner