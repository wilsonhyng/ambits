
class Schedule extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownDefault: 'Weekly',
      startDateDefault: 'MM/DD/YYYY',
      selectDaysDefault: []
    };
  }

  onDropDownSelect(e) {
    this.setState({
      dropdownDefault: e.target.value
    });
  }

  onStartDateSet() {

  }

  onInputDateSet() {

  }

  render() {
    return (
      <div>
        <navBar />
        <div>
          <dropDown
            onDropDownSelect={this.onDropDownSelect.bind(this)}
            dropdownDefault={this.state.dropdownDefault}
          />
        </div>
        <div>
          <startDate />
        </div>
        <div>
          <selectDays />
        </div>
        <div>
          <commitButton />
        </div>
      </div>
    );
  }
}

window.Schedule = Schedule;