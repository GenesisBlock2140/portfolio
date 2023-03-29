
interface SkillsProps {
  title: string
  listSkills: string[]
}

export const Skills = ({title, listSkills}:SkillsProps) => {
  console.log(listSkills);
  
  return (
    <div className="skills-box">
      <p className="skills-title">{title}</p>
      <div className="skills-group">
        {listSkills.map( (item) => {
          return (
            <div className="skills-items">
              <i className={`devicon-${item} skills-icon`}></i>
              <p>{item.split("-")[0]}</p>
            </div>
            )
        })}
      </div>
    </div>
  )
}