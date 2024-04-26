
export default (name: string) => {
  const rowSize = 2


  const categories = [
    {
      title: 'Nuxt 3',
      message: 'Nuxt 3 for beginners course',
      image: '/img/nuxt3.svg',
      link: '/',
      lessonQuantity: 1,
      tags: [{title: 'Front End', link: '/'}]
    },
    {
      title: 'Laravel',
      message: 'Laravel For beginners course',
      image: '/img/laravel.svg',
      link: '/',
      lessonQuantity: 2,
      tags: [{title: 'Bank End', link: '/'}]
    },
    {
      title: 'PHP',
      message: 'Ultimate PHP Course',
      image: '/img/php-logo.svg',
      link: '/',
      lessonQuantity: 2,
      tags: [{title: 'Bank End', link: '/'}]
    },
    {
      title: 'Nginx',
      message: 'Nginx Course for Beginners',
      image: '/img/nginx.svg',
      link: '/',
      lessonQuantity: 0,
      tags: [{title: 'Servers', link: '/'}]
    },
    {
      title: 'Docker',
      message: 'Docker Course for Beginners',
      image: '/img/docker.svg',
      link: '/',
      tags: [{title: 'containerization', link: '/'}]
    },
    {
      title: 'Linux',
      message: 'Linux Course for Beginners',
      image: '/img/linux.svg',
      link: '/',
      tags: [{title: 'OS', link: '/'}]
    }
  ]


  let row = [];
  let i, l, chunkSize = rowSize;

  for (i = 0, l = categories.length; i < l; i += chunkSize) {
    row.push(categories.slice(i, i + chunkSize));
  }
  return row;
}

