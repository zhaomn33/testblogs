module.exports = {
  "title": "test",
  "description": "test",
  "dest": "dist",
  "base": "/testblogs/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "z",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      'cursor-effects',
      {
        "size": 2, // size of the particle, default: 2
        "shape": 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
        "zIndex": 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        "theme": ['whiteCat', 'haru2', 'blackCat', 'z16'],
        "width": 200,
        "height": 300,
        "messages":{
          "welcome": '欢迎来到我的博客~',
          "home": '心里的花，我想要带你回家。',
          "theme": '你想要找我其他的小伙伴么',
          "close": '一会儿再见吧～'
        },
        "clean": true
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-back-to-top'
    ]
  ]
}