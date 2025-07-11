import { KeyValue } from "@angular/common";
import { SolarTermInfo, Variation, Pentad, ExtendedVariation, Season } from "./solar-term-info";
import { FaviconInfo } from "./favicon";

export const DEFAULT_LOCALE = 'en';
export const DEFAULT_SOLAR_TERM_DISPLAY_LANG = 'zh';
export const MIN_DATE = new Date(1900, 0, 1, 0, 0, 0);
export const MAX_DATE = new Date(2199, 11, 31, 23, 59, 59);

export const KEY_VALUE_PIPE_ORIGINAL_ORDER = (a: KeyValue<any,any>, b: KeyValue<any,any>): number => { return 0; }

export const AVAILABLE_SOLAR_TERM_DISPLAY_LANGS = new Map<string, string>([
  [ 'zh', 'AVAILABLE_SOLAR_TERM_DISPLAY_LANGS.zh' ],
  [ 'ja', 'AVAILABLE_SOLAR_TERM_DISPLAY_LANGS.ja' ]
]);

export const FAVICONS = [
  <FaviconInfo>{ rel: 'icon', type: 'image/png', relativeHref: '/favicon-96x96.png', sizes: '96x96' },
  <FaviconInfo>{ rel: 'icon', type: 'image/svg+xml', relativeHref: '/favicon.svg' },
  <FaviconInfo>{ rel: 'shortcut icon', relativeHref: '/favicon.ico' },
  <FaviconInfo>{ rel: 'apple-touch-icon', relativeHref: '/apple-touch-icon.png', sizes: '180x180' },
];

