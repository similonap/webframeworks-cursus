import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const doc = (id: string, label: string) => ({type: 'doc' as const, id, label});
const labo = (number: number, title: string, items: ReturnType<typeof doc>[]) => ({
  type: 'category' as const,
  label: `${number}. ${title}`,
  link: {type: 'doc' as const, id: `labos/webframeworks/labo-${number}/index`},
  items,
});

const sidebars: SidebarsConfig = {
  theorieSidebar: [
    {
      type: 'category',
      label: 'Inleiding',
      link: {type: 'doc', id: 'webframeworks/index'},
      items: [
        {
          type: 'category',
          label: 'TypeScript Revisited',
          link: {type: 'doc', id: 'webframeworks/typescript-revisited/index'},
          items: [
            'webframeworks/typescript-revisited/array-methoden',
            'webframeworks/typescript-revisited/arrays-objecten-kopieren',
            'webframeworks/typescript-revisited/optional-chaining',
            'webframeworks/typescript-revisited/array-object-destructuring',
            'webframeworks/typescript-revisited/callbacks-function-types',
            'webframeworks/typescript-revisited/immutability',
            'webframeworks/typescript-revisited/modules',
            {
              type: 'category',
              label: 'Collections',
              link: {type: 'doc', id: 'webframeworks/typescript-revisited/collections/index'},
              items: [
                'webframeworks/typescript-revisited/collections/sets',
                'webframeworks/typescript-revisited/collections/dictionary',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      link: {type: 'doc', id: 'react/index'},
      items: [
        'react/create-react-app/index',
        {
          type: 'category', label: 'TSX', link: {type: 'doc', id: 'react/tsx/index'},
          items: ['react/tsx/static'],
        },
        'react/lijsten/index',
        {
          type: 'category', label: 'Componenten', link: {type: 'doc', id: 'react/componenten/index'},
          items: ['react/componenten/props', 'react/componenten/opsplitsen', 'react/componenten/stylen'],
        },
        'react/event-handling/index',
        {
          type: 'category', label: 'State', link: {type: 'doc', id: 'react/state/index'},
          items: ['react/state/voorbeelden'],
        },
        {
          type: 'category', label: 'Hooks', link: {type: 'doc', id: 'react/hooks/index'},
          items: ['react/hooks/useEffect', 'react/hooks/useRef', 'react/hooks/custom-hooks'],
        },
        {
          type: 'category', label: 'Componentcommunicatie', link: {type: 'doc', id: 'react/child-parent/index'},
          items: ['react/child-parent/callbacks', 'react/child-parent/context'],
        },
        'react/routing/index',
        'react/recepten/index',
        'react/angular-migration/index',
      ],
    },
    {
      type: 'category',
      label: 'React Native',
      link: {type: 'doc', id: 'react-native/index'},
      items: [
        {
          type: 'category', label: 'Expo', link: {type: 'doc', id: 'react-native/expo/index'},
          items: ['react-native/expo/emulator'],
        },
        'react-native/core-components/index',
        'react-native/custom-components/index',
        'react-native/flexbox/index',
        'react-native/lists-and-keys/index',
        'react-native/controlled-components/index',
        'react-native/expo-router/index',
        {
          type: 'category', label: 'Extra', link: {type: 'doc', id: 'react-native/extra/index'},
          items: [
            'react-native/extra/async-storage',
            'react-native/extra/camera',
            'react-native/extra/location',
            'react-native/extra/map-view',
            'react-native/extra/platform-specific-code',
            'react-native/extra/Nativewind',
            'react-native/extra/eas',
            'react-native/extra/voorbeelden',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Next.js',
      link: {type: 'doc', id: 'nextjs/index'},
      items: ['nextjs/csr-ssr', 'nextjs/routing', 'nextjs/forms', 'nextjs/proxy', 'nextjs/font-image-optimization'],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {type: 'doc', id: 'webframeworks/tools/index'},
      items: [
        'webframeworks/tools/devcontainers',
        'webframeworks/tools/devtools',
        'webframeworks/tools/jsonserver',
        'webframeworks/tools/vercel',
      ],
    },
  ],

  labosSidebar: [
    labo(1, 'React: expressies en TSX', [
      doc('exercises/react/labo-1-expressies/README', 'Expressies'),
      doc('exercises/react/labo-1-slotmachine/README', 'Slotmachine'),
      doc('exercises/react/labo-1-lijsten/README', 'Lijsten'),
      doc('exercises/react/labo-1-slot-machine-met-map/README', 'Slot machine met map'),
      doc('exercises/react/labo-1-alien-alphabet/README', 'Alien Alphabet'),
      doc('exercises/react/labo-1-maaltafels/README', 'Maaltafels'),
      doc('exercises/react/labo-1-regenboog/README', 'Regenboog'),
      doc('exercises/react/labo-1-chat-messages/README', 'Chat messages'),
      doc('exercises/react/labo-1-who-s-that-pokemon/README', "Who's that Pokémon?"),
      doc('exercises/react/labo-1-javascript-functions/README', 'JavaScript functions'),
    ]),
    labo(2, 'React: componenten en props', [
      doc('exercises/react/labo-2-simpele-componenten/README', 'Simpele componenten'),
      doc('exercises/react/labo-2-facebook-cards/README', 'Facebook cards'),
      doc('exercises/react/labo-2-penguins/README', 'Penguins'),
      doc('exercises/react/labo-2-slotmachine/README', 'Slotmachine'),
      doc('exercises/react/labo-2-maaltafels-component/README', 'Maaltafels component'),
      doc('exercises/react/labo-2-who-s-that-pokemon/README', "Who's that Pokémon?"),
      doc('exercises/react/labo-2-rainbow-props/README', 'Rainbow Props'),
    ]),
    labo(3, 'React: events', [
      doc('exercises/react/labo-3-color-clicker/README', 'Color Clicker'),
      doc('exercises/react/labo-3-textinput/README', 'TextInput'),
      doc('exercises/react/labo-3-checkbox-grid/README', 'Checkbox Grid'),
    ]),
    labo(4, 'React: state', [
      doc('exercises/react/labo-4-state-herkennen/README', 'State herkennen'),
      doc('exercises/react/labo-4-input-veld/README', 'Input veld'),
      doc('exercises/react/labo-4-checkbox/README', 'Checkbox'),
      doc('exercises/react/labo-4-maaltafels-state/README', 'Maaltafels State'),
      doc('exercises/react/labo-4-penguins-met-state/README', 'Penguins met state'),
      doc('exercises/react/labo-4-omhoog-omlaag/README', 'Omhoog/Omlaag'),
      doc('exercises/react/labo-4-loading-indicator/README', 'Loading indicator'),
      doc('exercises/react/labo-4-kleurkiezer/README', 'Kleurkiezer'),
      doc('exercises/react/labo-4-contactformulier/README', 'Contactformulier'),
      doc('exercises/react/labo-4-random-cat/README', 'Random Cat'),
      doc('exercises/react/labo-4-joske-het-vierkant/README', 'Joske het vierkant'),
      doc('exercises/react/labo-4-simple-quiz/README', 'Simple Quiz'),
    ]),
    labo(5, 'React: state met arrays', [
      doc('exercises/react/labo-5-shopping-list/README', 'Shopping List'),
      doc('exercises/react/labo-5-kleuren-selectie/README', 'Kleuren Selectie'),
      doc('exercises/react/labo-5-filtering-en-sorting/README', 'Filtering en sorting'),
      doc('exercises/react/labo-5-slots/README', 'Slots'),
      doc('exercises/react/labo-5-counter-list/README', 'Counter list'),
      doc('exercises/react/labo-5-tic-tac-toe/README', 'Tic Tac Toe'),
      doc('exercises/react/labo-5-alien-alphabet/README', 'Alien Alphabet'),
      doc('exercises/react/labo-5-game-of-life-1/README', 'Game of Life (1)'),
    ]),
    labo(6, 'React: hooks', [
      doc('exercises/react/labo-6-interval/README', 'Interval'),
      doc('exercises/react/labo-6-pokemon/README', 'Pokémon'),
      doc('exercises/react/labo-6-localstorage/README', 'LocalStorage'),
      doc('exercises/react/labo-6-useinterval-hook/README', 'useInterval hook'),
      doc('exercises/react/labo-6-game-of-life-2/README', 'Game of Life (2)'),
    ]),
    labo(7, 'React: componentcommunicatie', [
      doc('exercises/react/labo-7-counter-list/README', 'Counter List'),
      doc('exercises/react/labo-7-todo-app/README', 'Todo App'),
      doc('exercises/react/labo-7-quizapp/README', 'Quizapp'),
      doc('exercises/react/labo-7-happy-workers/README', 'Happy Workers'),
    ]),
    labo(8, 'React: context en routing', [
      doc('exercises/react/labo-8-wake-up-neo/README', 'Wake up Neo'),
      doc('exercises/react/labo-8-basic-context/README', 'Basic context'),
      doc('exercises/react/labo-8-todo-app/README', 'Todo App'),
      doc('exercises/react/labo-8-quiz-app/README', 'Quiz App'),
      doc('exercises/react/labo-8-pokemon-app/README', 'Pokémon app'),
      doc('exercises/react/labo-8-portfolio-app/README', 'Portfolio app'),
      doc('exercises/react/labo-8-quiz-app-met-react-router/README', 'Quiz app met React Router'),
    ]),
    labo(9, 'React Native: core components', [
      doc('exercises/react-native/labo-1-core-components/README', 'Core Components'),
      doc('exercises/react-native/labo-1-randommovieposters/README', 'RandomMoviePosters'),
    ]),
    labo(10, 'React Native: styling en flexbox', [
      doc('exercises/react-native/labo-2-rainbows/README', 'Rainbows'),
    ]),
    labo(11, 'React Native: state', [
      doc('exercises/react-native/labo-3-twitter/README', 'Twitter'),
      doc('exercises/react-native/labo-3-dark-light-toggle/README', 'Dark/Light Toggle'),
      doc('exercises/react-native/labo-3-rainbows-met-state/README', 'Rainbows met state'),
    ]),
    labo(12, 'React Native: navigatie', [
      doc('exercises/react-native/labo-4-twitter/README', 'Twitter'),
      doc('exercises/react-native/labo-4-rainbow-navigation/README', 'Rainbow Navigation'),
    ]),
    labo(13, 'React Native: opslag en lijsten', [
      doc('exercises/react-native/labo-5-rainbow-asyncstorage/README', 'Rainbow AsyncStorage'),
      doc('exercises/react-native/labo-5-todo-app/README', 'Todo App'),
    ]),
    labo(14, 'React Native: herhaling', [
      doc('exercises/react-native/labo-6-herhalingsopdracht-bpost-app/README', 'BPost app'),
    ]),
    labo(15, 'Next.js: rendering en data', [
      doc('exercises/nextjs/labo-1-bitcoin-price/README', 'Bitcoin Price'),
      doc('exercises/nextjs/labo-1-y-clone-twitter/README', 'Y-Clone'),
    ]),
    labo(16, 'Next.js: routing', [
      doc('exercises/nextjs/labo-2-search-sorting-paging/README', 'Search/Sorting/Paging'),
      doc('exercises/nextjs/labo-2-y-clone-routing-twitter/README', 'Y-Clone Routing'),
    ]),
    labo(17, 'Next.js: forms', [
      doc('exercises/nextjs/labo-3-y-clone-forms-twitter/README', 'Y-Clone Forms'),
    ]),
    labo(18, 'Next.js: login', [
      doc('exercises/nextjs/labo-4-y-clone-login-twitter/README', 'Y-Clone Login'),
    ]),
    labo(19, 'Next.js: herhaling', [
      doc('exercises/nextjs/labo-5-herhalingsoefening-spotifi/README', 'Spotifi'),
    ]),
  ],

  projectSidebar: [
    doc('webframeworks/opdrachten/index', 'Overzicht'),
    doc('exercises/react-native/project-webframeworks/README', 'Project Webframeworks'),
  ],
};

export default sidebars;
