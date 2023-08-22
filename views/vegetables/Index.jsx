const React = require('react');


class Index extends React.Component {
  render() {
    return (
      <div>
        <nav>
        <a href="/vegetables/new">Create a New Fruit</a>
        </nav>
        <h1>Veggies Index Page</h1>
        <ul>
          {
            this.props.vegetables?.map((Veggie, i) => {
                return (
                  <li key={i}>
                    The <a href={`/vegetables/${Veggie._id}`}> { Veggie.name } </a> is { Veggie.color } and { Veggie.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index