import img from './images/logoOvalskylight.png';
import title from './images/titleOvalskylight.png';
import Menu from './Menu';
import './Home.css'
import Footer from './Footer';
import  Modal from './Modal';

const Home = () => {
  
  return (
    <div>
      <img src={title} alt="Titre" className='title'/>
      <div className="d-flex flexDirection justify-content-between align-items-center mt-5 p-5">
        <Menu/>
        <img className="logoImg" src={img} alt="logo" />
      </div>  
      <Modal/>
      <Footer/>
    </div>
  )
}

export default Home
