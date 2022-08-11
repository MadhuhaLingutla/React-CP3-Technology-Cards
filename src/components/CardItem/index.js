// Write your code here.

import './index.css'

const CardItem = props => {
  const {data} = props
  const {title, description, imgUrl, className} = data
  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
