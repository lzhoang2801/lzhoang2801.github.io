export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Hoàng Hồng Quân',
      description: '',
    },
    theme: {
      customizable: false,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'Hoàng Hồng Quân',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Hướng dẫn',
        to: '/introduction',
        description: 'Chi tiết, dễ hiểu dành cho người Việt. Được góp nhặt từ nhiều nguồn và kinh nghiệm của bản thân.',
      }, {
        title: 'Dịch vụ',
        to: '/services',
        description: 'Cung cấp một hệ thống tối ưu, nhận đầy đủ phần cứng có thể trong thời gian ngắn nhất.',
      }, {
        title: 'Liên hệ',
        to: 'https://www.facebook.com/macforce2601',
        target: '_blank',
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/lzhoang2801/lzhoang2801.github.io',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/lzhoang2801/lzhoang2801.github.io',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/lzhoang2801/lzhoang2801.github.io',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/lzhoang2801/lzhoang2801.github.io/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});