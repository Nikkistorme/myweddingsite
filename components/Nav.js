import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 100%;
  border-left: 2px solid #4F5454;
  margin-left: 5vw;
  @media (min-width: 680px) {
    border: none;
    margin: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 5vw;
    @media (min-width: 680px) {
      flex-direction: row;
      margin: 0;
    }
  }
  li {
    margin: 0 0 20px 0;
    font-size: 1.7rem;
    font-weight: 600;
    color: #3E5656;
    text-align: left;
    @media (min-width: 680px) {
      margin: 0 20px 0 0;
    }
  }
  .active {
    text-decoration: underline;
  }
`

const isCurrentPage = (pathname, link_name) => pathname === link_name ? true : false

export default function Header() {
  const router = useRouter();
  return (
    <Nav role="navigation">
      <ul>
        <li className={isCurrentPage(router.pathname, "/") ? "active" : null}><Link href="/"><a>You're Invited!</a></Link></li>
        <li className={isCurrentPage(router.pathname, "/details") ? "active" : null}><Link href="/details"><a>Wedding Details</a></Link></li>
        <li className={isCurrentPage(router.pathname, "/our-story") ? "active" : null}><Link href="/our-story"><a>Our Story</a></Link></li>
        <li className={isCurrentPage(router.pathname, "/registry") ? "active" : null}><Link href="/registry"><a>Registry</a></Link></li>
      </ul>
    </Nav>
  )
}