// Creating a web server
const express = require('express');
const app = express();
 
// Creating a resource
app.post('/api/resources', (req, res) => {
    // Create the resource and return the resource object
    resn.send(resource);
});
 
// Getting all the resources
app.get('/api/resources', (req, res) => {
    // To read query string parameters (?sortBy=title)
    const sortBy = req.query.sortBy;
    // Return the resources
    res.send(resources);
});
 
// Getting a single resource
app.get('/api/resources/:id', (req, res) => {
    const resourceId = req.params.id;
    // Lookup the resource and if not found, return 404
    res.status(404).send('Resource not found.');
    // Else, return the resource object
    res.send(resource);
});
 
// Updating a resource
app.put('/api/resources/:id', (req, res) => {
    // If resource not found, return 404, otherwise update it
    // and return the updated object.
});
 
// Deleting a resource
app.delete('/api/resources/:id', (req, res) => {
    // If resource not found, return 404, otherwise delete it
    // and return the deleted object.
});
 
// Listen on port 4000
//app.listen(4000, () => console.log('Listening…'));
 
// Reading the port from an environment variable
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("listenning port ",port));