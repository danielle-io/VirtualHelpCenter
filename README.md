# Virtual Help Center

## Build Setup



For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


<h1>Virtual Help Center :crescent_moon:</h1>
Application Video Demo: https://www.youtube.com/watch?v=5_vFra2uvFY&feature=youtu.be

<h2>About</h2>
Virtual Help is an online tutoring solution for connecting students with TAs to get assistance on the project. This project was inspired as a solution for accomodating the tutoring needs of students with the virtual limitations presented by COVID-19. The system allows students to select their course, describe their issues, attach files, and even input formatted code in a special code-friendly text box on our UI. Tutors can see all open requests in order of submission, select the one they choose to assist with, and the student is then notified of the pending session. The student has 60 seconds to accept the session, and upon acceptance, both the student and the tutor are directed to a private Zoom meeting to address the student's questions. 

The application allows TAs and students to <strong>see their session histories</strong>, and students can <strong>re-submit previously closed or missed sessions</strong> through their history UI. Students can also <strong>rate their session</strong> and submit an explanation for the rating upon the session closing. The application does everything in <strong>real-time</strong>, and addresses both <strong>success and failure scenarios for pairing students with TAs</strong>. Additionally, a <strong>CMS system</strong> allows the application's control to lie in the hands of administrators, who are able to adjust user permissions and availble courses that can be addressed on the application.


<h2>Build Setup:</h2>
In order to implement all functionality of the application, you will need a 
<ul>
  <li>Ably key (for real-time database implemetation</li>
  <li>MongoDb key (for accessing and storing user data)</li>
  <li>Firebase key (for student file storage and retrieval)</li>
</ul>

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```