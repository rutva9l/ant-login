import Login from './login';
import '../styles/landing.css'


const Landing = () => {
    return <div className='landing-wrapper'>
    <Login title='Welcome Back' subtitle='Sub-title text goes here' />
    <div className='landing-image'>
      <img src='/assets/sales-team.svg' />
    </div>
  </div>
}

export default Landing