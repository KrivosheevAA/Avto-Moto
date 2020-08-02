const tabs = () => {
  const buttonTabs = document.querySelector('.tabs__control-list');
  const tabsContentItem = document.querySelectorAll('.tabs__content-item');
  const buttonActive = document.querySelectorAll('.tabs__control-item');

  buttonTabs.addEventListener('click', showContent);

  function showContent (event) {
    if (event.target.className == 'tabs__control-item') {
      let dataTab = event.target.getAttribute('data-tab');
      for (let k = 0; k < buttonActive.length; k++) {
        buttonActive[k].classList.remove('tabs__control-item--active');
      }
      event.target.classList.add('tabs__control-item--active');
      for (let i = 0; i < tabsContentItem.length; i++) {
        if (dataTab == i) {
          tabsContentItem[i].classList.add('tabs__content-item--show');
        } else {
          tabsContentItem[i].classList.remove('tabs__content-item--show');
        }
      }
    }
  }
}
export default tabs;
