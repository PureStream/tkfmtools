import React, { createContext, useContext } from 'react';

import page_tr from 'data/string/page_zh-TW.json';
import char_tr from 'data/string/character_zh-TW.json';
import item_tr from 'data/string/item_zh-TW.json';
import stage_tr from 'data/string/stage_zh-TW.json';
import page_en from 'data/string/page_en.json';
import char_en from 'data/string/character_en.json';
import item_en from 'data/string/item_en.json';
import stage_en from 'data/string/stage_en.json';
import page_kr from 'data/string/page_kr.json';
import char_kr from 'data/string/character_kr.json';
import item_kr from 'data/string/item_kr.json';
import langConfig from 'languageConfig.json';

const stringData = {
    'zh-TW': {
        pageString: page_tr,
        charString: char_tr,
        itemString: item_tr,
        stageString: stage_tr,
    }
    , 'en': {
        pageString: page_en,
        charString: char_en,
        itemString: item_en,
        stageString: stage_en,
    }
    , 'kr': {
        pageString: page_kr,
        charString: char_kr,
        itemString: item_kr,
    }
}

const defaultLanguage = Object.keys(langConfig).filter(key => langConfig[key].default)[0]

const LanguageContext = createContext({
    userLanguage: defaultLanguage,
    isDefault: true,
})

export const useLanguage = () => useContext(LanguageContext)

export default function LanguageProvider({ children, pageContext }) {
    const provider = {
        userLanguage: pageContext.lang,
        isDefault: pageContext.lang === defaultLanguage,
        ...stringData[pageContext.lang],
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}
