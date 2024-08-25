document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton');
  const imageLight = document.getElementById('toggleImage');
  const imageDark = document.getElementById('toggleImageDark');

  button.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');

      if (document.body.classList.contains('dark-mode')) {
          imageLight.classList.add('hidden');
          imageDark.classList.remove('hidden');
      } else {
          imageLight.classList.remove('hidden');
          imageDark.classList.add('hidden');
      }
  });
});
