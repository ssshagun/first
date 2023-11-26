// Simulated database with user data and posts
let userData = {
    lastActivityTime: null
  };
  
  let posts = [
    { id: 1, content: 'Post 1' },
    { id: 2, content: 'Post 2' },
    { id: 3, content: 'Post 3' }
  ];
  
  // Function to update user's last activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        userData.lastActivityTime = new Date().toLocaleTimeString();
        resolve(userData.lastActivityTime);
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Function to create a post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve('Post created');
      }, 500); // Simulating a 0.5-second delay
    });
  }
  
  // Function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = posts.findIndex(post => post.id === postId);
        if (index !== -1) {
          posts.splice(index, 1);
          resolve('Post deleted');
        } else {
          reject('Post not found');
        }
      }, 500); // Simulating a 0.5-second delay
    });
  }
  
  // Usage
  createPost({ id: 4, content: 'Post 4' })
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
      return deletePost(4);
    })
    .then(() => {
      console.log('Post 4 deleted');
      console.log('Remaining Posts:', posts);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  