import { LitElement, css, html } from "lit-element";

class HomePage extends LitElement {
  static get styles() {
    return css`
      p {
        color: black
      }
    `
  }

  async getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    this.users = users
  }

  firstUpdated() {
    this.getUser()
    console.log("3. FIRST UPDATED")
  }

  updated() {
    console.log("4. UPDATED")
  }

  static get properties() {
    return {
      users: { type: Array }
    }
  }

  constructor() {
    console.log("1. CONSTRUCTOR")
    super()
    this.users = []
  }

  render() {
    console.log("2. RENDER", this.user)
    return html`
      <p>Home pages</p>
      ${this.users.map((user) => html`
        <p>${user.name}</p>
      `)}
    `
  }
}

customElements.define("home-page", HomePage)