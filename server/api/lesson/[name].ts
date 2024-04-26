import {H3Response} from "h3";

export default ((event) => {
  const lessonName = event.context.params.name

  if (lessonName == 'nuxt3-hands-on') {
    return {
      title: 'Nuxt 3 Hands On',
      message: 'In Nuxt 3 Hands ON, I share some interesting lessons I learned while beginning a new project in the Nuxt 3.' +
        'I cover the different kinds of state and more. ',
      image: '/img/nuxt3.svg',
      link: 'https://www.youtube.com/embed/8IOgwHGXqdM',
      tags: [{title: 'Front End', link: '/'}, {title: 'Nuxt3', link: '/'}]
    }
  }

  if (lessonName == 'nuxt-routing') {
    return {
      title: 'Nuxt 3 Routing',
      message: 'In Nuxt 3 Hands ON, I share some interesting lessons I learned about routing in the Nuxt 3.' +
        'I cover the different kinds of state and more. ',
      image: '/img/nuxt3.svg',
      link: 'https://www.youtube.com/embed/STazlLpEsm4',
      tags: [{title: 'Front End', link: '/'}, {title: 'Nuxt3', link: '/'}]
    }
  }

  if (lessonName == 'fast-ddd-laravel') {
    return {
      title: 'Fast DDD In Laravel',
      message: 'In this video I introduce a package to make domain driven design implementation in laravel fast and easy.',
      image: '/img/nuxt3.svg',
      link: 'https://www.youtube.com/embed/nzHp8KREwvo',
      tags: [{title: 'Laravel', link: '/'}, {title: 'Domain Driven Design', link: '/'}]
    }
  }

  if (lessonName == 'phpunit') {
    return {
      title: 'TDD in PHP for Beginners',
      message: 'A hands on tutorial where I show you how to use php unit. We create a package by applying our client given requirements and apply them using php',
      image: '/img/nuxt3.svg',
      link: 'https://www.youtube.com/embed/iHLlixZChnk',
      tags: [{title: 'Testing', link: '/'}, {title: 'Test Driven Development', link: '/'}, {title: 'php unit', link: '/'}]
    }
  }

  return {
    title: 'Fast DDD In Laravel',
    message: 'In this video I introduce a package to make domain driven design implementation in laravel fast and easy.',
    image: '/img/nuxt3.svg',
    link: 'https://www.youtube.com/embed/nzHp8KREwvo',
    tags: [{title: 'Front End', link: '/'}, {title: 'Nuxt3', link: '/'}]
  }
})
