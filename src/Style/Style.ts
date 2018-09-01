import { injectGlobal } from 'styled-components'

interface IStyle {
  readonly clearfix: () => void
}

export const Style: IStyle = {
  clearfix() {
    injectGlobal`
      * {
        box-sizing: border-box;

        transition: none 0.3s ease-in-out;
      }

      html {
        min-width: 16rem;

        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.04);

        user-select: none;
      }

      html,
      body,
      body > div {
        height: 100%;
      }

      html,
      input,
      button {
        line-height: 1;
      }

      html, textarea {
        font-family: 'Nanum Gothic', sans-serif;
      }

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      input,
      button,
      ol,
      ul,
      li,
      figure,
      p {
        margin: 0;
        padding: 0;
      }

      body {
        position: relative;

        margin: 0 auto;
      }

      ol,
      ul {
        list-style: none;
      }

      img {
        vertical-align: top;
      }

      a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
      }

      input,
      button {
        border: 0;
        border-radius: 0;
        outline: 0;
        background-color: transparent;

        font-size: 1rem;
      }
    `
  }
}
