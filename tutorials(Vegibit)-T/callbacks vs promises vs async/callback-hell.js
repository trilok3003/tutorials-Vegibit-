
function getUser(id, callbackfunc) {
    setTimeout(() => {
        console.log('Getting the user from the database...');
        callbackfunc({
            id: id,
            name: 'Vegibit'
        });
    }, 1000);
}
 
function getBlogPosts(username, callbackfunc) {
    setTimeout(() => {
        console.log('Calling  Rest API for posts');
        callbackfunc(['Post1', 'post2', 'post3']);
    }, 1000);
}
 
function getComments(post, callbackfunc) {
    setTimeout(() => {
        console.log('Calling  Rest API for comments for ' + post);
        callbackfunc(['comments for ' + post]);
    }, 1000);
}


getUser(1,(user)=>{
    getBlogPosts(user.name,(blogs)=>{
        getComments(blogs[0],(comments)=>{
         console.log(user,blogs[0],comments)
        })
    })
})