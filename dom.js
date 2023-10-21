import { parallax, responsiveSizeAdjustment, infiniteScroll } from './func.js';

const header = document.createElement('header');
const headerTextContainer = document.createElement('div');
headerTextContainer.classList = 'header-container';

const themeSwitch = document.createElement('label');
themeSwitch.className = 'switch';

const themeSwitchInput = document.createElement('input');
themeSwitchInput.type = 'checkbox';
themeSwitchInput.setAttribute('checked', true);
themeSwitchInput.setAttribute('aria-label', 'Dark theme');

const themeSwitchSpan = document.createElement('span');
themeSwitchSpan.className = 'slider';

const name = document.createElement('h1');
name.textContent = 'LAYTH ALQADHI';
name.classList = 'name';
const jobTitle = document.createElement('h2');
jobTitle.textContent = 'Web Developer';
jobTitle.classList = 'job-title';

function createImage(src, className) {
  const img = document.createElement('img');
  img.src = src;
  img.classList = className + ' header-images';
  img.loading = 'lazy';
  return img;
}

const imagesContainer = document.createElement('div');
imagesContainer.classList = 'images-container';
imagesContainer.setAttribute('aria-hidden', 'true');

const hillOneImg = createImage('./images/hill-one-light.png', 'hill-one');
const hillTwoImg = createImage('./images/hill-two-light.png', 'hill-two');
const hillThreeImg = createImage('./images/hill-three-light.png', 'hill-three');
const hillFourImg = createImage('./images/hill-four-light.png', 'hill-four');
const personImg = createImage('./images/person-light.png', 'person');

themeSwitch.append(themeSwitchInput, themeSwitchSpan);
imagesContainer.append(hillOneImg, hillTwoImg, hillThreeImg, hillFourImg, personImg);
headerTextContainer.append(name, jobTitle);
header.append(themeSwitch, imagesContainer, headerTextContainer);

function createSection(tagName, className, titleText, orderText) {
  const section = document.createElement(tagName);
  section.classList = className;

  const title = document.createElement('h2');
  title.textContent = titleText;
  title.classList = `${className}-title`;

  section.append(title);

  return section;
}

const aboutSection = createSection('section', 'about', 'About');
const aboutSectionParagraph = document.createElement('p');
aboutSectionParagraph.classList = 'about-section-paragraph';
aboutSectionParagraph.textContent = "A self-taught web developer on a perpetual learning journey. I firmly believe that in the face of doubt, self-belief becomes our most valuable asset. My passion for coding began as a personal challenge, and it has grown into a path of self-improvement and creativity. I thrive on the endless possibilities that the world of web development offers, and I'm committed to crafting innovative digital experiences.";

const scroller = document.createElement('div');
scroller.classList = 'scroller';
scroller.setAttribute('aria-hidden', true);

function createIcon(iconClass) {
    const icon = document.createElement('i');
    icon.classList = iconClass;
    return icon;
}

const skillsList = document.createElement('div');
skillsList.classList = 'skills-list';

const icons = [
    'devicon-git-plain', 'devicon-github-plain', 'devicon-html5-plain',
    'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-jest-plain',
    'devicon-babel-plain', 'devicon-webpack-plain', 'devicon-npm-plain',
    'devicon-figma-plain', 'devicon-photoshop-plain', 'devicon-illustrator-plain'
];

const iconElements = icons.map(iconClass => createIcon(iconClass));
const iconElementClones = icons.map(iconClass => createIcon(iconClass));

skillsList.append(...iconElements, ...iconElementClones);
scroller.append(skillsList);
aboutSection.append(aboutSectionParagraph, scroller);

const projectsSection = createSection('section', 'projects', 'Projects');

