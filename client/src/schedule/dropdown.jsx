const dropdown = (props) => (
    <div>
    <DropdownButton
      className="dropdown"
      bsStyle="default"
      title="Frequency"
      value={this.state.dropdownDefault}
      onChange={this.handleChange}
    >
      <MenuItem value="Daily">Daily</MenuItem>
      <MenuItem value="Weekly">Weekly</MenuItem>
      <MenuItem value="Monthly">Monthly</MenuItem>
    </DropdownButton>
    </div>

);

window.dropdown = dropdown;