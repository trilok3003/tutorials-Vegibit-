	
const getBlogPost = (callback) => {
    setTimeout(() => {
        callback({
            title: 'JavaScript Callbacks'
        })
    }, 2000);
};
 
getBlogPost(post=>{console.log(post.title)});