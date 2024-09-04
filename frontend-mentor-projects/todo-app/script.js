document.addEventListener('DOMContentLoaded', () => {
  const totalTasks = 6;
  let completedTasks = 0;
  const itemsLeft = document.querySelector('.summary');
  const headerIcon = document.querySelector('.header-icon');
  let isDarkMode = false;

  function toggleTheme() {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#e7e8ec';
      document.querySelectorAll('.textbox').forEach(textbox => textbox.style.color = '#47464d');
      document.querySelectorAll('.filter p').forEach(p => p.style.color = '#8f8989');
      document.querySelectorAll('.filter p:hover').forEach(p => p.style.color = '#47464d');
      document.querySelectorAll('.search-circle-box, .search-circle, .search-input-box, .list, .status, .filter').forEach(el => el.style.backgroundColor = '#ffffff');
      headerIcon.src = 'image/icon-moon.svg';
    } else {
      document.body.style.backgroundColor = '#181824';
      document.querySelectorAll('.textbox').forEach(textbox => textbox.style.color = '#ffffff');
      document.querySelectorAll('.filter p').forEach(p => p.style.color = '#8f8989');
      document.querySelectorAll('.filter p:hover').forEach(p => p.style.color = '#ffffff');
      document.querySelectorAll('.search-circle-box, .search-circle, .search-input-box, .list, .status, .filter').forEach(el => el.style.backgroundColor = '#24263b');
      headerIcon.src = 'image/icon-sun.svg';
    }
    isDarkMode = !isDarkMode;
  }

  function updateItemsLeft() {
    itemsLeft.textContent = `${totalTasks - completedTasks} items left`;
  }

  headerIcon.addEventListener('click', toggleTheme);

  document.querySelectorAll('.task-box').forEach(taskBox => {
    taskBox.addEventListener('click', function(event) {
      if (event.target.closest('.cross-box')) return;

      const textBox = taskBox.querySelector('.textbox p');
      const crossIcon = taskBox.querySelector('.cross-box img');
      const circle = taskBox.querySelector('.circle');

      if (textBox.style.textDecoration === 'line-through') {
        textBox.style.textDecoration = 'none';
        crossIcon.style.display = 'none';
        circle.style.background = '#ffffff';
        circle.style.border = '1px solid #cdcdd1';
        circle.innerHTML = '';
        completedTasks--;
      } else {
        textBox.style.textDecoration = 'line-through';
        crossIcon.style.display = 'block';
        circle.style.background = 'linear-gradient(135deg, #9c45e7, #60a1ff)';
        circle.style.border = 'none';
        const checkIcon = document.createElement('img');
        checkIcon.src = 'image/icon-check.svg';
        checkIcon.style.width = '8px';
        checkIcon.style.height = '8px';
        circle.innerHTML = '';
        circle.appendChild(checkIcon);
        completedTasks++;
      }

      updateItemsLeft();
    });
  });

  document.querySelectorAll('.cross-box').forEach(crossBox => {
    crossBox.addEventListener('click', function(event) {
      event.stopPropagation();

      const taskBox = this.closest('.task-box');
      const textBox = taskBox.querySelector('.textbox p');
      const circle = taskBox.querySelector('.circle');

      if (textBox.style.textDecoration === 'line-through') {
        textBox.style.textDecoration = 'none';
        this.querySelector('img').style.display = 'none';
        circle.style.background = '#ffffff';
        circle.style.border = '1px solid #cdcdd1';
        circle.innerHTML = '';
        completedTasks--;
        updateItemsLeft();
      }
    });
  });

  updateItemsLeft();
});
