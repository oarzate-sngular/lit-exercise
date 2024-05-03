import { LitElement, html } from "lit-element";

class HomePage extends LitElement {
  static get styles() {
    return []
  }

  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <p>Home page</p>
    `
  }
}

customElements.define("home-page", HomePage)