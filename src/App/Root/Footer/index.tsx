import * as React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  padding: 1rem 0;

  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.36);

  text-align: center;
`

export const Footer: React.SFC = () => (
  <Layout>
    <div>Ask © 2018 danuel</div>
    <div>
      MIT License · <a>View on GitHub</a>
    </div>
  </Layout>
)
