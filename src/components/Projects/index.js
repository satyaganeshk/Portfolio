import {Component} from 'react'
import TabItem from '../TabItem'
import ProjectItem from '../ProjectItem'
import './index.css'

const tabsList = [
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'REACT', displayText: 'React'},
  {tabId: 'NODE', displayText: 'Node'},
]

const projectsList = [
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL:
      'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
    title: 'Todo List',
    description:
      'I built a responsive task management app using Bootstrap, HTML, CSS, and JavaScript. Implemented task creation, editing, and deletion features with a user-friendly interface.',
    url: 'https://satyaganeshtodo.ccbp.tech/',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
    url: 'https://speedtypesatya.ccbp.tech',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    url: 'https://randomjokesatya.ccbp.tech/',
  },

  {
    projectId: 5,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    url: 'https://foodsatya.ccbp.tech',
  },

  {
    projectId: 656,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    title: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    url: 'https://satyanxtrends.ccbp.tech/',
  },
  {
    projectId: 56,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png',
    title: 'Emoji Game',
    description:
      'I created a fun emoji game with React, where players must click on different emojis without clicking the same one twice. Clicking an emoji twice results in a loss, adding an exciting challenge to the game.',
    url: 'https://satyaemojigame.ccbp.tech/',
  },
  {
    projectId: 55,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png ',
    title: 'Rock, Paper & Scissors',
    description:
      "I created a Rock, Paper, Scissors game using React. Players select rock, paper, or scissors to compete against the computer. The simple interface shows each player's choice and round result, while also tracking wins, losses, and ties for a fun experience.",
    url: 'https://srockpapers.ccbp.tech/',
  },

  {
    projectId: 65,
    category: 'NODE',
    imageURL:
      'https://acropolium.com/img/articles/find-backend-developers/img01.jpg',
    title: 'Twitter Clone',
    description:
      'I built my version of Twitter, which is also a clone of the backend.',
    url: 'https://github.com/satyaganeshk/twitterClone',
  },
  {
    projectId: 64,
    category: 'NODE',
    imageURL:
      'https://acropolium.com/img/articles/find-backend-developers/img01.jpg',
    title: 'Todo List Backend',
    description:
      'I have created A backend application of my todolist frontend application by using Nodejs and ExpressJs',
    url: 'https://github.com/satyaganeshk/Todo-Application-API',
  },
  {
    projectId: 666,
    category: 'REACT',
    imageURL:
      'https://i0.wp.com/www.kridha.net/wp-content/uploads/2022/04/Slide1-38.jpg?fit=1024%2C576&ssl=1',
    title: 'My Journey',
    description: 'My journey Learning in CCBP NxtWave',
    url: 'https://satyatime.ccbp.tech/',
  },
]

class Projects extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachProject => eachProject.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div id="projects">
        <div className="app-container">
          <h1 className="title">Projects</h1>
          <p className="description">
            My skills and accomplishments reflect my strengths and capabilities.
            I have acquired new skills and mastered various software to excel in
            my project responsibilities.
          </p>

          <ul className="tabs-container">
            {tabsList.map(tab => (
              <TabItem
                key={tab.tabId}
                tabDetails={tab}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === tab.tabId}
              />
            ))}
          </ul>

          <ul className="project-list-container">
            {filteredProjects.map((project, index) => (
              <ProjectItem
                key={project.projectId}
                projectDetails={project}
                animationDelay={index * 0.5}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects
