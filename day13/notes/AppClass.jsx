export default class AppClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        age: 100,
        isMale: true,
      };
    }
  
    render() {
        const {name, age, isMale} = this.state;
      return (
        <div>
          <h1>My name is {name}</h1>
          <h2>I am {age} years old</h2>
          <h3>I am a {isMale ? "Male" : "Female"}</h3>
          <h4>I am feeling {this.props.emotion}</h4>
        </div>
      );
    }
  }
  