import { Component } from "react";

interface ClassComponentProps {
  subTitle: string;
  count: number;
  customClassName?: string;
}

interface ClassComponentState {
  selectedName: string;
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    selectedName: "agata",
  };

  render() {
    return (
      <div>
        <h1 className={this.props.customClassName}>
          this is a class component
        </h1>
        <h2>{this.props.subTitle}</h2>
        <p>{this.props.count}</p>
        <h3>{this.state.selectedName}</h3>
      </div>
    );
  }
}

export default ClassComponent;
