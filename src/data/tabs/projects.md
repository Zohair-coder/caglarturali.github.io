### Some of the projects I've worked on so far

- [Drexel Scheduler](https://github.com/Zohair-coder/drexel-scraper)
  Live Site: [scheduler.zohair.dev](https://scheduler.zohair.dev/)

  I developed a Python web scraper to scrape data from [Drexel Term Master Schedule](https://termmasterschedule.drexel.edu/webtms_du/) and [RateMyProfessors](https://www.ratemyprofessors.com/) and visualized the data in a Grafana dashboard to help students find the course that they're looking for. They can sort and filter courses by professor ratings, class times, seats available, and pretty much anything they can think of. The site still gets hundreds of users every month although I've graduated from Drexel myself which is pretty cool.

  <a href="https://scheduler.zohair.dev">
    <img src="/images/projects/drexel-scraper.png" width="80%">
  </a>

- [MarketSIM](https://gitlab.com/Zohair-coder/market-sim)

  I led a team of 4 to create a stock market simulator to invest virtual currency. I used React.js, Node.js, PostgreSQL and web sockets to get real time stock data.

  <img src="/images/projects/market-sim.png" width="80%"/>

- [Course to Professor Graph Visualization](https://github.com/Zohair-coder/course-professor-graph-visualization) Live Site: [zohair-coder.github.io/course-professor-graph-visualization](https://zohair-coder.github.io/course-professor-graph-visualization/)

  I built a toy project to visualize the relationship between courses and professors in CCI using D3.js. It isn't meant to be useful, but it was a fun project to build.

  <img src="/images/projects/course-professor-graph-visualization.png" width="80%"/>

- [What's In Your Fridge?](https://gitlab.cci.drexel.edu/ci102-3teaml/whats_in_your_fridge)
  Live Site: [fridge.zohair.dev](https://fridge.zohair.dev/)

  I led a team of 5 to create a React webapp to help users find recipes based on ingredients they have in their fridge. This was my first project in React.

  <a href="https://fridge.zohair.dev">
    <img src="/images/projects/fridge.png" width="80%">
  </a>

- [AI Powered Blackboard POC](https://github.com/Zohair-coder/hackathon-2024) Live Site: [zohair-coder.github.io/hackathon-2024](https://zohair-coder.github.io/hackathon-2024/)

  As part of a hackathon, we built a proof of concept for an AI powered Learning Management System (LMS) that integrates with Blackboard. The idea was to use LLM's to help students with their assignments (without having to provide any of the syllabus/assignment/anything context since the LLM could talk to Blackboard which has all of this material already), and convert unstructured PDFs (e.g. syllabus) to structured content that would allow us to create features that would help students with their daily struggles (e.g. calculating what grade they'll get if they get a 60 on the next assignment without having to provide context of what their previous grades are since we already have those from Blackboard and the weightages of different components are scraped from the syllabus by the LLM). We started up a test server for Blackboard using AWS and Terraform, and built a site that would interact with it. We unfortunately didn't actually connect the site to an LLM, but we have the frontend working, so this site serves as a nice way to communicate what our ideas were.

  <img src="/images/projects/learnify.png" width="80%">

- [Introduction to Programming](https://github.com/Zohair-coder/itp-website) Live Site: [itp.zohair.dev](https://itp.zohair.dev/)

  I taught an Introduction to Programming class to high school students in the summer of 2024. To deliver the class material, I created this website.

  <img src="/images/projects/itp.png" width="80%">

- [CST480 Course Website](https://github.com/Zohair-coder/cst480-website) Live Site: [cst480.zohair.dev](https://cst480.zohair.dev/)

My professor at Drexel University taught a class on Advanced Web Development. Although their content was great, the site wasn't very user-friendly. I built a website for them to make it easier to navigate and find the information students needed.

  <img src="/images/projects/cst480.png" width="80%">

- [Crime and Justice Final Paper](https://github.com/Zohair-coder/cjs) Live Site: [cjs.zohair.dev](https://cjs.zohair.dev/)

  I mentioned I was a CS major to my Crime and Justice professor, and she suggested I write my final paper as a webpage instead of a traditional PDF document. I used docusaurus to create a website that was easy to navigate and had a few visualizations to help explain the data.

  <img src="/images/projects/cjs.png" width="80%">

- [Drexel Job Search Assistant](https://github.com/Zohair-coder/drexel-job-llm)

  My brother was applying for coops, but found it difficult to go through all the job postings on the Drexel system. I scraped the postings and organized them in a structured way. I then used ChatGPT's API to check if each job was a good match for my brother based on his resume. It gave each posting a score between 0 and 100, and saved the data in a CSV file which we could sort and filter.

  <img src="/images/projects/job-postings.png" width="80%">

- [Slack Office Hours Bot](https://github.com/Zohair-coder/slack-office-hours-bot)

  When I was working at Drexel as a TA, I would sometimes have remote office hours. My professor required me to send a message in the Slack group chat every time my office hours started and ended when I was hosting remote office hours. I often forgot to do this, so I wrote a bot that would do it for me. I ran it as a cron job on my Raspberry Pi.

  <img src="/images/projects/slack-oh-bot.png" width="80%">

- [Arc Boosts](https://github.com/Zohair-coder/arc-boosts)

  My web browser (Arc) allows injecting custom JavaScript into websites. I thought this was a pretty cool feature, so I wrote a bunch of JavaScript to add functionality to certain websites that I wish existed. For example, I added an "Autofill" button to my Drexel Timesheet reporting website so that I wouldn't have to manually fill out the form. I also wrote some code to automatically register me for my classes as soon as my time ticket opened up, so that the chances of me not being able to register for the classes I wanted to take were significantly lower.

  <img src="/images/projects/timesheet-autofill.gif" width="80%">

- Raycast Scripts

  I wrote a bunch of scripts for [Raycast](https://www.raycast.com/), a productivity app that I use to control my Mac. I wrote scripts to toggle connection to my Bluetooth headphones, create new projects in VS Code easily, clone projects from GitHub to my projects folder automatically and open them up in VS Code, and more.

  <img src="/images/projects/new-proj.gif" width="80%">

- [Drexel Course Notifier](https://github.com/Zohair-coder/Drexel-Course-Availability-Notifier)

  I built a web-scraper in Python3 that notifies students via email when their selected course has available seats. This was one of the first projects I built that was actually useful for myself, and ended up being one of the reasons I ended up switching my major to Computer Science. I also posted this on reddit and got hundreds of upvotes.

  <img src="/images/projects/course-notifier.png" width="80%">

- SAP Hackathon

  I participated in a Hackathon and worked primarily on the backend, using Node.js and MongoDB.

<img src="/images/projects/sap-hackathon.png" width="30%">
