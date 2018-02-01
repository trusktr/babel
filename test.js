
class MyEl extends HTMLElement {
    connectedCallback() {
        console.log(' ---- my-el!')
    }
}

customElements.define('my-el', MyEl)
