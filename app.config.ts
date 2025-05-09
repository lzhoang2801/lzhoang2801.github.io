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
        description: 'Chi tiết, dễ hiểu dành cho người Việt. Được góp nhặt từ nhiều nguồn và kinh nghiệm của bản thân',
        links: [{
          title: 'Giới thiệu',
          to: '/introduction',
          description: 'Tổng quan về macOS và quá trình cài đặt',
        }, {
          title: 'Phần cứng',
          to: '/hardware',
          description: 'Xác định thông tin phần cứng và tính tương thích với macOS',
        }, {
          title: 'Thiết lập BIOS',
          to: '/setup-bios',
          description: 'Thay đổi các tuỳ chọn BIOS cần thiết để cài đặt macOS',
        }, {
          title: 'Chuẩn bị EFI',
          to: '/gathering-files',
          description: 'Tạo OpenCore EFI đơn giản với OpCore Simplify và kiến thức cần biết về EFI',
        }, {
          title: 'Tạo USB cài đặt',
          to: '/make-bootable-installer',
        }, {
          title: 'Cài đặt macOS',
          to: '/install-macos',
        }, {
          title: 'Làm quen với macOS',
          to: '/macos-getting-started',
        }]
      }, {
        title: 'Dịch vụ',
        to: '/services',
        description: 'Cung cấp một hệ thống tối ưu, nhận đầy đủ phần cứng có thể trong thời gian ngắn nhất',
      }, {
        title: 'Liên hệ',
        to: 'https://www.facebook.com/macforce2601',
        target: '_blank',
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/lzhoang2801/OpCore-Simplify',
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
        to: 'https://github.com/lzhoang2801/OpCore-Simplify',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/lzhoang2801/OpCore-Simplify',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/lzhoang2801/OpCore-Simplify/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});