
const Button = ({another, btnColor}) => {
  return (
    <button className={`btn btn${btnColor}`} onClick={another}>siguiente cita</button>
  )
}

export default Button;