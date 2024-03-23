const rolesArray = [
    'Генеральный директор',
    'Финансовый директор (заместитель директора по финансам)',
    'Главный бухгалтер',
    'Главный диспетчер',
    'Главный инженер',
    'Главный конструктор',
    'Главный металлург',
    'Главный метролог',
    'Главный механик',
    'Главный сварщик',
    'Главный специалист по защите информации',
    'Главный технолог',
    'Главный энергетик',
    'Директор вычислительного центра',
    'Директор гостиницы',
    'Директор котельной',
    'Директор по связям с инвесторами',
    'Директор типографии',
    'Заведующий архивом',
    'Заведующий бюро пропусков',
    'Заведующий жилым корпусом пансионата (гостиницы)',
    'Заведующий камерой хранения',
    'Заведующий канцелярией',
    'Заведующий копировально-множительным бюро',
    'Заведующий научно-технической библиотекой',
    'Заведующий общежитием',
    'Заведующий производством (шеф-повар)',
    'Заведующий складом',
    'Заведующий столовой',
    'Заведующий фотолабораторией',
    'Заведующий хозяйством',
    'Заведующий экспедицией',
    'Заместитель директора по капитальному строительству',
    'Заместитель директора по коммерческим вопросам',
    'Заместитель директора по связям с общественностью',
    'Заместитель директора по управлению персоналом',
    'Корпоративный секретарь акционерного общества',
    'Мастер участка',
    'Менеджер',
    'Менеджер по персоналу',
    'Менеджер по рекламе',
    'Менеджер по связям с инвесторами',
    'Менеджер по связям с общественностью',
    'Начальник автоколонны',
    'Начальник гаража',
    'Начальник мастерской',
    'Начальник инструментального отдела',
    'Начальник исследовательской лаборатории',
    'Начальник производственной лаборатории (по контролю производства)',
    'Начальник лаборатории по организации труда и управления производством',
    'Начальник лаборатории социологии труда',
    'Начальник лаборатории технико-экономических исследований',
    'Начальник нормативно-исследовательской лаборатории по труду',
    'Начальник отдела автоматизации и механизации производственных процессов',
    'Начальник отдела автоматизированной системы управления производством (АСУП)',
    'Начальник отдела информации',
    'Начальник отдела кадров',
    'Начальник отдела капитального строительства',
    'Начальник отдела комплектации оборудования',
    'Начальник отдела контроля качества',
    'Начальник отдела маркетинга',
    'Начальник отдела материально-технического снабжения',
    'Начальник отдела организации и оплаты труда',
    'Начальник отдела охраны окружающей среды',
    'Начальник отдела охраны труда. - Исключен',
    'Начальник отдела патентной и изобретательской работы',
    'Начальник отдела подготовки кадров',
    'Начальник отдела по связям с инвесторами',
    'Начальник отдела по защите информации',
    'Начальник отдела по связям с общественностью',
    'Начальник отдела сбыта',
    'Начальник отдела социального развития',
    'Начальник отдела стандартизации',
    'Начальник планово-экономического отдела',
    'Начальник производственного отдела',
    'Начальник ремонтного цеха',
    'Начальник смены',
    'Начальник технического отдела',
    'Начальник финансового отдела',
    'Начальник хозяйственного отдела',
    'Начальник центральной заводской лаборатории',
    'Начальник цеха',
    'Начальник цеха опытного производства',
    'Начальник юридического отдела',
    'Производитель работ',
    'Руководитель группы по инвентаризации строений и сооружений',
    'Управляющий отделением',
];


export default (): string => rolesArray[Math.floor(Math.random() * rolesArray.length)];