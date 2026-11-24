function Badge() {
  return <span>New to React</span>
}

function Footer() {
  return (
    <>
    <p>Made with React</p>
    <p>Keep going!</p>
    </>
  )
}

function Tip() {
  return <p>Tip: save often with Ctrl+S.</p>
}

function Welcome() {
  const name = 'Sara'
  const year = new Date().getFullYear()

  return (
    <div className="card">
      <h1>Hello, {name}!</h1>
      <p>This looks like HTML, but it is JavaScript.</p>
      <h2>My first component</h2>
      <p>It is {year}, a great year to learn React.</p>
      <p>2 + 3 = {2 + 3}</p>
      {/* two badges in a row */}
      <Badge />
      <Badge />
      <Footer />
      <Tip />
    </div>
  )
}

export default Welcome
