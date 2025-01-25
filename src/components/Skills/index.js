import './index.css'

const TechSection = ({title, technologies}) => (
  <div className="tech-section">
    <h2>{title}</h2>
    <div className="tech-grid">
      {technologies.map(({imgSrc, altText, name}) => (
        <div className="tech-card" key={name}>
          <img src={imgSrc} alt={altText} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  const frontendTech = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8msSdkuY3G81WM_FIzMhJi66jj1bXmAgyw&s',
      altText: 'React Logo',
      name: 'React',
    },
    {
      imgSrc: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      altText: 'HTML Logo',
      name: 'HTML',
    },
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      altText: 'CSS Logo',
      name: 'CSS',
    },
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      altText: 'JavaScript Logo',
      name: 'JavaScript',
    },
    {
      imgSrc:
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      altText: 'Bootstrap Logo',
      name: 'Bootstrap',
    },
  ]

  const backendTech = [
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      altText: 'Node.js Logo',
      name: 'Node',
    },
    {
      imgSrc:
        'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      altText: 'Express.js Logo',
      name: 'Express.js',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtk6wWJffyCgX5xBSb0364E0HjP1fuvALKNQ&s',
      altText: 'REST API Logo',
      name: 'APIs',
    },
  ]

  const databaseTech = [
    {
      imgSrc:
        'https://e7.pngegg.com/pngimages/890/928/png-clipart-sqlite-logo-sqlite-logo-icons-logos-emojis-tech-companies.png',
      altText: 'SQLite Logo',
      name: 'SQLite',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXizOekeei5tf2Z8KG1_DI-hjwgLEttS-M9A&s',
      altText: 'MySQL Logo',
      name: 'MySQL',
    },
  ]

  const programmingLanguages = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fj0zoSD0e4V7siSTI221US9cMrtjc8A2og&s',
      altText: 'Python Logo',
      name: 'Python',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s',
      altText: 'JavaScript Logo',
      name: 'JavaScript',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9PeWvphnXOtwq5lJ_uyuXs6mugQ0Dhqxxw&s',
      altText: 'Java Logo',
      name: 'Java',
    },
  ]

  return (
    <div id="skills">
      <h1 className="text-center m-1 h1 mt-3 p-1"> My Skills </h1>
      <p className="text-center p-3 h3 desc">
        These are some major skills I have been developing over the past few
        years.
      </p>
      <ul className="skills-list">
        <li>
          <TechSection title="Frontend" technologies={frontendTech} />
        </li>
        <li>
          <TechSection title="Backend" technologies={backendTech} />
        </li>
        <li>
          <TechSection title="Databases" technologies={databaseTech} />
        </li>
        <li>
          <TechSection
            title="Programming Languages"
            technologies={programmingLanguages}
          />
        </li>
      </ul>
    </div>
  )
}

export default Skills
