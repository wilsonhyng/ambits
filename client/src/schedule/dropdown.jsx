const dropdown = (props) => {
  const FruitSelector = React.createClass({
    getInitialState: function() {
      return {selectValue: 'Radish'};
    },
    handleChange: function(e) {
      this.setState({selectValue: e.target.value});
    },
    render: function() {
      return (
        <div>
        <DropdownButton
          className="dropdown"
          bsStyle="default"
          title="Frequency"
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
        </DropdownButton>
        </div>
      );
    }
  });


      <MenuItem eventKey="1">Daily</MenuItem>
      <MenuItem eventKey="2">Weekly</MenuItem>
      <MenuItem eventKey="3" active>Monthly</MenuItem>
  </DropdownButton>
};

window.dropdown = dropdown;