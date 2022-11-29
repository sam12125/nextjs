import Head  from 'next/head';
import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Layout = (props) => {
  const router = useRouter()

  // const logout = async () => {
  //   await fetch('http://localhost:8000/api/logout', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       credentials: 'include',
  //   })

  //   await router.push('/login');
  // }

  let menu

  if(!props.auth){

    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
            <Link href="/login" className='nav-link active'>Login</Link>
          
        </li>
        <li className="nav-item">
            <Link href="/register" className='nav-link active'>Register</Link>
          
        </li>
      </ul>
    )
  }else{
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
            <a href="#" className='nav-link active' onClick={logout}>Logout</a>
          
        </li>
      </ul>
    )
  }
    
    return (
        <>
          <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
          </Head>
    
          <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <Link href="/" className='navbar-brand'>Home</Link>
    
    <div>
      {menu}
    </div>
  </div>
</nav>

          <main className="form-signin">
      {props.children}
    </main>
        </>
      );
    }

export default Layout;