export const SOLAR_TERMS = new Map<number, Season>([
  [ 315, <Season>{ 
      name: 'spring',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '春季', transliteration: 'spring.zh' } ],
        [ 'ja', <Variation>{ nativeName: '春', transliteration: 'spring.ja' } ]
      ]),
      solarTerms: new Map<number, SolarTermInfo>([
    [ 315, <SolarTermInfo>{
      name: 'solarterm.lichun',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '立春', transliteration: 'solarterm.lichun.zh' } ],
        [ 'ja', <Variation>{ nativeName: '立春', transliteration: 'solarterm.lichun.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 315, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '東風解凍', name: 'pentad.315.zh.translation',
              transliteration: 'pentad.315.zh.transliteration',
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '東風解凍', name: 'pentad.315.ja.translation',
              transliteration: 'pentad.315.ja.transliteration',
            }]
          ])
        }],
        [ 320, <Pentad>{
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '蟄蟲始振', name: 'pentad.320.zh.translation', 
              transliteration: 'pentad.320.zh.transliteration'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '黄鶯睍睆', name: 'pentad.320.ja.translation', 
              transliteration: 'pentad.320.ja.transliteration'
            }]
          ])
        }],
        [ 325, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '魚陟負冰', name: 'pentad.325.zh.translation', 
              transliteration: 'pentad.325.zh.transliteration'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '魚上氷', name: 'pentad.325.ja.translation', 
              transliteration: 'pentad.325.ja.transliteration'
            }]
          ])
        }],
      ])
     } ],
    [ 330, <SolarTermInfo>{
      name: 'solarterm.yushui',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '雨水', transliteration: 'solarterm.yushui.zh' } ],
        [ 'ja', <Variation>{ nativeName: '雨水', transliteration: 'solarterm.yushui.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 330, <Pentad>{
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '獺祭魚', name: 'pentad.330.zh.translation', 
              transliteration: 'pentad.330.zh.transliteration', 
              explanation: 'pentad.explanation.predators'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '土脉潤起', name: 'pentad.330.ja.translation', 
              transliteration: 'pentad.330.ja.transliteration', 
            }]
          ])
        }],
        [ 335, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '候雁北', name: 'pentad.335.zh.translation', 
              transliteration: 'pentad.335.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '霞始靆', name: 'pentad.335.ja.translation', 
              transliteration: 'pentad.335.ja.transliteration',
            }]
          ])
         }],
        [ 340, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '草木萌動', name: 'pentad.340.zh.translation', 
              transliteration: 'pentad.340.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '草木萌動', name: 'pentad.340.ja.translation', 
              transliteration: 'pentad.340.ja.transliteration',
            }]
          ])
        }],
      ])
     } ],
    [ 345, <SolarTermInfo>{
      name: 'solarterm.jingzhe',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '惊蛰', transliteration: 'solarterm.jingzhe.zh' } ],
        [ 'ja', <Variation>{ nativeName: '啓蟄', transliteration: 'solarterm.jingzhe.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 345, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '桃始華', name: 'pentad.345.zh.translation', 
              transliteration: 'pentad.345.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '蟄虫啓戸', name: 'pentad.345.ja.translation', 
              transliteration: 'pentad.345.ja.transliteration',
            }]
          ])
        }],
        [ 350, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '倉庚鳴', name: 'pentad.350.zh.translation', 
              transliteration: 'pentad.350.zh.transliteration',
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '桃始笑', name: 'pentad.350.ja.translation', 
              transliteration: 'pentad.350.ja.transliteration',
            }]
          ])
        }],
        [ 355, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '鷹化為鳩', name: 'pentad.355.zh.translation', 
              transliteration: 'pentad.355.zh.transliteration',
              explanation: 'pentad.explanation.transformation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '菜虫化蝶', name: 'pentad.355.ja.translation', 
              transliteration: 'pentad.355.ja.transliteration',
            }]
          ])
        }],
      ])
     } ],
		[ 0, <SolarTermInfo>{
      name: 'solarterm.chunfen',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '春分', transliteration: 'solarterm.chunfen.zh' } ],
        [ 'ja', <Variation>{ nativeName: '春分', transliteration: 'solarterm.chunfen.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 0, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '玄鳥至', name: 'pentad.0.zh.translation', 
              transliteration: 'pentad.0.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '雀始巣', name: 'pentad.0.ja.translation', 
              transliteration: 'pentad.0.ja.transliteration',
            }]
          ])
        }],
        [ 5, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '雷乃發聲', name: 'pentad.5.zh.translation', 
              transliteration: 'pentad.5.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '桜始開', name: 'pentad.5.ja.translation', 
              transliteration: 'pentad.5.ja.transliteration',
            }]
          ])
         }],
        [ 10, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '始電', name: 'pentad.10.zh.translation', 
              transliteration: 'pentad.10.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '雷乃発声', name: 'pentad.10.ja.translation', 
              transliteration: 'pentad.10.ja.transliteration',
            }]
          ])
        }],
      ])
     } ],
    [ 15, <SolarTermInfo>{
      name: 'solarterm.qingming',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '清明', transliteration: 'solarterm.qingming.zh' } ],
        [ 'ja', <Variation>{ nativeName: '清明', transliteration: 'solarterm.qingming.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 15, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '桐始華', name: 'pentad.15.zh.translation', 
              transliteration: 'pentad.15.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '玄鳥至', name: 'pentad.15.ja.translation', 
              transliteration: 'pentad.15.ja.transliteration',
            }]
          ])
        }],
        [ 20, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '田鼠化為鴽', name: 'pentad.20.zh.translation', 
              transliteration: 'pentad.20.zh.transliteration', 
              explanation: 'pentad.explanation.transformation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '鴻雁北', name: 'pentad.20.ja.translation', 
              transliteration: 'pentad.20.ja.transliteration',
            }]
          ])
         }],
        [ 25, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '虹始見', name: 'pentad.25.zh.translation', 
              transliteration: 'pentad.25.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '虹始見', name: 'pentad.25.ja.translation', 
              transliteration: 'pentad.25.ja.transliteration',
            }]
          ])
        }],
      ])
     }],
    [ 30, <SolarTermInfo>{
      name: 'solarterm.guyu',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '穀雨', transliteration: 'solarterm.guyu.zh' } ],
        [ 'ja', <Variation>{ nativeName: '穀雨', transliteration: 'solarterm.guyu.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 30, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '萍始生', name: 'pentad.30.zh.translation', 
              transliteration: 'pentad.30.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '葭始生', name: 'pentad.30.ja.translation', 
              transliteration: 'pentad.30.ja.transliteration',
            }]
          ])
        }],
        [ 35, <Pentad>{
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '鳴鳩拂其羽', name: 'pentad.35.zh.translation', 
              transliteration: 'pentad.35.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '霜止出苗', name: 'pentad.35.ja.translation',
              transliteration: 'pentad.35.ja.transliteration',
            }]
          ])
        }],
        [ 40, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '戴勝降於桑', name: 'pentad.40.zh.translation', 
              transliteration: 'pentad.40.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '牡丹華', name: 'pentad.40.ja.translation',
              transliteration: 'pentad.40.ja.transliteration',
            }]
          ])
        }],
      ])
     }] 
    ])
   } ],
   [ 45, <Season>{ 
      name: 'summer',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '夏季', transliteration: 'summer.zh' } ],
        [ 'ja', <Variation>{ nativeName: '夏', transliteration: 'summer.ja' } ]
      ]),
      solarTerms: new Map<number, SolarTermInfo>([
        [ 45, <SolarTermInfo>{
      name: 'solarterm.lixia',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '立夏', transliteration: 'solarterm.lixia.zh' } ],
        [ 'ja', <Variation>{ nativeName: '立夏', transliteration: 'solarterm.lixia.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 45, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '螻蟈鳴', name: 'pentad.45.zh.translation', 
              transliteration: 'pentad.45.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '蛙始鳴', name: 'pentad.45.ja.translation',
              transliteration: 'pentad.45.ja.transliteration',
            }]
          ])
        }],
        [ 50, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '蚯蚓出', name: 'pentad.50.zh.translation', 
              transliteration: 'pentad.50.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '蚯蚓出', name: 'pentad.50.ja.translation',
              transliteration: 'pentad.50.ja.transliteration',
            }]
          ])
        }],
        [ 55, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '王瓜生', name: 'pentad.55.zh.translation', 
              transliteration: 'pentad.55.zh.transliteration', 
              explanation: 'pentad.55.zh.explanation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '竹笋生', name: 'pentad.55.ja.translation',
              transliteration: 'pentad.55.ja.transliteration',
            }]
          ])
        }],
      ])
     }],
    [ 60, <SolarTermInfo>{
      name: 'solarterm.xiaoman',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '小满', transliteration: 'solarterm.xiaoman.zh' } ],
        [ 'ja', <Variation>{ nativeName: '小満', transliteration: 'solarterm.xiaoman.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 60, <Pentad>{ 
          variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '苦菜秀', name: 'pentad.60.zh.translation', 
              transliteration: 'pentad.60.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '蚕起食桑', name: 'pentad.60.ja.translation',
              transliteration: 'pentad.60.ja.transliteration',
            }]
          ])
        }],
        [ 65, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '靡草死', name: 'pentad.65.zh.translation', 
              transliteration: 'pentad.65.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '紅花栄', name: 'pentad.65.ja.translation',
              transliteration: 'pentad.65.ja.transliteration',
            }]
          ])
        }],
        [ 70, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '麥秋至', name: 'pentad.70.zh.translation', 
              transliteration: 'pentad.70.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '麦秋至', name: 'pentad.70.ja.translation',
              transliteration: 'pentad.70.ja.transliteration',
            }]
          ])
        }],
      ])
     }],
    [ 75, <SolarTermInfo>{
      name: 'solarterm.mangzhong',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '芒种', transliteration: 'solarterm.mangzhong.zh' } ],
        [ 'ja', <Variation>{ nativeName: '芒種', transliteration: 'solarterm.mangzhong.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 75, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '螳螂生', name: 'pentad.75.zh.translation', 
              transliteration: 'pentad.75.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '螳螂生', name: 'pentad.75.ja.translation',
              transliteration: 'pentad.75.ja.transliteration',
            }]
          ])
        }],
        [ 80, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '鵑始鳴', name: 'pentad.80.zh.translation',
              transliteration: 'pentad.80.zh.transliteration', 
              explanation: 'pentad.80.zh.explanation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '腐草為蛍', name: 'pentad.80.ja.translation',
              transliteration: 'pentad.80.ja.transliteration',
            }]
          ])
         }],
        [ 85, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '反舌無聲', name: 'pentad.85.zh.translation', 
              transliteration: 'pentad.85.zh.transliteration', 
              explanation: 'pentad.85.zh.explanation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '梅子黄', name: 'pentad.85.ja.translation',
              transliteration: 'pentad.85.ja.transliteration',
            }]
          ])
        }],
      ])
     }],
		[ 90, <SolarTermInfo>{
      name: 'solarterm.xiazhi',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '夏至', transliteration: 'solarterm.xiazhi.zh' } ],
        [ 'ja', <Variation>{ nativeName: '夏至', transliteration: 'solarterm.xiazhi.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 90, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '鹿角解', name: 'pentad.90.zh.translation', 
              transliteration: 'pentad.90.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '乃東枯', name: 'pentad.90.ja.translation',
              transliteration: 'pentad.90.ja.transliteration',
            }]
          ])
         }],
        [ 95, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '蜩始鳴', name: 'pentad.95.zh.translation', 
              transliteration: 'pentad.95.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '菖蒲華', name: 'pentad.95.ja.translation',
              transliteration: 'pentad.95.ja.transliteration',
            }]
          ])
         }],
        [ 100, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '半夏生', name: 'pentad.100.zh.translation', 
              transliteration: 'pentad.100.zh.transliteration', 
              explanation: 'pentad.100.zh.explanation'
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '半夏生', name: 'pentad.100.ja.translation',
              transliteration: 'pentad.100.ja.transliteration',
              explanation: 'pentad.100.ja.explanation'
            }]
          ])
        }],
      ])
     } ],
    [ 105, <SolarTermInfo>{
      name: 'solarterm.xiaoshu',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '小暑', transliteration: 'solarterm.xiaoshu.zh' } ],
        [ 'ja', <Variation>{ nativeName: '小暑', transliteration: 'solarterm.xiaoshu.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 105, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '溫風至', name: 'pentad.105.zh.translation', 
              transliteration: 'pentad.105.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '温風至', name: 'pentad.105.ja.translation',
              transliteration: 'pentad.105.ja.transliteration',
            }]
          ])
        }],
        [ 110, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '蟋蜂居壁', name: 'pentad.110.zh.translation', 
              transliteration: 'pentad.110.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '蓮始開', name: 'pentad.110.ja.translation',
              transliteration: 'pentad.110.ja.transliteration',
            }]
          ])
         }],
        [ 115, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '鷹始摯', name: 'pentad.115.zh.translation', 
              transliteration: 'pentad.115.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '鷹乃学習', name: 'pentad.115.ja.translation',
              transliteration: 'pentad.115.ja.transliteration',
            }]
          ])
        }],
      ])
     } ],
    [ 120, <SolarTermInfo>{
      name: 'solarterm.dashu',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '大暑', transliteration: 'solarterm.dashu.zh' } ],
        [ 'ja', <Variation>{ nativeName: '大暑', transliteration: 'solarterm.dashu.ja' } ]
      ]),
      pentads: new Map<number, Pentad>([
        [ 120, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '腐草為螢', name: 'pentad.120.zh.translation', 
              transliteration: 'pentad.120.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '桐始結花', name: 'pentad.120.ja.translation', 
              transliteration: 'pentad.120.ja.transliteration',
            }]
          ])
        }],
        [ 125, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '土潤溽暑', name: 'pentad.125.zh.translation', 
              transliteration: 'pentad.125.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '土潤溽暑', name: 'pentad.125.ja.translation',
              transliteration: 'pentad.125.ja.transliteration',
            }]
          ])
        }],
        [ 130, <Pentad>{ variations: new Map<string, ExtendedVariation>([
            [ 'zh', <ExtendedVariation>{ nativeName: '大雨行時', name: 'pentad.130.zh.translation', 
              transliteration: 'pentad.130.zh.transliteration', 
            }],
            [ 'ja', <ExtendedVariation>{ nativeName: '大雨時行', name: 'pentad.130.ja.translation',
              transliteration: 'pentad.130.ja.transliteration',
            }]
          ])
        }],
      ])
     }]
    ])
   }],
    [ 135, <Season>{ 
      name: 'autumn',
      nativeNames: new Map<string, Variation>([
        [ 'zh', <Variation>{ nativeName: '秋季', transliteration: 'autumn.zh' } ],
        [ 'ja', <Variation>{ nativeName: '秋', transliteration: 'autumn.ja' } ]
      ]),
      solarTerms: new Map<number, SolarTermInfo>([
        [ 135, <SolarTermInfo>{
        name: 'solarterm.liqiu',
        nativeNames: new Map<string, Variation>([
          [ 'zh', <Variation>{ nativeName: '立秋', transliteration: 'solarterm.liqiu.zh' } ],
          [ 'ja', <Variation>{ nativeName: '立秋', transliteration: 'solarterm.liqiu.ja' } ]
        ]),
        pentads: new Map<number, Pentad>([
          [ 135, <Pentad>{ variations: new Map<string, ExtendedVariation>([
          [ 'zh', <ExtendedVariation>{ nativeName: '涼風至', name: 'pentad.135.zh.translation', 
            transliteration: 'pentad.135.zh.transliteration', 
          }],
          [ 'ja', <ExtendedVariation>{ nativeName: '涼風至', name: 'pentad.135.ja.translation',
            transliteration: 'pentad.135.ja.transliteration',
          }]
        ])
      }],
        [ 140, <Pentad>{ variations: new Map<string, ExtendedVariation>([
          [ 'zh', <ExtendedVariation>{ nativeName: '白露降', name: 'pentad.140.zh.translation', 
          transliteration: 'pentad.140.zh.transliteration', 
          }],
          [ 'ja', <ExtendedVariation>{ nativeName: '寒蝉鳴', name: 'pentad.140.ja.translation',
            transliteration: 'pentad.140.ja.transliteration',
          }]
        ])
      }],
      [ 145, <Pentad>{ variations: new Map<string, ExtendedVariation>([
          [ 'zh', <ExtendedVariation>{ nativeName: '寒蟬鳴', name: 'pentad.145.zh.translation', 
          transliteration: 'pentad.145.zh.transliteration', 
          }],
          [ 'ja', <ExtendedVariation>{ nativeName: '蒙霧升降', name: 'pentad.145.ja.translation',
            transliteration: 'pentad.145.ja.transliteration',
          }]
        ])
      }],
    ])
  }],
[ 150, <SolarTermInfo>{
  name: 'solarterm.chushu',
  nativeNames: new Map<string, Variation>([
    [ 'zh', <Variation>{ nativeName: '处暑', transliteration: 'solarterm.chushu.zh' } ],
    [ 'ja', <Variation>{ nativeName: '処暑', transliteration: 'solarterm.chushu.ja' } ]
  ]),
  pentads: new Map<number, Pentad>([
    [ 150, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '鷹乃祭鳥', name: 'pentad.150.zh.translation', 
      transliteration: 'pentad.150.zh.transliteration', 
      explanation: 'pentad.explanation.predators'
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '綿柎開', name: 'pentad.150.ja.translation',
        transliteration: 'pentad.150.ja.transliteration',
      }]
    ])
   }],
    [ 155, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '天地始肅', name: 'pentad.155.zh.translation', 
      transliteration: 'pentad.155.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '天地始粛', name: 'pentad.155.ja.translation',
        transliteration: 'pentad.155.ja.transliteration',
      }]
    ])
   }],
    [ 160, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '禾乃登', name: 'pentad.160.zh.translation', 
      transliteration: 'pentad.160.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '禾乃登', name: 'pentad.160.ja.translation',
        transliteration: 'pentad.160.ja.transliteration',
      }]
    ])
   }],
  ])
  } ],
