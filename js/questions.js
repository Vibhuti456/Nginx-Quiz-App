// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The markup language used to write Docker configuration files is:",
    answer: "YAML",
    options: [
      "JSON",
      "YAML",
      "XML",
      "HTML"
    ]
  },
    {
    numb: 2,
    question: "What is Docker?",
    answer: "Containerization Platform",
    options: [
      "Programming Language",
      "Text Editor",
      "Containerization Platform",
      "Web Server"
    ]
  },
    {
    numb: 3,
    question: "Which command is used to create a new Docker image?",
    answer: "docker build",
    options: [
      "docker build",
      "docker pull",
      "docker run",
      "docker commit"
    ]
  },
    {
    numb: 4,
    question: "What does the Dockerfile contain?",
    answer: "Instructions for building a Docker image",
    options: [
      "Compiled source code",
      "Docker images",
      "Binary data",
      "Instructions for building a Docker image"
    ]
  },
    {
    numb: 5,
    question: "What is a Docker container?",
    answer: "A running instance of a Docker image",
    options: [
      "A running instance of a Docker image",
      "A lightweight virtual machine",
      "A storage volume",
      "A service running on Docker Swarm"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
    numb: 6,
    question: "What command is used to list all running Docker containers?",
    answer: "docker ps",
    options: [
      "docker list",
      "docker show",
      "docker ps",
      "docker display"
    ]
  },
];
