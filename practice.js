const post = [{title: 'POST'}];
var active;
var interval;
function getPost() {
    clearInterval(interval);
    interval = setTimeout( () => {
        console.group(post);
        console.log(active);
        
    }, 1000);

}
    function createPost() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                post.push({title: 'POST'});
                
                resolve();
            }, 1000)
        }) 
    }
    function deletePost(){
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if(post.length > 0){
                    const poppedElement  = post.pop();
                    resolve(poppedElement);
                } else {
                    reject("ERROR: ARRAY IS EMPTY")
                }
            }, 1000)
        })
    }
    function updateLastUserActivityTime() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                active= new Date();
                resolve(active);
            }, 1000)
        }) 
    }
   Promise.all([createPost(),createPost(),createPost(),createPost(),updateLastUserActivityTime()]).then(
    ()=>{
        getPost();
        deletePost().then(()=>{
            (getPost())
        })

    }
   )