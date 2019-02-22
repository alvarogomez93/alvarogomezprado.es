



const Card = (props) => (
  

  
  <div className={props.className+" card container"}>
  
  <h1>{props.title}</h1>
  {props.text}
  {props.children}
  
  <style jsx>{`

.card{
background-color: white;

}




`}</style>
  
  
  
  </div>
  
)

export default Card