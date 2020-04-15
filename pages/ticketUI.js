
import axios from "~/plugins/axios";

let ticketData = JSON.stringify({
    status: 'Closed',
    codeSnippet: '<h1>testing this out<h1>',
    questions: ['Ive got a question'],
    attachments: ['attachment1'],
    oneLineOverview: 'im having issues',
    longerDescription: 'seriously j+1 doesnt works',
    owner: 'Joe Franklin',
    acceptedBy: 'General Pattis'
});

axios.post('/api/insertTicket',ticketData,
{
    headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}
).catch(error => {
    console.log(error);
  });