function createProjectContainer(imgSrc, imgAlt, title, description, repository, preview) {
  const projectContainer = document.createElement('div');
  projectContainer.classList = 'project-container';
  const projectImg = document.createElement('img');
  projectImg.classList = 'project-img';

  projectImg.src = imgSrc;
  projectImg.alt = imgAlt;
  projectImg.loading = 'lazy';
  
  const projectDetailsContainer = document.createElement('div');
  projectDetailsContainer.classList = 'project-details-container';
  
  const projectBackgroundDeclaration = document.createElement('div');
  projectBackgroundDeclaration.classList = 'project-background-declaration';
  
  const projectTitle = document.createElement('h3');
  projectTitle.classList = 'project-title';
  projectTitle.textContent = title;
  
  const projectDescription = document.createElement('p');
  projectDescription.classList = 'project-description';
  projectDescription.textContent = description;

  const projectLinks = document.createElement('div');
  projectLinks.classList = 'project-links';
  
  const previewLink = document.createElement('a');
  previewLink.textContent = 'Live preview';
  previewLink.href = preview;
  previewLink.target = '_blank';
  previewLink.classList = 'link';
  
  const previewIcon = document.createElement('i');
  previewIcon.textContent = 'arrow_outward';
  previewIcon.setAttribute('aria-hidden', true);
  previewIcon.classList = 'material-symbols-outlined';

  const repositoryLink = document.createElement('a');
  repositoryLink.href = repository;
  repositoryLink.textContent = 'View code';
  repositoryLink.target = '_blank';
  repositoryLink.classList = 'link';

  const repositoryIcon = document.createElement('i');
  repositoryIcon.textContent = 'arrow_outward';
  repositoryIcon.setAttribute('aria-hidden', true);
  repositoryIcon.classList = 'material-symbols-outlined';
  
  previewLink.append(previewIcon);
  repositoryLink.append(repositoryIcon);
  projectLinks.append(previewLink, repositoryLink);
  projectDetailsContainer.append(projectTitle, projectDescription, projectLinks);
  projectContainer.append(projectBackgroundDeclaration, projectImg,  projectDetailsContainer);
  
  return projectContainer;
}

const projectsContainer = document.createElement('div');
projectsContainer.classList = 'projects-container';

const projectContainer1 = createProjectContainer('./images/weather-app.jpg',
  'Weather application',
  'Weather app',
  'A web application that allows users to check the weather forecast for a specific location. It utilizes the WeatherAPI to fetch weather data and provides users with detailed weather information for the current day and the next two days.',
  'https://github.com/LaythAlqadhi/weather-app',
  'https://LaythAlqadhi.github.io/weather-app');
const projectContainer2 = createProjectContainer('./images/battleship.jpg',
  'Battleship game',
  'Battleship',
  'A web application contains a JavaScript implementation of the classic game Battleship. It focuses on Test Driven Development (TDD) principles.',
  'https://github.com/LaythAlqadhi/battleship',
  'https://LaythAlqadhi.github.io/battleship');
const projectContainer3 = createProjectContainer('./images/todo-list.jpg',
  'To-do application',
  'To-do list',
  'A web application that allows users to create a to-do list. Users can add new tasks, mark them as completed, and delete them.',
  'https://github.com/LaythAlqadhi/to-do-list',
  'https://LaythAlqadhi.github.io/to-do-list');
const projectContainer4 = createProjectContainer('./images/library.jpg',
  'Library application',
  'Library',
  'A web application that allows users to create a personal book library. Users can enter the title, author, number of pages, and select whether they have read the book or not. The entered book details are displayed in a table, where users can also mark books as read or not read, as well as remove books from the library.',
  'https://github.com/LaythAlqadhi/library',
  'https://LaythAlqadhi.github.io/library');
const projectContainer5 = createProjectContainer('./images/calculator.jpg',
  'Calculator application',
  'Calculator',
  'A calculator application that provides basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator has a responsive user interface and supports keyboard input.',
  'https://github.com/LaythAlqadhi/calculator',
  'https://LaythAlqadhi.github.io/calculator');
const projectContainer6 = createProjectContainer('./images/etch-a-sketch.jpg',
  'Etch a sketch game',
  'Etch a sketch',
  'A web application that allows you to draw on a grid of boxes by changing their colors. You can choose the size of the grid, switch between different drawing modes (B&W, Random, Delete), and clear the drawing.',
  'https://github.com/LaythAlqadhi/etch-a-sketch',
  'https://LaythAlqadhi.github.io/etch-a-sketch');

