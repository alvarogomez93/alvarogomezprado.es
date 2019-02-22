import Card from '../components/Card';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false
library.add(fab)

const Contact = () => (

                <Card title="Contact" className="col-sm-2">
                        <div className="fa fa-Github">
                          <FontAwesomeIcon icon={["fab","github"]}/>
                        </div>
                        <div className="fa fa-Linkedin">
                          <FontAwesomeIcon icon={["fab","linkedin"]}/>
                        </div>
                     
  
  
  
  
                <style jsx>{`

.fa:hover {
  opacity: 0.7;
}

.fa-Github {
  background: black;
  color: white;
}
.fa-Linkedin {
  background: #3B5998;
  color: white;
}
.fa {
  padding: 10px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}


                `}</style>
  
  
                </Card>
)

export default Contact;
