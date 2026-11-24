import Panel from '../components/Panel.jsx'

function ProfileCard({ name, role, skills = [], years = 1 }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Skills: {skills.join(', ')}</p>
      <p>Experience: {years} {years === 1 ? 'year' : 'years'}</p>
    </div>
  )
}

function Profiles() {
  return (
    <Panel title="Our team">
      <ProfileCard
        name="Sara"
        role="Designer"
        skills={['Figma', 'CSS']}
        years={5}
      />
      <ProfileCard
        name="Omar"
        role="Developer"
        skills={['JavaScript', 'React']}
      />
      <ProfileCard name="Lina" role="Tester" />
    </Panel>
  )
}

export default Profiles