projectsContainer.append(projectContainer1, projectContainer2, projectContainer3, projectContainer4, projectContainer5, projectContainer6);
projectsSection.append(projectsContainer);

const footer = createSection('footer', 'contact', 'Contact');
const footerContainer = document.createElement('div');
footerContainer.classList = 'footer-container';

const form = document.createElement('form');
form.classList = 'contact-form';

function createInputContainer(tagName, type, id, content) {
  const container = document.createElement('div');
  container.classList = 'container';

  const input = document.createElement(tagName);
  if (tagName === 'input') input.type = type;
  input.placeholder = '‎';
  input.id = id;
  input.name = id;
  input.required = true;
  
  const label = document.createElement('label');
  label.htmlFor = id;
  label.textContent = content;
  container.append(input, label);
  
  return container;
}

const nameContainer = createInputContainer('input', 'text', 'name', 'Name');
const emailContainer = createInputContainer('input', 'text', 'email', 'Email');
const messageContainer = createInputContainer('textarea', 'text', 'message', 'Message');

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.classList = 'submit';

const copyright = document.createElement('p');
copyright.textContent = '© 2023 Layth Alqadhi';
copyright.classList = 'copyright';

function createLink(href, textContent) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = textContent;
  link.target = '_blank';
  link.classList = 'link';

  const icon = document.createElement('i');
  icon.textContent = 'arrow_outward';
  icon.setAttribute('aria-hidden', true);
  icon.classList = 'material-symbols-outlined';

  link.append(icon);
  return link;
}

const socialMediaContainer = document.createElement('div');
socialMediaContainer.classList = 'social-media';

const contactLinkedinLink = createLink('https://www.linkedin.com', 'Linkedin');
const contactGithubLink = createLink('https://github.com/LaythAlqadhi', 'Github');

const openSourceLink = createLink('https://github.com/LaythAlqadhi/personal-portfolio', 'My portfolio is open source');

socialMediaContainer.append(contactLinkedinLink, contactGithubLink);
footerContainer.append(form, socialMediaContainer, copyright, openSourceLink)
form.append(nameContainer, emailContainer, messageContainer, submitButton);
footer.append(footerContainer);
document.body.append(header, aboutSection, projectsSection, footer);

parallax(hillOneImg, 0.085);
parallax(hillTwoImg, 0.065);
parallax(hillThreeImg, 0.045);
parallax(hillFourImg, 0.025);

const projectDetailsContainer = document.querySelectorAll('.project-details-container');
projectDetailsContainer.forEach(container => {
  parallax(container, -0.003);
})

const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
  parallax(img, 0.002);
});

let isDarkTheme = false;

themeSwitchInput.addEventListener('change', () => {
  isDarkTheme = !isDarkTheme;
  switchDarkTheme();
});

function switchDarkTheme() {
  const imageElements = document.querySelectorAll('.header-images');

  imageElements.forEach(img => {
    const currentSrc = img.src;
    const newSrc = isDarkTheme ? currentSrc.replace('-light.png', '.png') : currentSrc.replace('.png', '-light.png');
    img.src = newSrc;
  });

  imagesContainer.style.background = isDarkTheme ? '#eaeaea'  : '#ffffff';
  document.body.style.setProperty('--primary-color', isDarkTheme ? '#eaeaea' : '#ffffff');
  document.body.style.setProperty('--secondary-color', isDarkTheme ? '#050505' : '#dee3e3');
  document.body.style.setProperty('--text-color', isDarkTheme ? '#dee3e3' : '#050505');
}

const elements = document.querySelectorAll('.header-images');
elements.forEach(element => {
  responsiveSizeAdjustment(element, 'height', 525);
})

infiniteScroll(skillsList, { scrollStep: 0.035, maxScrollLimit: 50, transitionType: 'translateX' });
