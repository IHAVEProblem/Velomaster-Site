document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.table_option');
  const tables = document.querySelectorAll('.table');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const tabEl = e.currentTarget.parentNode;
      const tabIndex = [...tabEl.parentNode.children].indexOf(tabEl);

      showTable(tabIndex);
    });
  });

  const showTable = index => {
    tables.forEach(elem => elem.classList.remove('active'));
    tables.forEach(elem => elem.classList.remove('op'));
    tables[index].classList.add('active');

    setTimeout(() => {
      tables[index].classList.add('op');
    }, 20);

    tabs.forEach(elem => elem.classList.remove('active'));
    tabs.forEach(elem => elem.classList.remove('op'));
    tabs[index].classList.add('active');
  }
});