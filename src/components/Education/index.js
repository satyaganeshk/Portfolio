import './index.css'

const educationData = [
  {
    id: 1,
    institution: 'NxtWave, Virtual(Hyderabad)',
    degree: 'Full Stack Development Trainee (MERN)',
    duration: 'May 2024 - Present',
    description:
      'I have acquired valuable software skills at NxtWave as a MERN full-stack trainee, including HTML, CSS, JavaScript, Python, the MERN stack, and SQL. I look forward to applying these skills professionally.',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDKcWIhUtBGaaNIRal9FJi-BTV_4q5MowMw&s',
    imgAlt: 'NxtWave',
  },
  {
    id: 2,
    institution: 'Vishnu Institute Of Technology, Bhimavaram',
    degree:
      'Bachelor of Technology - BTech, Electrical and Electronics Engineering',
    duration: 'Oct 2020 - May 2024',
    description:
      'I had completed my Bachelors degree in Electrical and Electronics Engineering at Vishnu Institute of Technology, Bhimavaram. I have taken courses in Python, HTML5, CSS.',
    imgSrc:
      'https://play-lh.googleusercontent.com/ltjak6wyekUfzFGPi7hs5AHyApkJbHXylN-Woc7zBZmq9pfZcRzPGKtic_HMIZZKZdE',
    imgAlt: 'Vishnu Institute Of Technology',
  },
  {
    id: 3,
    institution: 'Aditya Junior College, Mandapeta',
    degree: 'MPC, Intermediate',
    duration: 'June 2018 - Mar 2020',
    description:
      'I had completed my Intermediate in Maths, Physics and Chemistry.',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zniHjh4vKm1D2M4FGug2j4p7dL9Clszz0Q&s',
    imgAlt: 'Aditya Junior College',
  },
  {
    id: 4,
    institution: 'Sri Annapurna High School, Mandapeta',
    degree: 'SSC - 10th Class',
    duration: 'June 2017 - Mar 2018',
    description: 'I completed my 10th class public in Annapurna High School.',
    imgSrc:
      'https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg',
    imgAlt: 'Sri Annapurna High School',
  },
]

const EducationItem = ({
  institution,
  degree,
  duration,
  description,
  imgSrc,
  imgAlt,
}) => (
  <li className="d-flex flex-column align-items-center bg-purpl border border-primary ">
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <img
          src={imgSrc}
          className="rounded order-0 mt-3"
          height="200px"
          alt={imgAlt}
        />
        <div className="d-flex flex-column order-2 m-2 ml-3">
          <h1>{institution}</h1>
          <h2>{degree}</h2>
          <p>{duration}</p>
        </div>
      </div>
      <div className="mt-3">
        <h3>{description}</h3>
      </div>
    </div>
  </li>
)

const Education = () => (
  <div id="education" className="p-1">
    <h1 className="text-center m-1 h1 mt-3 p-1"> Education </h1>
    <p className="text-center p-3 h3">
      My educational journey has been one of self-discovery and personal growth.
      Here are the key details of my academic background.
    </p>
    <div className="d-flex flex-row justify-content-center">
      <ul className="list-unstyled">
        {educationData.map(edu => (
          <EducationItem key={edu.id} {...edu} />
        ))}
      </ul>
    </div>
  </div>
)

export default Education
