function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting the user from the database...');
            resolve({
                id: id,
                name: 'Vegibit'
            });
        }, 1000);
    });
}
 
function getBlogPosts(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling WordPress Rest API for posts');
            resolve(['Post1', 'post2', 'post3']);
        }, 1000);
    });
}
 
function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling WordPress Rest API for comments for ' + post);
            resolve(['comments for ' + post]);
        }, 1000);
    });
} 

getUser(1)
    .then(user => getBlogPosts(user.name))
    .then(blogposts => getComments(blogposts[0]))
    .then(comments => console.log(comments))
    .catch(err => console.log('Error: ', err.message));