import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("time-element")
export class TimeElement extends LitElement {
  static styles = css`
    :host {
      font-family: sans-serif;
    }

    #time_wrapper {
      width: 100%;
      height: 50px;
      position: relative;
      border: solid;
      border-color: silver;
      border-radius: 10px;
      box-shadow: inset 0px 0.6px 5px 1.4px silver;
    }

    #time_input {
      border: 1px solid var(--inactive);
      width: 100%;
      height: 50px;
      color: gray;
      display: flex;
      align-items: center;
    }

    input {
      align-self: stretch;
      width: 33%;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
      padding: auto 10px;
      text-align: center;
      color: #132c14;
      background-color: rgba(0, 0, 0, 0);
    }

    label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    .label {
      font-size: 0.55rem;
      position: absolute;
      top: 4.5px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    input.invalid:focus {
      outline: 3px solid red;
    }

    input.invalid:focus + .label {
      color: red;
    }

    #error {
      position: relative;
      margin: 0 auto;
      color: red;
      visibility: hidden;
    }
  `;

  @property()
  hours?: string = "0";

  @property()
  minutes?: string = "00";

  @property()
  seconds?: string = "00";

  render() {
    return html`
      <div id="time_wrapper">
        <div id="time_input">
          <input type="number" id="hours" value=${this.hours} />
          <span>:</span>
          <input type="number" id="minutes" value=${this.minutes} />
          <span>:</span>
          <input type="number" id="seconds" value=${this.seconds} />
        </div>
      </div>
      <div id="error"></div>
    `;
  }
}
