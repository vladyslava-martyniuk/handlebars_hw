const menuData = {
    title: 'Теми, які вивчила протягом цього семестру',
   items: ['Оптимізація подій', 'Бібліотека Lodash. Throttle і Debounce', 
          'Концепція Intersection Observer', 'Знайомство з Node.js та Пакетний менеджер npm', 'Бібліотеки та фрейморки.', 
          'Модульність коду. Бандлер JS-модулів Parcel','Шаблонізація. Handlebars'],
   };
      const element = document.querySelector('#menu_template').innerHTML.trim();
      const template = Handlebars.compile(element);
      const generatedHtml = template(menuData);
      document.body.insertAdjacentHTML('afterbegin', generatedHtml);
      const button = document.querySelector('.menu_button');
        button.addEventListener('click', () => {
           alert('Дякую, за перевірене домашнє завдання!');
        });