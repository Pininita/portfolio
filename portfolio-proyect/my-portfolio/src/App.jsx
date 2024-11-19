import React from 'react';
import './styles/App.css';
import { Header } from './components/Header'
import { Presentation } from './components/Presentation';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import bannerForo from './assets/banner-foro.webp'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">

      <Header />

      <Presentation />

      <AboutMe />

      <section className='skills'>
        <Skills
          percentage="80"
          tool="HTML"
          color="#E44D26"
        />

        <Skills
          percentage="75"
          tool="CSS"
          color="#1572B6"
          range=""
        />

        <Skills
          percentage="47"
          tool="TAILWIND"
          color="#38B2AC"
          range="less"
        />

        <Skills
          percentage="68"
          tool="JAVASCRIPT"
          color="#F7DF1E"
          range=""
        />

        <Skills
          percentage="50"
          tool="REACT"
          color="#426680"
          range=""
        />

        <Skills
          percentage="62"
          tool="NODE.JS"
          color="#8CC84B"
          range=""
        />

        <Skills
          percentage="66"
          tool="EXPRESS"
          color="#808000"
          range=""
        />

        <Skills
          percentage="55"
          tool="MYSQL"
          color="#00618A"
          range=""
        />

      </section>

      <h2 id="projects" className='text-projects'>My Projects</h2>
      <section className="projects">
        <Projects
          title="FORUM NO VIOLENCE"
          link="https://www.foronoviolencia.co/"
          description="FORUM about no violence to show people ways to help"
          image={bannerForo}
        />

        <Projects
          title="FORUM NO VIOLENCE"
          link="https://www.foronoviolencia.co/"
          description="FORUM about no violence to show people ways to help"
          image={bannerForo}
        />

        <Projects
          title="FORUM NO VIOLENCE"
          link="https://www.foronoviolencia.co/"
          description="FORUM about no violence to show people ways to help"
          image={bannerForo}
        />

        <Projects
          title="FORUM NO VIOLENCE"
          link="https://www.foronoviolencia.co/"
          description="FORUM about no violence to show people ways to help"
          image={bannerForo}
        />

      </section>

      <Contact
        location="Colombia, Armenia"
        phone="+57 312 689 88 66"
        email="devdanielsanabria@gmail.com"
      />

      <Footer />

    </div>
  );
}

export default App;
