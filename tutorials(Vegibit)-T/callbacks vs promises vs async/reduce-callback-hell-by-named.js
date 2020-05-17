function getUser(id, callbackfunc) {
    setTimeout(() => {
        console.log('Getting the user from the database...');
        callbackfunc({
            id: id,
            name: 'Vegibit'
        });
    }, 1000);
}

function getUserBlogPosts(user) {
    getBlogPosts(user.name, getPosts);
}
function displayComments(comments) {
    console.log(comments);
}

function getPosts(blogposts) {
    getComments(blogposts[0], displayComments);
}
function getBlogPosts(username, callbackfunc) {
    setTimeout(() => {
        console.log('Calling WordPress Rest API for posts');
        callbackfunc(['Post1', 'post2', 'post3']);
    }, 1000);
}
function getComments(post, callbackfunc) {
    setTimeout(() => {
        console.log('Calling WordPress Rest API for comments for ' + post);
        callbackfunc(['comments for ' + post]);
    }, 1000);
}

getUser(1, getUserBlogPosts);