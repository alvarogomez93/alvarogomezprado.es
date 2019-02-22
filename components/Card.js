



const Card = (props) => (
  
  <div className="card">
  
  <h1>{props.title}</h1>
  <p> {props.text}</p> 
  
  <style jsx>{`

.card{
background-color: grey;

}




`}</style>
  
  
  
  </div>
  
)

export default Card