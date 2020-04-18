
import axios from "~/plugins/axios";

axios.post('/api/insertTicket',
{
    status: 'In Progress',
    codeSnippet: '<h1 heAding</h1>',
    questions: ['what is wrong with my heading'],
    attachments: ['attachment1'],
    oneLineOverview: 'im having issues',
    longerDescription: 'seriously j+1 doesnt works',
    owner: 'Apple Kay',
    acceptedBy: 'Jimmy Lin'
});

