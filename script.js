// script.js
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === currentSlide? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 자동 슬라이드
setInterval(nextSlide, 5000); // 3초마다 다음 슬라이드로 넘어감

showSlide();

// Create chat button
const chatButton = document.createElement('button');
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.width = '50px';
chatButton.style.height = '50px';
chatButton.style.borderRadius = '50%';
chatButton.style.backgroundColor = '#87CEEB'; // Sky blue
chatButton.style.color = '#fff';
chatButton.style.cursor = 'pointer';
chatButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
chatButton.style.transition = 'all 0.3s ease-in-out';

const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgIcon.setAttribute('width', '24');
svgIcon.setAttribute('height', '24');
svgIcon.innerHTML = `
  <ellipse cx="12" cy="10" rx="10" ry="8" fill="#fff" />
  <polygon points="10,22 8,17 16,17" fill="#fff" />
`;


chatButton.appendChild(svgIcon);

// Create chat window
const chatWindow = document.createElement('div');
chatWindow.style.position = 'fixed';
chatWindow.style.bottom = '0';
chatWindow.style.right = '0';
chatWindow.style.width = '300px';
chatWindow.style.height = '400px';
chatWindow.style.backgroundColor = '#ADD8E6'; // Light sky blue
chatWindow.style.border = '1px solid #87CEEB'; // Sky blue
chatWindow.style.borderRadius = '10px';
chatWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
chatWindow.style.display = 'none';
chatWindow.style.transition = 'all 0.3s ease-in-out';

// Create chat header
const chatHeader = document.createElement('div');
chatHeader.style.backgroundColor = '#87CEEB'; // Sky blue
chatHeader.style.color = '#fff';
chatHeader.style.padding = '10px';
chatHeader.style.borderBottom = '1px solid #ADD8E6'; // Light sky blue
chatHeader.textContent = '챗봇';
chatHeader.style.borderRadius = '5px';

// Create chat body
const chatBody = document.createElement('div');
chatBody.style.padding = '20px';

// Create chat log
const chatLog = document.createElement('ul');
chatLog.style.listStyle = 'none';
chatLog.style.padding = '0';
chatLog.style.margin = '0';

// Create chat input
const chatInput = document.createElement('input');
chatInput.type = 'text';
chatInput.placeholder = '메시지를 입력하세요.';
chatInput.style.width = '90%';
chatInput.style.height = '30px';
chatInput.style.padding = '10px';
chatInput.style.border = '1px solid #87CEEB'; // Sky blue

// Create send button
const sendButton = document.createElement('button');
sendButton.textContent = '보내기';
sendButton.style.backgroundColor = '#87CEEB'; // Sky blue
sendButton.style.color = '#fff';
sendButton.style.padding = '10px 20px';
sendButton.style.border = 'none';
sendButton.style.borderRadius = '5px';
sendButton.style.cursor = 'pointer';

// Create close button
const closeButton = document.createElement('button');
closeButton.textContent = '닫기';
closeButton.style.position = 'absolute';
closeButton.style.bottom = '10px';
closeButton.style.right = '10px';
closeButton.style.backgroundColor = '#87CEEB'; // Sky blue
closeButton.style.color = '#fff';
closeButton.style.padding = '10px 20px';
closeButton.style.border = 'none';
closeButton.style.borderRadius = '5px';
closeButton.style.cursor = 'pointer';

// Add event listeners
chatButton.addEventListener('click', () => {
  chatWindow.style.display = 'block';
  chatButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  chatWindow.style.display = 'none';
  chatButton.style.display = 'block';
});

sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message !== '') {
    const chatMessage = document.createElement('li');
    chatMessage.textContent = message;
    chatLog.appendChild(chatMessage);
    chatInput.value = '';
  }
});

// Add elements to the page
document.body.appendChild(chatButton);
document.body.appendChild(chatWindow);
chatWindow.appendChild(chatHeader);
chatWindow.appendChild(chatBody);
chatBody.appendChild(chatLog);
chatBody.appendChild(chatInput);
chatBody.appendChild(sendButton);
chatWindow.appendChild(closeButton);