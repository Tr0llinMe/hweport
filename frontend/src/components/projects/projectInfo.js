const projectInfo = {
  siterevamp: {
    id: 'siterevamp',
    title: 'Website Revamp',
    subtitle: "A complete overhaul of the website showcasing my portfolio",
    client: 'hwehuy',
    year: '2025',
    role: 'Sole Designer',
    overview: "For the goal of this website revamp, I wanted to create a more sleek and moden look for my portfolio, while maintain the some of the key design elements that made the last website successful. This involved researchingt and testing various other design styles, and finally executing the final design.",
    challenge: "Since there has been other projects that I worked on after the first site creation, revisiting the old website was a bit of a challenge picking up what was left off, trying to complete portions of the websites left undone. Generally, the challenges can be break down to the following challenges were established:",
    challengePoints: [
      'Refactor the old website to be more modular and easier to maintain',
      'Creating a more consistent and cohesive design across the website',
      'Making the wbesite more modernize and sleek to todays standard',
      'Creating something that does not just look like a porfolio, but a place that is more personal and unique to me.'
    ],
    solutions: [
      {
        title: 'Readdress Architecture',
        description: 'Condesed the webstite into easier to maintain components, and allowed for easier spaces/areas that can be added to in the future.'
      },
      {
        title: 'Identity Creation',
        description: 'Researched/tested with various other design styles, and finally setlled on a design that is something I am proud of.'
      },
      {
        title: 'Comparison Models',
        description: 'Looked at various other portfolio websites, and took inspiration from them to create a unique and personal website Unique colour/design choices were what the goals of this website was.'
      },
      {
        title: 'Intentional Design Choices',
        description: 'Implemented design choices that were intentional, and made the website more personal and unique.'
      }
    ],
    results: [
      { value: '60%', label: 'Code Reduction' },
      { value: '50%', label: 'More User Friendly' },
      { value: '10+', label: 'Features Added' }
    ]
  },

  statmon: {
    id: 'statmon',
    title: 'Statmon: The all-in-one TCG Tool for Pokemon Players',
    subtitle: 'A tool that allows users to track their progress, tools to track analytics, and more to aid the improvement of their skills in the Pokemon TCG',
    client: 'hwehuy',
    year: '2023',
    role: 'UI/UX Designer',
    overview: 'A mobile application designed to help architects showcase their portfolio in an interactive and engaging way.',
    challenge: 'Creating an intuitive interface that effectively displays architectural projects while maintaining professional aesthetics.',
    challengePoints: [
      'Design an intuitive navigation system',
      'Create engaging project presentations',
      'Implement efficient image loading',
      'Ensure cross-platform consistency'
    ],
    solutions: [
      {
        title: 'Interactive Gallery',
        description: 'Developed a dynamic gallery system for showcasing architectural projects.'
      },
      {
        title: '3D View Integration',
        description: 'Integrated 3D model viewing capabilities for detailed project exploration.'
      },
      {
        title: 'Responsive Design',
        description: 'Created a fully responsive interface that works seamlessly across all devices.'
      },
      {
        title: 'Performance Optimization',
        description: 'Implemented efficient image loading and caching mechanisms.'
      }
    ],
    results: [
      { value: '85%', label: 'User Engagement Increase' },
      { value: '60%', label: 'Faster Project Loading' },
      { value: '4.8/5', label: 'App Store Rating' },
      { value: '10k+', label: 'Active Users' }
    ],
    images: [
      {
        src: '/images/projects/statmon/dashboard.png',
        caption: 'Main dashboard with analytics overview'
      },
      {
        src: '/images/projects/statmon/tracking.png',
        caption: 'Progress tracking interface'
      }
    ]
  }
};

export default projectInfo; 