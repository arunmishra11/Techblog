const { Post } = require('../models');

const postData = [
  {
    title: 'AI evolution',
    content: 'AI evolution has transitioned from rule-based systems to advanced machine learning and deep learning models, enabling machines to perform complex tasks like natural language understanding and image recognition. This rapid progress is driving innovations across various industries, from healthcare to autonomous vehicles.',
    user_id: 1
    
  },
  {
    title: 'Tools for AI',
    content: 'MKey tools for AI development include frameworks like TensorFlow and PyTorch, which facilitate building and training deep learning models. Additionally, tools like Jupyter Notebooks and cloud platforms such as Google Cloud AI and AWS AI provide essential resources for data analysis, model deployment, and scalable computing',
    user_id: 2
  },
  {
    title: 'NVDIAs Jump',
    content: 'NVIDIA has evolved from a graphics processing unit (GPU) manufacturer into a leader in AI and high-performance computing, revolutionizing industries with its advanced GPU technology. Their innovations in parallel computing and AI hardware have made significant impacts in fields like gaming, data centers, and autonomous vehicles.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;