const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Vegetables show page</h1>
                The { this.props.Veggie.name } is { this.props.Veggie.color }
        { this.props.Veggie.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}
module.exports = Show;