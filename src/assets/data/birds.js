import putRandomNumbersToArray from '../../utils/putRandomNumbersToArray'

let birdsData = [
    [
        {
            id: 1,
            name: 'Ворон',
            species: 'Corvus corax',
            description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до ' +
                    'полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, чт' +
                    'о в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
            image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux' +
                    '%2009012020%20Suzon.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Журавль',
            species: 'Grus grus',
            description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще вс' +
                    'его поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывае' +
                    'т «лы». Если птица поёт одна, то она издает только звук «кур».',
            image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_' +
                    'tok.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Ласточка',
            species: 'Delichon urbicum',
            description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протя' +
                    'жении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «' +
                    'ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mehlschwalbe_Delichon_' +
                    'urbicum.jpg/550px-Mehlschwalbe_Delichon_urbicum.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_hui' +
                    'szwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Козодой',
            species: 'Caprimulgus europaeus',
            description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя зв' +
                    'учит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слы' +
                    'шно от заката до рассвета, его тональность, частота и громкость изменяются. ',
            image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nac' +
                    'htzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Кукушка',
            species: 'Cuculus canorus',
            description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с' +
                    ' какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие в' +
                    'иды пернатых, которым кукушки подбрасывают свои яйца.',
            image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koe' +
                    'koek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zin' +
                    'gend_gezien_.mp3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Синица',
            species: 'Parus major',
            description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они прак' +
                    'тически круглый год, немного затихая только зимой. Синицы настоящие санитары лес' +
                    'а. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев' +
                    '.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Parus_major_m.jpg/550p' +
                    'x-Parus_major_m.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20' +
                    'XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
            rightAnswer: false
        }
    ],
    [
        {
            id: 1,
            name: 'Воробей',
            species: 'Passer domesticus',
            description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по п' +
                    'естрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — ' +
                    'они селятся поблизости к человеческому жилищу.',
            image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Грач',
            species: 'Corvus frugilegus',
            description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и использ' +
                    'уют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарах' +
                    'тение», они летят на звук – трактор пашет землю, значит, в этом месте много корм' +
                    'а.',
            image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%20' +
                    '19.12.19%20%2012.35.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Галка',
            species: 'Coloeus monedula',
            description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Эт' +
                    'им словом часто называют воронов или других черных птиц. Латинское название галк' +
                    'и «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещ' +
                    'ам.',
            image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedul' +
                    'a_2019.11.13_11.55_01.mp3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Певчий дрозд',
            species: 'Turdus philomelos',
            description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звуч' +
                    'ных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечерне' +
                    'е время. Поют дрозды в течении всего периода гнездования.',
            image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Gl' +
                    'ogow.mp3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Сорока',
            species: 'Pica pica',
            description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из' +
                    ' них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было' +
                    ' теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
            image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.0' +
                    '8.23_09.18_02.mp3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Сойка',
            species: 'Garrulus glandarius',
            description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается созд' +
                    'ать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и ' +
                    'звуки, которые создает человек. На зиму они делают большие запасы желудей и орех' +
                    'ов.',
            image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%20130' +
                    '0.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
            rightAnswer: false
        }
    ],
    [
        {
            id: 1,
            name: 'Зяблик',
            species: 'Fringilla coelebs',
            description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный об' +
                    'раз жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с' +
                    ' наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
            image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4' +
                    '%99ba%20%282%29.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Клёст',
            species: 'Loxia curvirostra',
            description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают пот' +
                    'омство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных,' +
                    ' потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от г' +
                    'незда.',
            image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%2' +
                    '0NHD%20290619.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Горлица',
            species: 'Streptopelia turtur',
            description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках' +
                    ' и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкаю' +
                    'т к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашни' +
                    'х условиях.',
            image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptop' +
                    'elia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Дятел',
            species: 'Dendrocopos major',
            description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины январ' +
                    'я до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации вет' +
                    'ок под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5' +
                    ' км.',
            image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%9' +
                    '9cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Удод',
            species: 'Upupa epops',
            description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами' +
                    '. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать ' +
                    'места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
            image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.m' +
                    'p3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Стриж',
            species: 'Apus apus',
            description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесн' +
                    'ых зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие ко' +
                    'лонии этих птиц можно увидеть в городах или на прибрежных скалах.',
            image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
            rightAnswer: false
        }
    ],
    [
        {
            id: 1,
            name: 'Жаворонок',
            species: 'Alauda arvensis',
            description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются' +
                    ' они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонк' +
                    'ов определяли наступление весны и пору, когда пора пахать землю.',
            image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_' +
                    'arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Соловей',
            species: 'Luscinia luscinia',
            description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 по' +
                    'вторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, ' +
                    'соловьи легко и хорошо перенимают пение других птиц.',
            image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush' +
                    '%20Nightingale%20Snipe.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Скворец',
            species: 'Sturnus vulgaris',
            description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется ' +
                    'мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцую' +
                    'т в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в ' +
                    'небе.',
            image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_' +
                    '01.MP3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Иволга',
            species: 'Oriolus oriolus',
            description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разгл' +
                    'ядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень кра' +
                    'сивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают' +
                    ' другие птицы.',
            image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_' +
                    '01.mp3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Свиристель',
            species: 'Bombycilla garrulus',
            description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и с' +
                    'клевывать ягоды, которые труднее всего достать. В период ухаживаний самец предла' +
                    'гает самке ягоду или другое угощение. Если самка его принимает, то птицы создают' +
                    ' пару.',
            image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%' +
                    '20jemio%C5%82uszka.mp3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Щегол',
            species: 'Carduelis carduelis',
            description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглы' +
                    'й год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к л' +
                    'юдям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
            image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_put' +
                    'ter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
            rightAnswer: false
        }
    ],
    [
        {
            id: 1,
            name: 'Орёл',
            species: 'Aquila nipalensis',
            description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при это' +
                    'м скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения ' +
                    'происходит из-за высоты полета – более 700 метров',
            image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D' +
                    '85.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Коршун',
            species: 'Milvus migrans',
            description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослы' +
                    'х особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Кор' +
                    'шуны часто гнездятся большими стаями и даже образуют крупные колонии.',
            image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Sele' +
                    'nga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Лунь',
            species: 'Circus cyaneus',
            description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа ег' +
                    'о рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С та' +
                    'кой птицей связано сравнение «седой, как лунь».',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Circus_buffoni_male_pa' +
                    'le_2.jpg/550px-Circus_buffoni_male_pale_2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.c' +
                    'yan-f.mp3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Сокол',
            species: 'Falco peregrinus',
            description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной форм' +
                    'ы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и' +
                    ' свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
            image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.m' +
                    'p3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Ястреб',
            species: 'Accipiter gentilis',
            description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный п' +
                    'ризнак - белые «брови» над глазами. Славянские дружинники размещали изображение ' +
                    'ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
            image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp' +
                    '3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Филин',
            species: 'Bubo bubo',
            description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непрев' +
                    'зойденным ночным охотником. У филина нет естественных врагов, ни один зверь не о' +
                    'хотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
            image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADto' +
                    'l.mp3',
            rightAnswer: false
        }
    ],
    [
        {
            id: 1,
            name: 'Альбатрос',
            species: 'Diomedea exulans',
            description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с ' +
                    'половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в в' +
                    'оздухе, покрывая над океанскими просторами огромные расстояния',
            image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulan' +
                    's151120_T254.mp3',
            rightAnswer: false
        }, {
            id: 2,
            name: 'Олуша',
            species: 'Sula nebouxii',
            description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лап' +
                    'ок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц гре' +
                    'ют кладки своим телом, голубоногая олуша делает это с помощью лапок',
            image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%' +
                    '20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
            rightAnswer: false
        }, {
            id: 3,
            name: 'Буревестник',
            species: 'Puffinus griseus',
            description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 ' +
                    'см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, ч' +
                    'то появление буревестника в воздухе предвещает бурю, о чем говорит само название' +
                    ' птицы.',
            image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20I' +
                    'sland_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp' +
                    '3',
            rightAnswer: false
        }, {
            id: 4,
            name: 'Пеликан',
            species: 'Pelecanus',
            description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают' +
                    '. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукр' +
                    'угом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководь' +
                    'е.',
            image: 'https://mnogo-krolikov.ru/wp-content/uploads/2019/08/http-komotoz-ru-photo-zhivo' +
                    'tnye-images-pelikany-1-1.jpeg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
            rightAnswer: false
        }, {
            id: 5,
            name: 'Пингвин',
            species: 'Aptenodytes forsteri',
            description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближать' +
                    'ся к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пинг' +
                    'вина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группа' +
                    'ми.',
            image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%2' +
                    '0Penguin%20call%20A.mp3',
            rightAnswer: false
        }, {
            id: 6,
            name: 'Чайка',
            species: 'Larus argentatus',
            description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на ' +
                    'островах. С конца прошлого века чайки стали появляться в крупных городах, где ус' +
                    'траивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
            image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zil' +
                    'vermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
            rightAnswer: false
        }
    ]
];

const birdsDataWithRightAnswers = putRandomNumbersToArray(birdsData);
export {birdsDataWithRightAnswers};
