
import axios from "~/plugins/axios";

axios.post('/api/insertTicket',
{
    status: 'In Progress',
    codeSnippet: '<h1>testing this out</h1>',
    questions: ['Ive got a question'],
    attachments: ['attachment1'],
    oneLineOverview: 'im having issues',
    longerDescription: 'seriously j+1 doesnt works',
    owner: 'Jessica Imthirtyfour',
    acceptedBy: 'General Pattis'
});