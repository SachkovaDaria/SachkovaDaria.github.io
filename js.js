// modal

const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');


modalTrigger.addEventListener('click', () => {
  modal.classList.toggle('show');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  modal.classList.toggle('show');
  document.body.style.overflow = '';
};

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=> {
        if (e.target === modal) {
        closeModal();
      }
 });

//tabs
 const tabs = document.querySelectorAll('.tab-header-item'),
      tabContent = document.querySelectorAll('.tab-content'),
      tabsParent = document.querySelector('.works__type');

  function hideTab() {
    tabContent.forEach (item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });
    tabs.forEach (item => {
      item.classList.remove('training-projects-active');
    })
  }

  function showTab (i=0) {
    tabContent[i].classList.add('show');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('training-projects-active');
  }

  hideTab();
  showTab();

  console.log("bnvn")

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tab-header-item')){

      tabs.forEach((item, i) => {
        if(target == item){
          hideTab();
          showTab(i);
        }
      });
    }
  });


