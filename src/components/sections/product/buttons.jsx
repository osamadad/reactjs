import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


class ButtonExampleGroup extends React.Component {
  styles = {
    margin: "20px",
    width: "175px",
    height: "60px",
    border: "2px solid #bead8e",
  };
  state = { active: 0,
  classname:"main-btn btn-border" };

  click(val) {
    this.setState({ active: val,
    classname:"main-btn btn-filled" });
  }

  render() {
    return (
      <div>
        <Button.Group>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(1)}
            active={this.state.active === 1}
          >
            1:00-2:00
          </Button>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(2)}
            active={this.state.active === 2}
          >
            2:00-3:00
          </Button>
        </Button.Group>
        <Button.Group>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(3)}
            active={this.state.active === 3}
          >
            4:00-5:00
          </Button>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(4)}
            active={this.state.active === 4}
          >
            3:00-4:00
          </Button>
        </Button.Group>
        <Button.Group>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(5)}
            active={this.state.active === 5}
          >
            5:00-6:00
          </Button>
          <Button
            style={this.styles}
            className="main-btn btn-filled"
            onClick={() => this.click(6)}
            active={this.state.active === 6}
          >
            6:00-7:00
          </Button>
        </Button.Group>
        <br />
        <Link
          className={this.state.classname}
          to="/UserInfo"
        >
          Next
        </Link>
      </div>
    );
  }
}
export default ButtonExampleGroup;
