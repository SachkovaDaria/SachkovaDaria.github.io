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
      item.classList.remove('tab-header-item--active');
    })
  }

  function showTab (i=0) {
    tabContent[i].classList.add('show');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tab-header-item--active');
  }

  hideTab();
  showTab();


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
