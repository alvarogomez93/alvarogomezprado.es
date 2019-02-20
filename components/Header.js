import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (

  
  
  
    <div className = "navheader">
    <style jsx>{`
.navheader a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.navheader a:hover {
  background-color: #ddd;
  color: black;
}

.navheader a.active {
  background-color: dodgerblue;
  color: white;
}

.navheader{
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;

}
    `}</style>
  
        <Link href="/">
          <a className="headerbutton">Home</a>
        </Link>
        <Link href="/about">
          <a className="headerbutton">About</a>
        </Link>
    </div>


)

export default Header
