class Schedule extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdownDefault: 'weekly',
      startDateDefault: 'MM/DD/YYYY',
      selectDaysDefault: 0
    };
  }



  render() {
    return (
      <div>
        <navBar    />
        <div>
          <dropDown />
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