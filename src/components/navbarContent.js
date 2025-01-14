import {
    RaceIcon,
    ChestIcon,
    EnlistIcon,
    FeedbackIcon,
    HomeIcon,
    LinkIcon,
    AnalysisIcon,
    TeamIcon
} from 'components/icon';

const officialLink = {
    'zh-TW': 'https://www.tenkafuma.com/',
    'en': 'https://www.tenkafuma.com/en/',
    'ja': 'https://www.tenkafuma.com/jp/',
    'ko': 'https://www.tenkafuma.com/en/'
}

const navbarContent = (lang, isDefault) => ([
    {
        to: '/',
        linkType: 'internal',
        expandable: false,
        icon: HomeIcon,
    },
    {
        to: ['/characters/potential/'],
        linkType: 'internal',
        expandable: true,
        icon: RaceIcon,
    },
    {
        to: [
            '/enlist/',
            '/enlist/filter/'
        ],
        linkType: 'internal',
        expandable: true,
        icon: EnlistIcon,
    },
    {
        to: [
            '/items/drop/',
            '/items/drop/filter/'
        ],
        linkType: 'internal',
        expandable: true,
        icon: ChestIcon,
    },
    {
        to: '/analysis/',
        linkType: 'internal',
        expandable: false,
        icon: AnalysisIcon,
    },
    {
        to: '/team/',
        linkType: 'internal',
        expandable: false,
        icon: TeamIcon,
    },
    {
        to: [
            officialLink[lang],
            'https://reurl.cc/5o5A7z/',
            'https://reurl.cc/1gZ5nV/'
        ],
        linkType: 'external',
        expandable: true,
        icon: LinkIcon,
    },
    {
        to: [
            'https://forms.gle/VYMGibGfs36F9tdQ6',
            'https://reurl.cc/E22vDa',
            'https://reurl.cc/jqGAVL',
            isDefault
                ? 'https://github.com/purindaisuki/tkfmtools/blob/master/README.zh-TW.md#%E6%84%8F%E8%A6%8B%E5%9B%9E%E9%A5%8B'
                : 'https://github.com/purindaisuki/tkfmtools#feedback'
        ],
        linkType: 'external',
        expandable: true,
        icon: FeedbackIcon,
    }
])

export default navbarContent