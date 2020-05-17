	
const getBlogPost = () => {
    setTimeout(() => {
        return {
            title: 'JavaScript Callbacks'
        }
    }, 2000);
};
 
const blogpost = getBlogPost();
console.log(blogpost.title);