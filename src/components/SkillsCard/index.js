import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails
  return (
    <li className="skill-item-list">
      <div className="skillContainer">
        <img src={imageUrl} alt={name} className="skill-image" />
        <c className="skill-name">{name}</c>
      </div>
    </li>
  )
}
export default SkillsCard
