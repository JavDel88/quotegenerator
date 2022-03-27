
const Button = ({another, btnColor}) => {
  return (
    <button className={`btn btn${btnColor}`} onClick={another}>New quote</button>
  )
}

export default Button;