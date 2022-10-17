const Card=({name,age,image,email})=>{

  return(
    <div className="card" >
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p className="last">{email}</p>
        <p className="last">{age}</p>
      </div>
    </div>

  )
}
export default Card 