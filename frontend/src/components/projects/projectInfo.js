const projectInfo = {
  siterevamp: {
    id: 'siterevamp',
    title: 'Website Revamp',
    subtitle: "A complete overhaul of the website showcasing my portfolio, with a more modern and sleek look.",
    client: 'hwehuy',
    year: '2025',
    role: 'Sole Designer',
    thumbnail: '/images/projects/revamp/contactform.png',
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
        description: 'Condensed the webstite into easier to maintain components, and allowed for easier spaces/areas that can be added to in the future.'
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
    year: '2025',
    role: 'Lead Developer',
    thumbnail: '/images/projects/statmon/statmon.png',
    overview: 'Pokebot is a full-stack analytics platform I built to help competitive trading card game players track and analyze their match performance. It aggregates fragmented data from spreadsheets and logs, providing tools and aids for players to use to hone their skills, and delivers personalized insights through Power BI dashboards. The platform was designed with scalability and user-specific data access in mind.',
    challenge: 'Since the main focus of the project would be the emphasis on the analytics, data was the main focus of the project. These were some of the challenge points addressed:',
    challengePoints: [
      'Scale of Data Volume Handled',
      'Data Aggregation from Multiple Sources',
      'Data Access Control for Multiple Users',
      'Scalability of the Platform',
      'Enhancing the Overall User Experience'
    ],
    solutions: [
      {
        title: 'Using a Familiar and Comfortable Platform',
        description: 'By using discord, a commonly used platform, users were more comfortable when using commands, and using the features that discord originally provides, like reaction and command prompts (website soon to be updated/deployed).'
      },
      {
        title: 'Making Data Collection Concise, and Easy',
        description: 'By using an easier format of commands and inputs, users were able to input meaningful data that still were able to be analyzed, and later aggregated.'
      },
      {
        title: 'Code Modularization',
        description: 'By modularizing the code, it not only allows for easier maintenance, but allows more upwards scalibility in the future, once more larger features, databases, and platforms are used to allow a larger user base to be supported.'
      },
      {
        title: 'Performance Optimization',
        description: 'For more efficient tools, databases, and overall user experience, the system is constantly tested and optimized to ensure that the user experiennce is as smooth as it can possibly be.'
      }
    ],
    results: [
      { value: '50%', label: 'Cut in Code' },
      { value: '20+', label: 'New Files and Directories Made for Modularity' },
      { value: '30%', label: 'Increase in System Performance' },
      { value: '40%', label: 'Cutdown in Data Collection Time' }
    ],
    images: [
      {
        src: '/images/projects/statmon/matchup.png',
        caption: 'The matchup spread that is shared server wide, allowing users to have effective testing groups for their decks.'
      },
      {
        src: '/images/projects/statmon/mulligan.png',
        caption: 'Deck Tracking, and a Tool that allows users to Test Their Mulligans'
      },
      {
        src: '/images/projects/statmon/matchresults.png',
        caption: 'Match results and analytics'
      }
    ]
  },
  tmumove: {
    id: 'tmumove',
    title: 'TMU-ve: A Student First Navigation App (Capstone Project)',
    subtitle: 'A real-time navigation platform for TMU students to minimize transit delays and optimize city-wide commutes using live traffic and delay data',
    client: 'TMU Students',
    year: '2024',
    role: 'Fullstack Developer',
    thumbnail: '/images/projects/tmumove/capstone.jpg',
    overview: 'TMU-ve  is a smart navigation system that helps commuters avoid delays by providing real-time updates on traffic, transit disruptions, and service alerts. It combines live data and congestion detection to improve daily travel decisions.',
    challenge: 'This being a more time limited projected, a lot of the challenges stemed from being able to address any of the issues that users faced. With that, the following were some of those challenges:',
    challengePoints: [
      'Handing any inconcistent or missing data that was present within live traffic APIs',
      'Noise or low resolutions camera feeds that could affect the Computer Vision Model',
      'Ensuring that the app was still responsive and usable if a user needed to use it in a real-time situation.',
      'Designing the alerts and delay notifications based on the data provided by the limited resources available.'
    ],
    solutions: [
      {
        title: 'Using Officiated Resources with Deep Databases',
        description: 'By using the resources provided by the city of Toronto, that spanned for decades, we were able to create a more accurate model, with a reliance on historical patterns that could be referred to.'
      },
      {
        title: 'Using a Reliable Computer Vision Model',
        description: 'Using a YoloV4 CV Model, it was able to create binding boxes accurately around vehicles, allowing for a more accurate analysis of the traffic.'
      },
      {
        title: 'Using Different Resources when Evaluating Commute Time',
        description: 'Whenever a user was using the app, we evaluated which combination of resources (camera feeds, live traffic delay times, CV models) would be the most effective in providing the most accurate results.'
      }
    ],
    results: [
      { value: '60%', label: 'Increase in Accuracy of Commute Time' },
      { value: '5+', label: 'Sources of Data Used to Calculate Delay Times' },
      { value: '10+ Years', label: 'Of TTC Transit Data Used to Account for Historical Patterns' }
    ],
    images: [
      {
        src: '/images/projects/tmumove/NotifyMeSystem.png',
        caption: 'The Projects Poster and Deck that was used to pitch the project to the client.'
      },
      {
        src: '/images/projects/tmumove/capstone.jpg',
        caption: 'The Team that worked on the project.'
      }
    ]
  },
  oldSite: {
    id: 'oldSite',
    title: 'hwehuy: The Original Portfolio Site',
    subtitle: 'A website that was originally created to showcase the work I had done throughout the years.',
    client: 'Self',
    year: '2024',
    role: 'Sole Developer',
    thumbnail: '/images/projects/site/PersonalWeb.png',
    overview: 'This website was originally created to showcase the work I had done throughout the years. It was a simple website that was created during my years in university, which just a space to also maintain the domain name.',
    challenge: 'The main challenge of the project was to learn how to use the technologies that were used in the website.',
    challengePoints: [
      'Learn how to use the technologies that were used in the website.',
      'Learning React, and the overallm tech stack that was used for the website.',
      'Using a VPS for the first time to host the website, to confirm the domain name.',
      'Practicing good coding practices, and learning how to write clean code.',
    ],
    solutions: [
      {
        title: 'Learning React',
        description: 'React was a new technology that I had to learn, and it was a challenge to understand the overall structure of the technology, and how to use it to create a website.'
      },
      {
        title: 'Using a VPS',
        description: 'Using a VPS for the first time, I had to learn how to use it, and how to configure it to host the website.'
      },
      {
        title: 'Writing Clean Code',
        description: 'Writing clean code was a challenge, and it was a challenge to understand the overall structure of the technology, and how to use it to create a website.'
      }
    ],
    results: [
      { value: '5+', label: 'Projects Done Within that Timeframe' },
      { value: '100+', label: 'Hours Spent on the Website' }
    ],
    images: [
      {
        src: '/images/projects/oldSite/oldSite.png',
        caption: 'Home Page of the Website'
      },
      {
        src: '/images/projects/oldSite/aboutme.png',
        caption: 'About Me Page of the Website'
      },
      {
        src: '/images/projects/oldSite/projectpage.png',
        caption: 'Projects Page of the Website'
      },
      {
        src: '/images/projects/oldSite/contactpage.png',
        caption: 'Contact Page of the Website'
      }
    ]
  },
  anomalyDetection: {
    id: 'anomalyDetection',
    title: 'Anomaly Detection: Training Model',
    subtitle: 'Worked as a predecessaor for NotifyMe. Created a training model to detect road anomalies.',
    client: 'Project',
    year: '2023',
    role: 'Backend Developer',
    thumbnail: '/images/projects/anomaly/anomalyDetection.png',
    overview: 'Worked as the main developer for this project. The training model is used to detect whether or not the road conditions are suitable for vehicles to drive in. It uses a CNN model for the learning process, with making use of computer vision in order to detect any issues with the pictures. The training set is then organized so that it can be later used to retrain the model.',
    challenge: 'The main challenge of this project would involve how the model would be able to detect anomalies in the data, and how the model would be able to handle the data that was provided.',
    challengePoints: [
      'Handling the data that was provided, and how to organize it so that it can be used to train the model.',
      'Creating a model that is able to detect anomalies in the data, and able to handle the data that was provided.',
      'Organizing the data so that it can be later used to retrain the model.',
    ],
    solutions: [
      {
        title: 'Using a CNN Model',
        description: 'Using a CNN model, it was able to detect anomalies in the data, and able to handle the data that was provided.'
      },
      {
        title: 'Using Computer Vision',
        description: 'Using computer vision, it was able to detect any issues with the pictures, and able to handle the data that was provided.'
      },
      {
        title: 'Organizing the Data',
        description: 'Organizing the data so that it can be later used to retrain the model. In this case, the data was organized within directory sorting, and the data was organized into training and testing sets.'
      }
    ],
    results: [
      { value: '60%', label: 'Noticeable Accuracy Increase for Anomaly Detection' },
    ],
    images: [
      {
        src: '/images/projects/anomaly/anomalyDetection.png',
        caption: 'The Detection Model that was used to detect anomalies in the data.',
      }
    ]
  }
};

export default projectInfo; 