[ 165, <SolarTermInfo>{
  name: 'solarterm.bailu',
  nativeNames: new Map<string, Variation>([
    [ 'zh', <Variation>{ nativeName: '白露', transliteration: 'solarterm.bailu.zh' } ],
    [ 'ja', <Variation>{ nativeName: '白露', transliteration: 'solarterm.bailu.ja' } ]
  ]),
  pentads: new Map<number, Pentad>([
    [ 165, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '鴻鴈來', name: 'pentad.165.zh.translation', 
      transliteration: 'pentad.165.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '草露白', name: 'pentad.165.ja.translation',
        transliteration: 'pentad.165.ja.transliteration',
      }]
    ])
   }], 
    [ 170, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '玄鳥歸', name: 'pentad.170.zh.translation', 
      transliteration: 'pentad.170.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '鶺鴒鳴', name: 'pentad.170.ja.translation',
        transliteration: 'pentad.170.ja.transliteration',
      }]
    ])
   }],
    [ 175, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '群鳥養羞', name: 'pentad.175.zh.translation', 
      transliteration: 'pentad.175.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '玄鳥去', name: 'pentad.175.ja.translation',
        transliteration: 'pentad.175.ja.transliteration',
      }]
    ])
   }],
  ])
  } ],
[ 180, <SolarTermInfo>{
  name: 'solarterm.qiufen',
  nativeNames: new Map<string, Variation>([
    [ 'zh', <Variation>{ nativeName: '秋分', transliteration: 'solarterm.qiufen.zh' } ],
    [ 'ja', <Variation>{ nativeName: '秋分', transliteration: 'solarterm.qiufen.ja' } ]
  ]),
  pentads: new Map<number, Pentad>([
    [ 180, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '雷始收聲', name: 'pentad.180.zh.translation', 
      transliteration: 'pentad.180.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '雷乃収声', name: 'pentad.180.ja.translation',
        transliteration: 'pentad.180.ja.transliteration',
      }]
    ])
   }],
    [ 185, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '蟄蟲坯戶', name: 'pentad.185.zh.translation', 
      transliteration: 'pentad.185.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '蟄虫坏戸', name: 'pentad.185.ja.translation',
        transliteration: 'pentad.185.ja.transliteration',
      }]
    ])
   }],
    [ 190, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '水始涸', name: 'pentad.190.zh.translation', 
      transliteration: 'pentad.190.zh.transliteration', 
      explanation: 'pentad.190.zh.explanation'
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '水始涸', name: 'pentad.190.ja.translation',
        transliteration: 'pentad.190.ja.transliteration',
        explanation: 'pentad.190.ja.explanation'
      }]
    ])
   }],
  ])
  } ],
