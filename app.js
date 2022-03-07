var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceries={['Kale', 'Bread', 'Oranges']} />
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item => <GroceryListItem grocery={item} />
    )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHover.bind(this)}>
        {this.props.grocery}
      </li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));