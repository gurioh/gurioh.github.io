import type { UIStrings } from "../types";

export default {
  nav: {
    home: "홈",
    posts: "글",
    tags: "태그",
    about: "소개",
    archives: "아카이브",
    search: "검색",
  },
  post: {
    publishedAt: "작성일",
    updatedAt: "수정",
    sharePostIntro: "공유하기",
    sharePostOn: "{{platform}}에 공유하기",
    sharePostViaEmail: "메일로 공유하기",
    tagLabel: "태그",
    backToTop: "맨 위로",
    tableOfContents: "목차",
    goBack: "뒤로",
    editPage: "이 글 수정하기",
    previousPost: "이전 글",
    nextPost: "다음 글",
  },
  pagination: {
    prev: "이전",
    next: "다음",
    page: "페이지",
  },
  home: {
    socialLinks: "링크",
    featured: "추천 글",
    recentPosts: "최근 글",
    allPosts: "전체 글 보기",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "태그",
    tagDesc: "이 태그가 달린 글",

    tagsTitle: "태그",
    tagsDesc: "글에 쓰인 태그 전체",

    postsTitle: "글",
    postsDesc: "지금까지 쓴 글 전체",

    archivesTitle: "아카이브",
    archivesDesc: "날짜별로 모아 본 글",

    searchTitle: "검색",
    searchDesc: "글 제목과 본문에서 찾기",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    skipTableOfContents: "목차 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    toggleTheme: "테마 바꾸기",
    searchPlaceholder: "검색어를 입력하세요",
    noResults: "검색 결과가 없어요",
    goToPreviousPage: "이전 페이지로",
    goToNextPage: "다음 페이지로",
  },
  notFound: {
    title: "404 Not Found",
    message: "페이지를 찾을 수 없어요",
    goHome: "홈으로",
  },
} satisfies UIStrings;