[ 195, <SolarTermInfo>{
  name: 'solarterm.hanlu',
  nativeNames: new Map<string, Variation>([
    [ 'zh', <Variation>{ nativeName: '寒露', transliteration: 'solarterm.hanlu.zh' } ],
    [ 'ja', <Variation>{ nativeName: '寒露', transliteration: 'solarterm.hanlu.ja' } ]
  ]),
  pentads: new Map<number, Pentad>([
    [ 195, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '鴻鴈來賓', name: 'pentad.195.zh.translation', 
      transliteration: 'pentad.195.zh.transliteration', 
      explanation: 'pentad.195.zh.explanation'
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '鴻雁来', name: 'pentad.195.ja.translation',
        transliteration: 'pentad.195.ja.transliteration',
      }]
    ])
   }],
    [ 200, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '雀入大水為蛤', name: 'pentad.200.zh.translation', 
      transliteration: 'pentad.200.zh.transliteration', 
      explanation: 'pentad.explanation.transformation'
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '菊花開', name: 'pentad.200.ja.translation',
        transliteration: 'pentad.200.ja.transliteration',
      }]
    ])
   }],
    [ 205, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '鞠有黃花', name: 'pentad.205.zh.translation', 
      transliteration: 'pentad.205.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '蟋蟀在戸', name: 'pentad.205.ja.translation',
        transliteration: 'pentad.205.ja.transliteration',
      }]
    ])
   }],
  ])
  } ],
