const navBar = (props) => (
  <nav className = "navBar">
  <div>
    <Pager>
      <Pager.Item previous href="#">&larr; Previous</Pager.Item>
    </Pager>
  </div>
  </nav>
);

window.navBar = navBar;