import Card from '../components/Card';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false
library.add(fab)

const Contact = () => (

                <Card title="Contact:" className="col-sm-3">

                  
                        <div className="wrapper">
                          <ul>
                          
                          
                            <li className="github">
                            <a href="https://github.com/alvarogomez93/" >
                            <FontAwesomeIcon className="fa fa-linkedin"  icon={["fab","github"]}/>
                              <div className="slider">
                              
                                <p>github</p>
                              </div>
                              </a>
                            </li>
                           

                            
                            <li className="linkedin">
                            <a href="https://www.linkedin.com/in/%C3%A1lvaro-g%C3%B3mez-prado-a5a9a690/" >
                            <FontAwesomeIcon className="fa fa-linkedin" icon={["fab","linkedin"]}/>
                              <div className="slider">
                                <p>linkedin</p>
                              </div>
                              </a>
                            </li>
                          </ul>
                          
                          <style jsx>{`

ul li a{
  color: white;
  
}
.wrapper {
	position: absolute;
	top: 50%;
	left: 45%;
	transform: translate(-50%,-50%);
}


ul {
	list-style: none;
}
ul li {
	width: 50px;
	height: 50px;
	background: #e59500;
	margin: 10px 0;
	border-radius: 3px;
	position: relative;
	cursor: pointer;
	box-shadow: 0 0 10px rgba(0,0,0,0.3);
  font-size: 30px;
  text-align: center;
}
ul li .fa {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	font-size: 20px;
}
ul li.github {
	background: #000;
}
ul li.linkedin {
	background:  #4875B4;
}
.slider {
	position: absolute;
	top: 0;
	left: 51px;
	width: 0px;
	height: 50px;
	line-height: 50px;
	background: #eebb5c;
	text-align: center;
	border-radius: 3px;
	transition: all 0.2s ease;
}
.slider p {
	text-transform: uppercase;
	font-size: 16px;
	opacity: 0;
	font-weight: 900;
	transition: all 0.2s ease;
}
ul li.github div.slider {
	background: #000;
}
ul li.linkedin div.slider {
	background:  #4875B4;
}

ul li:hover .slider {
	width: 180px;
}
ul li:hover .slider p {
	opacity: 1;
}

ul li.github div.slider {
	background: ##f4f7ef;
}

ul li.linkedin div.slider {
	background:  #4875B4;
}
ul li:hover .slider {
	width: 180px;
}
ul li:hover .slider p {
	opacity: 1;
}



                `}</style>



                        </div>
  
                </Card>
)

export default Contact;
