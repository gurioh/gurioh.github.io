import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://gurioh.github.io/",
    title: "Hoon's Dev Log",
    description: "풀필먼트 출고 시스템을 만드는 백엔드 개발자의 기술 블로그",
    author: "Hoon Oh",
    profile: "https://github.com/gurioh",
    ogImage: "default-og.jpg",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/gurioh/gurioh.github.io/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/gurioh" },
    { name: "linkedin", url: "https://www.linkedin.com/in/hoon-oh-933b0a120/" },
    { name: "mail",     url: "mailto:stockhoon5@gmail.com" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
