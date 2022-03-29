
import { Link } from 'solid-app-router'

export const path = '/about'

export default function About (props) {
  return (
    <>
      <h2>About</h2>
      <p><Link href="/">Go to /</Link></p>
    </>
  )
}
