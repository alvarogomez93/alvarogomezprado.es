import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Contact from '../components/Contact'

const Home = () => (
 <div>
  <Layout>
  
  <div className="row">
    <Contact/> 
    <Card className="col-sm-8" title='Hello' text='Welcome to my personal page. All this is pretty much still a work in progress'/>
  </div>
  
  </Layout>
  
  
  </div>
)

export default Home