[ 210, <SolarTermInfo>{
  name: 'solarterm.shuangjiang',
  nativeNames: new Map<string, Variation>([
    [ 'zh', <Variation>{ nativeName: '霜降', transliteration: 'solarterm.shuangjiang.zh' } ],
    [ 'ja', <Variation>{ nativeName: '霜降', transliteration: 'solarterm.shuangjiang.ja' } ]
  ]),
  pentads: new Map<number, Pentad>([
    [ 210, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '豺乃祭獸', name: 'pentad.210.zh.translation', 
      transliteration: 'pentad.210.zh.transliteration', 
      explanation: 'pentad.explanation.predators'
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '霜始降', name: 'pentad.210.ja.translation',
        transliteration: 'pentad.210.ja.transliteration',
      }]
    ])
   }],
    [ 215, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '草木黃落', name: 'pentad.215.zh.translation', 
      transliteration: 'pentad.215.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '霎時施', name: 'pentad.215.ja.translation',
        transliteration: 'pentad.215.ja.transliteration',
      }]
    ])
   }],
    [ 220, <Pentad>{ variations: new Map<string, ExtendedVariation>([
      [ 'zh', <ExtendedVariation>{ nativeName: '蟄蟲咸俯', name: 'pentad.220.zh.translation', 
      transliteration: 'pentad.220.zh.transliteration', 
      }],
      [ 'ja', <ExtendedVariation>{ nativeName: '楓蔦黄', name: 'pentad.220.ja.translation',
        transliteration: 'pentad.220.ja.transliteration',
      }]
    ])
   }],
  ])
  }]
    ])
   }],
  [ 225, <Season>{ 
    name: 'winter',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '冬季', transliteration: 'winter.zh' } ],
      [ 'ja', <Variation>{ nativeName: '冬', transliteration: 'winter.ja' } ]
    ]),
    solarTerms: new Map<number, SolarTermInfo>([
      [ 225, <SolarTermInfo>{
    name: 'solarterm.lidong',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '立冬', transliteration: 'solarterm.lidong.zh' } ],
      [ 'ja', <Variation>{ nativeName: '立冬', transliteration: 'solarterm.lidong.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 225, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '水始凍', name: 'pentad.225.zh.translation', 
        transliteration: 'pentad.225.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '山茶始開', name: 'pentad.225.ja.translation',
          transliteration: 'pentad.225.ja.transliteration',
        }]
      ]) 
     }],
      [ 230, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '地始凍', name: 'pentad.230.zh.translation', 
        transliteration: 'pentad.230.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '地始凍', name: 'pentad.230.ja.translation',
          transliteration: 'pentad.230.ja.transliteration',
        }]
      ])
      }],
      [ 235, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '雉入大水為蜃', name: 'pentad.235.zh.translation', 
        transliteration: 'pentad.235.zh.transliteration', 
        explanation: 'pentad.explanation.transformation'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '金盞香', name: 'pentad.235.ja.translation',
          transliteration: 'pentad.235.ja.transliteration',
        }]
      ])
      }],
    ])
    } ],
  [ 240, <SolarTermInfo>{
    name: 'solarterm.xiaoxue',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '小雪', transliteration: 'solarterm.xiaoxue.zh' } ],
      [ 'ja', <Variation>{ nativeName: '小雪', transliteration: 'solarterm.xiaoxue.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 240, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '虹藏不見', name: 'pentad.240.zh.translation', 
        transliteration: 'pentad.240.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '虹蔵不見', name: 'pentad.240.ja.translation',
          transliteration: 'pentad.240.ja.transliteration',
        }]
      ])
      }],
      [ 245, <Pentad>{ variations: new Map<string, ExtendedVariation>([ 
        [ 'zh', <ExtendedVariation>{ nativeName: '天氣上升地氣下降', name: 'pentad.245.zh.translation', 
        transliteration: 'pentad.245.zh.transliteration', 
        explanation: 'pentad.explanation.blockage'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '朔風払葉', name: 'pentad.245.ja.translation',
          transliteration: 'pentad.245.ja.transliteration',
        }]
      ])
      }],
      [ 250, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '閉塞而成冬', name: 'pentad.250.zh.translation',
        transliteration: 'pentad.250.zh.transliteration', 
        explanation: 'pentad.explanation.blockage'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '橘始黄', name: 'pentad.250.ja.translation',
          transliteration: 'pentad.250.ja.transliteration',
        }]
      ])
      }],
    ])
    } ],
  [ 255, <SolarTermInfo>{
    name: 'solarterm.daxue',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '大雪', transliteration: 'solarterm.daxue.zh' } ],
      [ 'ja', <Variation>{ nativeName: '大雪', transliteration: 'solarterm.daxue.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 255, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '鶡鴠不鳴', name: 'pentad.255.zh.translation',
        transliteration: 'pentad.255.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '閉塞成冬', name: 'pentad.255.ja.translation',
          transliteration: 'pentad.255.ja.transliteration',
        }]
      ])
      }],
      [ 260, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '虎始交', name: 'pentad.260.zh.translation',
        transliteration: 'pentad.260.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '熊蟄穴', name: 'pentad.260.ja.translation',
          transliteration: 'pentad.260.ja.transliteration',
        }]
      ])
      }],
      [ 265, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '荔挺出', name: 'pentad.265.zh.translation',
        transliteration: 'pentad.265.zh.transliteration', 
        explanation: 'pentad.265.zh.explanation'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '鱖魚群', name: 'pentad.265.ja.translation',
          transliteration: 'pentad.265.ja.transliteration',
        }]
      ])
      }],
    ])
    } ],
  [ 270, <SolarTermInfo>{
    name: 'solarterm.dongzhi',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '冬至', transliteration: 'solarterm.dongzhi.zh' } ],
      [ 'ja', <Variation>{ nativeName: '冬至', transliteration: 'solarterm.dongzhi.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 270, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '蚯蚓結', name: 'pentad.270.zh.translation',
        transliteration: 'pentad.270.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '乃東生', name: 'pentad.270.ja.translation',
          transliteration: 'pentad.270.ja.transliteration',
        }]
      ])
      }],
      [ 275, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '麋角解', name: 'pentad.275.zh.translation',
        transliteration: 'pentad.275.zh.transliteration', 
        explanation: 'pentad.275.zh.explanation'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '麋角解', name: 'pentad.275.ja.translation',
          transliteration: 'pentad.275.ja.transliteration',
        }]
      ])
      }],
      [ 280, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '水泉動', name: 'pentad.280.zh.translation',
        transliteration: 'pentad.280.zh.transliteration', 
        explanation: 'pentad.280.zh.explanation'
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '雪下出麦', name: 'pentad.280.ja.translation',
          transliteration: 'pentad.280.ja.transliteration',
        }]
      ])
      }],
    ])
    } ],
  [ 285, <SolarTermInfo>{
    name: 'solarterm.xiaohan',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '小寒', transliteration: 'solarterm.xiaohan.zh' } ],
      [ 'ja', <Variation>{ nativeName: '小寒', transliteration: 'solarterm.xiaohan.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 285, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '鴈北鄉', name: 'pentad.285.zh.translation',
        transliteration: 'pentad.285.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '芹乃栄', name: 'pentad.285.ja.translation',
          transliteration: 'pentad.285.ja.transliteration',
        }]
      ])
      }],
      [ 290, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '鵲始巢', name: 'pentad.290.zh.translation',
        transliteration: 'pentad.290.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '水泉動', name: 'pentad.290.ja.translation',
          transliteration: 'pentad.290.ja.transliteration',
        }]
      ])
      }],
      [ 295, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '雉雊', name: 'pentad.295.zh.translation',
        transliteration: 'pentad.295.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '雉始雊', name: 'pentad.295.ja.translation',
          transliteration: 'pentad.295.ja.transliteration',
        }]
      ])
      }],
    ])
    } ],
  [ 300, <SolarTermInfo>{
    name: 'solarterm.dahan',
    nativeNames: new Map<string, Variation>([
      [ 'zh', <Variation>{ nativeName: '大寒', transliteration: 'solarterm.dahan.zh' } ],
      [ 'ja', <Variation>{ nativeName: '大寒', transliteration: 'solarterm.dahan.ja' } ]
    ]),
    pentads: new Map<number, Pentad>([
      [ 300, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '雞乳', name: 'pentad.300.zh.translation', 
        transliteration: 'pentad.300.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '款冬華', name: 'pentad.300.ja.translation',
          transliteration: 'pentad.300.ja.transliteration',
        }]
      ])
      }],
      [ 305, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '征鳥厲疾', name: 'pentad.305.zh.translation', 
        transliteration: 'pentad.305.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '水沢腹堅', name: 'pentad.305.ja.translation', 
          transliteration: 'pentad.305.ja.transliteration',
        }]
      ])
      }],
      [ 310, <Pentad>{ variations: new Map<string, ExtendedVariation>([
        [ 'zh', <ExtendedVariation>{ nativeName: '水澤腹堅', name: 'pentad.310.zh.translation', 
        transliteration: 'pentad.310.zh.transliteration', 
        }],
        [ 'ja', <ExtendedVariation>{ nativeName: '鶏始乳', name: 'pentad.310.ja.translation',
          transliteration: 'pentad.310.ja.transliteration',
        }]
      ])
      }],
    ])
    }]
  ])
  }]
]);