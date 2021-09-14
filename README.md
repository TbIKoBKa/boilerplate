```
/src
    /bus - находится 6 сущностей, которые покрыты тестами. Из них я добавил 4 новых сущности: films, people, profile, users.
           1-3 выполнены с использование redux-thunk. Последнюю я попробовал сделать с redux-saga по примеру сущности todos.
           В каждой из этих сущностей есть свои файлы с типами, экшенами и редюсером.
    /init
        /redux
            /middlewares
                /loggerMiddleware.ts
                /validateMiddleware.ts - два моих миддлвера. Первый - аналог redux-logger, второй для проверки пейлоада
                /index.ts - добавил свои миддлверы в общий массив
            /rootReducer.ts - добавил свои редюсеры в combineReducers
            /rootSaga.ts - добавил свой вотчер для сущности users
        constants.ts - добавил свои ссылки на API
    /tools
        /helpers
            formatText.ts - функция для форматирования текста(убрать нижние подчеркивания, первое слово с большой буквы)
    /view
        /App
            /Routes
                Private.tsx - добавил свои роуты на основые страницы
        /components - компоненты, которые использовались на страницах
        /containers
            /TopBar
                /NavBar - создал свой компонент навигации для контейнера TopBar
                index.tsx - добавил созданный компонент в TopBar
        /elements
            CommentsCounter.tsx - отображает количество комментариев
            DList.tsx           - расширенный dl
            Field.tsx           - стилизированый input для formik
            LikesCounter.tsx    - отображает количество лайков
            Radio.tsx           - стилизированый radio button для formik
            Select.tsx          - стилизированный select для formik
            Tag.tsx             - создал новые элементы для некоторых компонентов
        /pages
```
