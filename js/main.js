document.addEventListener('DOMContentLoaded', function(){
  const selector = '.table_option';
  const elems = Array.from(document.querySelectorAll(selector));
  const navigation = document.querySelector('.table-nav');

  function makeActive(e) {
    const target = e.target;

    if (!target || !target.matches(selector)) {
      return;
    }

    elems.forEach(elem => elem.classList.remove('active'));
    e.target.classList.add('active');
  };

  navigation.addEventListener('click', makeActive);
});

document.addEventListener('DOMContentLoaded', function(){

  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  const tab3 = document.getElementById('tab3');
  const tab4 = document.getElementById('tab4');

  function showTable1(){

    const table1 = document.querySelector('.table1');
    console.log(table1)
    const tables = document.querySelectorAll('.table')

    tables.forEach(elem => elem.classList.remove('active'))
    table1.classList.add('active');
  };
  function showTable2(){

    const table2 = document.querySelector('.table2');
    const tables = document.querySelectorAll('.table')

    tables.forEach(elem => elem.classList.remove('active'))
    table2.classList.add('active');
  };
  function showTable3(){

    const table3 = document.querySelector('.table3');
    const tables = document.querySelectorAll('.table')

    tables.forEach(elem => elem.classList.remove('active'))
    table3.classList.add('active');
  };
  function showTable4(){

    const table4 = document.querySelector('.table4');
    const tables = document.querySelectorAll('.table')

    tables.forEach(elem => elem.classList.remove('active'))
    table4.classList.add('active');
  };

  tab1.addEventListener('click', showTable1);
  tab2.addEventListener('click', showTable2);
  tab3.addEventListener('click', showTable3);
  tab4.addEventListener('click', showTable4);

});