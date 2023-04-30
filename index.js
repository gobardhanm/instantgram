const avatar = document.getElementById("avatar")
const postSec = document.getElementById("post-sec")
const icons = document.getElementById("icons")
const likes = document.getElementById("likes")
const username = document.getElementById("username")
const caption = document.getElementById("caption")
const artistName = document.getElementById("name")
const add = document.getElementById("add")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853 ",
        location: "Zundert, Netherlands",
        avatar: "imgs/avatar-vangogh.jpg",
        post: "imgs/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"

    },
    {
        name: "Gustave Courbet",
        username: "gus1819 ",
        location: "Ornans, France",
        avatar: "imgs/avatar-courbet.jpg",
        post: "imgs/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735 ",
        location: "Paris, France",
        avatar: "imgs/avatar-ducreux.jpg",
        post: "imgs/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"
    }
]

function renderAllPosts(){
    for(let i = 0; i < posts.length; i++){

        avatar.innerHTML = `<img src="${posts[i].avatar}" alt="avatar" class="avatar-img">`
    
        artistName.textContent = `${posts[i].name}`
    
        add.textContent = `${posts[i].location}`
    
        postSec.innerHTML = `<img src="${posts[i].post}" alt="the-post" class="the-post" id="the-post">`
    
        icons.innerHTML = 
        `
        <img src="${posts[i].heartIcon}" alt="like-btn" class="like-btn" id="like-btn">
                        
        <img src="${posts[i].commentIcon}" alt="comment-btn" class="comment-btn">
                        
        <img src="${posts[i].shareIcon}" alt="share-btn" class="share-btn">
        `
    
        likes.textContent = `${posts[i].likes} likes`
    
        username.innerHTML = `${posts[i].username}`
    
        caption.innerHTML += `${posts[i].comment}`
       
    
    }
}




renderAllPosts();

