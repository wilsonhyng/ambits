const dropdown = ({dropdownDefault, onDropDownSelect}) => (
    <div>
    <DropdownMenu
      className="dropdown"
      bsStyle="default"
      title="Frequency"
      value={this.props.dropdownDefault}
      onChange={() => onDropDownSelect() /* add in parameter from MenuItem */}
    >
      <MenuItem value={1} primaryText="Daily">Daily</MenuItem>
      <MenuItem value={2} primaryText="Weekly">Weekly</MenuItem>
      <MenuItem value={3} primaryText="Monthly">Monthly</MenuItem>
    </DropdownButton>
    </div>

);


        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Daily" />
          <MenuItem value={2} primaryText="Weekly" />
          <MenuItem value={3} primaryText="Monthly" />

        </DropDownMenu>

window.dropdown = dropdown;