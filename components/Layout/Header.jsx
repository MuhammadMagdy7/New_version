
const HeaderSec = ({title, color="text-primaryColor"}) => {
  return (
    <div className={`flex-1 text-center lg:text-9xl md:text-7xl text-5xl ${color} font-extrabold py-5 mb-5`}>{title}</div>
  )
}

export default HeaderSec