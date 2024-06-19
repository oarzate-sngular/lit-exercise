import { LitElement, html } from "lit-element";
import styles from "./home-page-styles"

class HomePage extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <h1>Home page</h1>
    `
  }
}

customElements.define("home-page", HomePage)