const commitButton = (props) => (
  <ButtonToolbar>
    <Button bsStyle="primary" className="commitButton" onClick={
      function() {
        // POST to the server, pull relevant data from the dropdown menu and the start data/ select days
          //
      }
    }
    >Primary</Button>
  </ButtonToolbar>
);

window.commitButton = commitButton;