class TimeElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
			<style>
				body {
					font-family: sans-serif;
				}

				#time_wrapper {
					width: 100%;
					height: 50px;
					position: relative;
					border: solid;
					border-color: silver;
					border-radius: 10px;
  				box-shadow: inset 0.0px 0.6px 5.0px 1.4px silver;
				}
	
				#time_input {
					border: 1.0px solid var(--inactive);
					width: 100%;
					height: 50px;
					color: gray;
					display: flex;
					align-items: center;
				}
	
				input {
					align-self: stretch;
					width: 33.0%;
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
				</style>
				<div id="time_wrapper">
					<div id="time_input">
							<input type="number" id="hours" value="0" />
						<span>:</span>
							<input type="number" id="minutes" value="00" />
						<span>:</span>
							<input type="number" id="seconds" value="00" />
					</div>
				</div>
				<div id="error"></div>
				`;
  }

  connectedCallback() {
    this.shadowRoot.getElementById("hours").value = "0";
    this.shadowRoot.getElementById("minutes").value = "00";
    this.shadowRoot.getElementById("seconds").value = "00";
  }

  disconnectCallback() {
    console.log("TimeElement removed!");
  }

  get hours() {
    return this.shadowRoot.getElementById("hours").value;
  }

  get minutes() {
    return this.shadowRoot.getElementById("minutes").value;
  }

  get seconds() {
    return this.shadowRoot.getElementById("seconds").value;
  }

  set hours(value) {
    this.shadowRoot.getElementById("hours").value = value;
  }

  set minutes(value) {
    this.shadowRoot.getElementById("minutes").value = value;
  }

  set seconds(value) {
    this.shadowRoot.getElementById("seconds").value = value;
  }
}

customElements.define("time-element", TimeElement);
