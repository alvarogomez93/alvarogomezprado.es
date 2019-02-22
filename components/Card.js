



const Card = (props) => (
  
  <div className="card container">
  
  <h1>{props.title}</h1>
  <p> {props.text}</p> 
  
  <style jsx>{`

.card{
background-color: white;

}




`}</style>
  
  
  
  </div>
  
)

export default Card