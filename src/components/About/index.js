import './index.css'
import AutoTyping from '../AutoTyping'
import Clock from '../Clock'

const About = () => (
  <div id='about'>
    <div className=' d-flex align-items-center bg-purplq w-100 '>
      <div className='m-auto'>
        <div className='container-fluid text-center  p-1 m-auto'>
          <div className='row justify-content-center align-items-center '>
            <div className='col-lg-6 order-1 col-12 order-lg-2 m-2 text-start '>
              <h1 className='h1'>
                Hi ,
                <span>
                  {' '}
                  <Clock /> <br />
                </span>
                I am <br /> Satya Ganesh Kamireddy
              </h1>
              <h2 className='fw-bolder h2'>
                I am a <br className='d-lg-none' />
                <span>
                  <AutoTyping />
                </span>
              </h2>
              <h3 className='h3'>
                I am a driven and adaptable person, always ready to embrace new
                challenges. Passionate about continuous learning, I am committed
                to producing high-quality work. With a positive mindset and a
                focus on growth, I am eager to contribute meaningfully and
                accomplish remarkable outcomes.
              </h3>
              <a
                href='https://drive.google.com/file/d/19hGaFxL4KSxNcjV9uBsnu87EbV93jLd3/view?usp=drive_link'
                rel='noopener noreferrer'
                target='_blank'
                className='text-center'
              >
                <div>
                  <button type='button' className='btn-gradient'>
                    My Resume
                  </button>
                </div>
              </a>
            </div>
            <div className='col-lg-5 order-0 col-12 text-center order-lg-2 m-2  '>
              <img
                src='https://i.imghippo.com/files/rwtD8367Bd.png'
                className='rounded-circle height neon-ring'
                alt='Satya Ganesh Kamireddy'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
