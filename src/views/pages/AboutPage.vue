<template>
  <section id="about" class="page-section" aria-labelledby="about-title">
    <div class="about-layout">
      <div class="about-copy">
        <p class="eyebrow">The person behind the work</p>
        <h2 id="about-title">About me</h2>
        <p class="about-lead">I'm Tasnima Akther Tisha, a <strong>full-stack developer</strong> who creates clean, reliable, and user-friendly web applications.</p>
        <p>I work across the front end and back end, using <strong>HTML, CSS, JavaScript, PHP, and Laravel</strong> to build complete digital experiences. I believe a great website combines a welcoming design with a strong technical foundation. My focus is on <strong>thoughtful design</strong>, <strong>readable code</strong>, and the details that make an application comfortable to use. Beyond development, I enjoy <strong>making YouTube videos</strong> and debating.</p>
        <details class="about-more">
          <summary>See more about me</summary>
          <div class="about-more-content">
            <h3>YouTube and content creation</h3>
            <p>I create educational videos about programming, web development, and technology. I also use YouTube to share the websites and projects I build. <a href="https://www.youtube.com/@tat7057" target="_blank" rel="noopener noreferrer">Visit my channel</a>.</p>
            <h3>Research and thesis</h3>
            <p>I'm working on a thesis about classifying chest X-ray images using deep learning and transfer learning. The work includes data preparation, model training, evaluation, and documentation.</p>
            <h3>Debating</h3>
            <p>Debating helps me express ideas clearly and understand topics from different perspectives.</p>
          </div>
        </details>
      </div>
      <ul class="about-stats" aria-label="My development at a glance">
        <li class="about-stat">
          <span class="about-stat-index">01</span>
          <strong class="about-stat-value">{{ new Date().getFullYear() - 2024 }}</strong>
          <span class="about-stat-label">years coding</span>
          <span class="about-stat-detail">Building for the web</span>
        </li>
        <li class="about-stat">
          <span class="about-stat-index">02</span>
          <strong class="about-stat-value">3</strong>
          <span class="about-stat-label">projects completed</span>
          <span class="about-stat-detail">Ideas brought to life</span>
        </li>
        <li class="about-stat">
          <span class="about-stat-index">03</span>
          <strong class="about-stat-value">1</strong>
          <span class="about-stat-label">live project</span>
          <span class="about-stat-detail">Built and deployed for the web</span>
        </li>
        <li class="about-stat">
          <span class="about-stat-index">04</span>
          <strong class="about-stat-value">2</strong>
          <span class="about-stat-label">frameworks</span>
          <span class="about-stat-detail">Laravel and Vue.js</span>
        </li>
      </ul>
    </div>
  </section>
</template>
