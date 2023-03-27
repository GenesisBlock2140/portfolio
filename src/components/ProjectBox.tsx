import githubLogo from '../assets/github-mark.png'
import { Badge } from './Badge'

interface ProjectBoxProps {
  website?: string
  githubRepo: string
  name: string
  description: string
  tech: string[]
}

export const ProjectBox = ({website, githubRepo, name, description, tech}:ProjectBoxProps) => {

  return (
    <div className='projectbox'>
      <div className='projectbox-top'>
        <a href={website} target="_blank" >{`${website ? "Voir le site" : ""}`}</a>
        <a href={githubRepo}>
          <img src={githubLogo} alt="github logo" />
        </a>
      </div>
      <p className='projectbox-name'>{name}</p>
      <p className='projectbox-desc'>{description}</p>
      <div className='projectbox-badge'>
        {
          tech.map((techName,key) => {
            return <Badge text={techName} key={key} />
          })
        }
      </div>
    </div>
  )
}