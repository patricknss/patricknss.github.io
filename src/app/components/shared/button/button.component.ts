export class ButtonComponent {
  buttonText: string;
  buttonClick: () => void;

  constructor() {
    this.buttonText = 'Click Me';
    this.buttonClick = this.handleClick;
  }

  handleClick() {
    console.log('Button clicked!');
  }
}