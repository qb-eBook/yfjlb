module.exports = {
  base: '/yfjlb/',
  dest: './dist',
  title: '语法俱乐部',
  description: '语法俱乐部，电子书，旋元佑',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: [
      { title: '序 - 我学英语的经验', path: '/chapters/01.md' },
      { title: '前言', path: '/chapters/02.md' },
      // 侧边栏分组
      {
        title: '第一篇 初级句型',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/chapters/03.md', '第一章 基本句型及补语'],
          ['/chapters/04.md', '第二章 名词词组与冠词'],
          ['/chapters/05.md', '第三章 动词时态'],
          ['/chapters/06.md', '第四章 不定词短语'],
          ['/chapters/07.md', '第五章 动名词'],
          ['/chapters/08.md', '第六章 分词'],
          ['/chapters/09.md', '第七章 形容词'],
          ['/chapters/10.md', '第八章 副词'],
          ['/chapters/11.md', '第九章 语气'],
          ['/chapters/12.md', '第十章 介系词'],
          ['/chapters/13.md', '第十一章 主语动词一致性']
        ]
      },
      {
        title: '第二篇 中级句型',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/14.md', '第十二章 名词从句'],
          ['/chapters/15.md', '第十三章 副词从句'],
          ['/chapters/16.md', '第十四章 关系从句'],
          ['/chapters/17.md', '第十五章 对等连接词与对等从句']
        ]
      },
      {
        title: '第三篇 高级句型',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/18.md', '第十六章 从属从句简化的通则'],
          ['/chapters/19.md', '第十七章 形容词从句简化'],
          ['/chapters/20.md', '第十八章 名词从句简化'],
          ['/chapters/21.md', '第十九章 副词从句简化之一'],
          ['/chapters/22.md', '第二十章 副词从句简化之二'],
          ['/chapters/23.md', '第二十一章 简化从句练习'],
          ['/chapters/24.md', '第二十二章 倒装句']
        ]
      },
    ]
  }
}