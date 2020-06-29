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

async function displayComments() {
    try {
        const user = await getUser(1);
        const blogposts = await getBlogPosts(user.name);
        const comments = await getComments(blogposts[0]);
        console.log(comments);
    } catch (err) {
        console.log('Error', err.message);
    }
}

displayComments();