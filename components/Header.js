import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (


  
  
    <div className = "navbar navbar-expand-sm bg-dark navbar-dark">
  <Head>
      <title>λlvaro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css"
      rel="stylesheet"
      />
  
  </Head>
  
  
      <ul className="navbar-nav">
        <Link href="/">
           <li className="nav-item" >
          <a className="nav-link">Home</a>
          </li>
        </Link>
        <Link href="/about">
   <li className="nav-item" >
          <a className="nav-link">About</a>
    </li>
  </Link>
      </ul>
  
  
  
  
   <style global jsx>{`

	body{
	background-image: url("/static/background.jpg");
}
  .container{
  
  margin-top: 30px;

}


`}</style>

 
  

    </div>


)

export default Header
