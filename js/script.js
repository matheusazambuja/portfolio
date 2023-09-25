const KNOWLEDGE_TEXT_DEFAULT =
  'Passe o mouse para entender um pouco sobre cada tecnologia';
const SUBTITLE_SKILLS = 'Desenvolvedor Front-end e Web Designer';
const SPEED_TYPE_WRITER = 70;
const KNOWLEDGE_TEXT_CARDS_LIST = [
  'HTML é uma liguagem de marcação que utilizamos para definir as informações que a página exibirá.',
  'CSS é uma linguagem de folha de estilo, utilizada para definir tudo que dizer respeito a estilização de páginas web.',
  'Javascript é uma linguaguem de programação, utilizada principalmente para realizar efeitos dinâmicos em páginas web.',
  'Angular é um framework. Seu maior objetivo é resolver problemas comuns de aplicação web: estruturação de projetos, segurança em comunicação de dados e performance.',
  'Typescript é um superset do Javascript que introduz recursos que não estão disponíveis de forma nativa.',
  'RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos. Muito utilizado para dar confiabilidade e performance para a aplicação.',
  'Sass é um pré-processador CSS que adiciona recursos que não estão disponíveis de forma nativa.',
  'Jest é um poderoso framework de testes em JavaScript com um foco na simplicidade.',
  'Testing Library é uma biblioteca de testes comumente utilizada para criar teste de integração da nossa aplicação web.',
];

document.addEventListener('DOMContentLoaded', () => {
  handleTypeWriter(0);
  initListernersKnowledgeCards();
  initListenersMenuMobile();
});

function handleTypeWriter(index) {
  document.getElementById('home-job-subtitle').innerHTML +=
    SUBTITLE_SKILLS.charAt(index);

  setTimeout(() => {
    if (index < SUBTITLE_SKILLS.length - 1) {
      handleTypeWriter(index + 1);
    }
  }, SPEED_TYPE_WRITER);
}

function initListernersKnowledgeCards() {
  const knowledgeTextElement = document.getElementById('skill-text');
  const knowledgeCardElements = [
    ...document.getElementById('skill-items').children,
  ];
  knowledgeCardElements.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      knowledgeTextElement.innerHTML = KNOWLEDGE_TEXT_CARDS_LIST[index];
    });

    card.addEventListener('mouseleave', () => {
      knowledgeTextElement.innerHTML = KNOWLEDGE_TEXT_DEFAULT;
    });
  });

  knowledgeTextElement.innerHTML = KNOWLEDGE_TEXT_DEFAULT;
}

function initListenersMenuMobile() {
  document
    .getElementById('mobile-menu')
    .addEventListener('click', () => handleOpenMobileMenu());

  document.querySelectorAll('.menu__link').forEach((linkElement) => {
    linkElement.addEventListener('click', () => handleOpenMobileMenu());
  });
}

function handleOpenMobileMenu() {
  const activeMenuMobileClass = 'menu__hamburguer--active';
  const mobileMenuElement = document.getElementById('mobile-menu');
  const menuListElement = document.getElementById('menu-list');

  if (mobileMenuElement.classList.contains(activeMenuMobileClass)) {
    mobileMenuElement.classList.remove(activeMenuMobileClass);
    menuListElement.classList.remove('menu__list--active');

    return;
  }

  mobileMenuElement.classList.add(activeMenuMobileClass);
  menuListElement.classList.add('menu__list--active');
}
