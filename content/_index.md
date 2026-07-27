---
title: ''
summary: ''
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: markdown
    content:
      title: 'About Me'
      subtitle: ''
      text: |-
        Strategic Data Science leader with over **12 years of experience in AI/ML**, fortified by 11 years of deep manufacturing expertise. I have successfully led the full lifecycle of AI initiatives — from concept to implementation — delivering complex solutions that solve critical business challenges across **automotive, oil & gas, and aerospace** sectors.

        I specialize in **Agentic AI, Large Language Models, Computer Vision, and MLOps**, with a proven track record of driving measurable ROI through RAG-based systems, multi-agent architectures, and scalable cloud-native AI platforms on Azure.

        Currently leading global AI programs at **MSM** as Program Manager - AI, defining GenAI and Agentic AI roadmaps, scaling high-performing teams, and partnering with C-suite to align AI strategy with enterprise-wide adoption.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
    design:
      view: card
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 10
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---
