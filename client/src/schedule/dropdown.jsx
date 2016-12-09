const dropdown = ({dropdownDefault, onDropDownSelect}) => (
    <div>
    <DropDownMenu
      className="dropdown"
      bsStyle="default"
      title="Frequency"
      value={this.props.dropdownValue}
      onChange={() => onDropDownSelect() /* add in parameter from MenuItem */}
    >
      <MenuItem value={1} primaryText="Daily">Daily</MenuItem>
      <MenuItem value={2} primaryText="Weekly">Weekly</MenuItem>
      <MenuItem value={3} primaryText="Monthly">Monthly</MenuItem>
    </DropDownMenu>
    </div>

);

window.dropdown = dropdown;