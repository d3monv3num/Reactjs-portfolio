import './parallaxstyle.css';
import React from 'react';

const Parallax = () => {
  return (
    <div className="wrapper_outer">
    <div className="wrapper">
      <section className="parallax_section">
        <div
          className="parallax_bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1610482650877-a580984185a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)"
          }}
        />
        <h2>
          CSS3 <br /> Parallax Effect
        </h2>
      </section>
      <section className="parallax_section">
        <div
          className="parallax_bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1595589981216-2efa123658f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)"
          }}
        />
        <h2>
          Creative <br /> Parallax Effect
        </h2>
      </section>
    </div>
  </div>
  )
}

export default Parallax
