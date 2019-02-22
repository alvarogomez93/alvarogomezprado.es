import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (


  
  
    <div>
  <Head>
      <title>λlvaro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css"
      rel="stylesheet"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  
  </Head>
  
  
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
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
  </nav>
  
  
  
   <style global jsx>{`

	body{
	background-image: url("/static/background.jpg");
}
  .container{
  
  margin-top: 30px;
padding: 50px;

}


`}</style>

 
  

    </div>


)

export default Header
