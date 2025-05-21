// src/data/osData.js

const createContentItem = (type, data) => ({ type, ...data });

export const osData = [
  // =================================================================================
  // 1. Введение в Операционные Системы (ОС)
  // =================================================================================
  {
    id: "introduction",
    title: "1. Введение в Операционные Системы (ОС)",
    path: "/introduction",
    subsections: [
      {
        id: "introduction-concepts",
        title: "1.1. Понятие и Функции ОС",
        path: "/introduction/concepts",
        content: [
          createContentItem("paragraph", {
            text: "<strong>Операционная Система (ОС):</strong> Комплекс программ, управляющий аппаратными ресурсами компьютера и предоставляющий программный интерфейс (API) для взаимодействия с ними.",
          }),
          createContentItem("heading", {
            level: 3,
            text: "Основные функции ОС:",
          }),
          createContentItem("list", {
            ordered: false,
            items: [
              "<strong>Предоставление расширенной (виртуальной) машины:</strong> Упрощение взаимодействия с аппаратным обеспечением через API и системные вызовы.",
              "<strong>Управление ресурсами:</strong><ul><li>Процессоры (CPU)</li><li>Оперативная память (ОП)</li><li>Устройства ввода-вывода (В/В)</li><li>Файлы и данные</li><li>Системные объекты и структуры</li></ul>",
              "<strong>Разделение ресурсов:</strong><ul><li><strong>По времени:</strong> Ресурс используется процессами поочередно (например, CPU).</li><li><strong>В пространстве:</strong> Ресурс делится между процессами (например, ОП).</li></ul>",
              "Организация пользовательского интерфейса (CLI, GUI).",
              "Загрузка и запуск программ.",
              "Управление памятью (включая виртуальную память).",
              "Обслуживание операций В/В.",
              "Управление файлами (файловая система).",
              "Обеспечение многозадачности (мультипрограммирования): Параллельное (псевдопараллельное) выполнение программ.",
              "Планирование и диспетчеризация задач.",
              "Организация межпроцессного взаимодействия (IPC).",
              "Защита системы и данных (от ошибок, взаимного влияния процессов, несанкционированного доступа).",
              "Аутентификация и авторизация пользователей.",
            ],
          }),
          createContentItem("paragraph", {
            text: "Информация основана на Лекции №1.",
          }),
        ],
      },
      {
        id: "introduction-evolution",
        title: "1.2. Эволюция ОС",
        path: "/introduction/evolution",
        content: [
          createContentItem("paragraph", {
            text: "Эволюция ОС по поколениям (основано на Лекции №1):",
          }),
          createContentItem("list", {
            ordered: false,
            items: [
              "<strong>1-е поколение (1945-1955):</strong><ul><li>Элементная база: Реле, вакуумные лампы, коммутационные панели.</li><li>Особенности: ОС отсутствуют.</li></ul>",
              "<strong>2-е поколение (1955-1965):</strong><ul><li>Элементная база: Транзисторы.</li><li>Особенности: Мэйнфреймы.</li><li><strong>ОС:</strong> Пакетные системы (монитор, JCL). Примеры: FMS, IBSYS.</li></ul>",
              "<strong>3-е поколение (1965-1980):</strong><ul><li>Элементная база: Интегральные схемы (ИС).</li><li>Особенности: Семейства ЭВМ, миникомпьютеры.</li><li><strong>Технологии ОС:</strong> Многозадачность, защита памяти, спулинг (spooling), разделение времени, файловые системы, диалоговый режим.</li><li>Примеры: CTSS, OS/360, MULTICS.</li></ul>",
              "<strong>4-е поколение (1980 - настоящее время):</strong><ul><li>Элементная база: СБИС (сверхбольшие ИС).</li><li>Особенности: Микропроцессоры, ПК.</li><li><strong>Идеи ОС:</strong> Дружественный интерфейс (GUI), сетевые/распределенные ОС.</li><li>Примеры: CP/M, MS-DOS, Apple DOS, macOS, Windows, OS/2, Novell NetWare, UNIX-подобные (Linux, Android).</li></ul>",
            ],
          }),
        ],
      },
      {
        id: "introduction-classification",
        title: "1.3. Классификация ОС",
        path: "/introduction/classification",
        content: [
          createContentItem("paragraph", {
            text: "Классификация ОС (основано на Лекции №1):",
          }),
          createContentItem("heading", { level: 4, text: "По назначению:" }),
          createContentItem("list", {
            items: [
              "Общего назначения",
              "Специального назначения (встроенные, реального времени, для СУБД)",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "По типу вычислительной системы:",
          }),
          createContentItem("list", {
            items: [
              "ОС мэйнфреймов",
              "Серверные ОС",
              "Многопроцессорные ОС",
              "ОС персональных компьютеров",
              "Встроенные ОС",
              "ОС смарт-карт",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "По режиму обработки задач:",
          }),
          createContentItem("list", {
            items: [
              "Диалоговые (интерактивные)",
              "Пакетные",
              "Однопрограммные",
              "Мультипрограммные (многозадачные)",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "По организации работы с пользователями:",
          }),
          createContentItem("list", {
            items: [
              "Однопользовательские",
              "Многопользовательские (мультитерминальные)",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "По архитектуре ядра:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Макроядерные (монолитные):</strong> Весь код ядра в едином адресном пространстве (Windows NT, Linux).",
              "<strong>Микроядерные (клиент-сервер):</strong> Минимальное ядро в привилегированном режиме, большинство функций – серверы в пользовательском режиме (Mach, QNX).",
              "<strong>Многоуровневые, Виртуальные машины, Экзоядро.</strong>",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Перспективные подходы к ОС:",
          }),
          createContentItem("list", {
            items: [
              "Архитектура микроядра",
              "Многопоточность",
              "Симметричная многопроцессорность",
              "Распределенные ОС",
              "Объектно-ориентированный дизайн",
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 2. Ядро Операционной Системы
  // =================================================================================
  {
    id: "kernel",
    title: "2. Ядро Операционной Системы",
    path: "/kernel",
    subsections: [
      {
        id: "kernel-concepts",
        title: "2.1. Концепция Ядра",
        path: "/kernel/concepts",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №3." }),
          createContentItem("paragraph", {
            text: "<strong>Ядро (Kernel):</strong> Центральная часть ОС, работающая в привилегированном режиме и имеющая полный доступ к аппаратным ресурсам.",
          }),
          createContentItem("heading", {
            level: 3,
            text: "Режимы работы процессора:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Пользовательский режим (User Mode):</strong> Меньше привилегий, для пользовательских программ.",
              "<strong>Системный режим / Режим ядра (Kernel Mode):</strong> Больше привилегий, для кода ОС (доступ ко всей памяти, В/В, управляющим регистрам). Переход через системные вызовы, прерывания, исключения.",
            ],
          }),
          createContentItem("heading", { level: 3, text: "Типы процессов:" }),
          createContentItem("list", {
            items: [
              "<strong>Пользовательские процессы:</strong> Выполняют пользовательский код в user mode и код ОС в kernel mode (через системные вызовы).",
              "<strong>Системные процессы:</strong> Выполняют только код ОС в kernel mode (выделение памяти, свопинг и т.д.).",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Варианты реализации ядра:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Автономное ядро:</strong> Ранние ОС. Ядро имеет собственную область памяти, свой стек.",
              "<strong>Ядро в составе пользовательских процессов:</strong> Код ОС выполняется в контексте пользовательского процесса (UNIX, Windows).",
              "<strong>ОС на основе процессов:</strong> Основные функции ядра реализованы как отдельные процессы, выполняющиеся в режиме ядра.",
            ],
          }),
        ],
      },
      {
        id: "kernel-functions",
        title: "2.2. Основные Функции Ядра",
        path: "/kernel/functions",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №3." }),
          createContentItem("list", {
            items: [
              "<strong>Управление процессами:</strong> Создание/завершение, планирование/диспетчеризация, переключение, синхронизация, IPC, организация PCB.",
              "<strong>Управление памятью:</strong> Выделение адресного пространства, свопинг, управление страницами/сегментами.",
              "<strong>Управление В/В:</strong> Управление буферами, выделение каналов/устройств В/В.",
              "<strong>Функции поддержки:</strong> Обработка прерываний, учет использования ресурсов, текущий контроль.",
            ],
          }),
        ],
      },
      {
        id: "kernel-objects",
        title: "2.3. Объекты Ядра (Windows)",
        path: "/kernel/objects",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №3. Рассматривается на примере Windows.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Объект ядра:</strong> Экземпляр периода выполнения (run-time instance) статически определенного в системе типа объектов. Тип объекта = тип данных + функции + атрибуты.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Категории объектов в Windows:</strong> User (окна, курсоры), GDI (кисти, перья), Kernel (файлы, потоки, процессы, мьютексы, семафоры, события, маркеры доступа, почтовые ящики и т.д.).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Структура объекта ядра:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Заголовок:</strong> Имя объекта (для совместного использования), дескриптор защиты, счетчик открытых описателей (open handle count), счетчик ссылок (reference count).",
              "<strong>Тело объекта.</strong>",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Дескрипторы объектов (Handles):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Дескриптор (Handle):</strong> Запись в таблице описателей процесса, содержит адрес объекта и информацию о типе. Тип <code>HANDLE</code> в WinAPI.",
              "Привязан к процессу. Существуют псевдодескрипторы (<code>GetCurrentProcess()</code>).",
              "Действия: запрос, установка защиты, дублирование, ожидание, закрытие.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Создание и освобождение объектов:",
          }),
          createContentItem("list", {
            items: [
              "Создание: функции <code>Create&lt;Object&gt;(...)</code> (например, <code>CreateProcess</code>). Возвращают <code>HANDLE</code>.",
              "Атрибуты защиты (<code>SECURITY_ATTRIBUTES</code>): <code>nLength</code>, <code>lpSecurityDescriptor</code>, <code>bInheritHandle</code> (флаг наследования).",
              "Освобождение: <code>CloseHandle(hObject)</code>. Уменьшает счетчик ссылок. При обнулении счетчика ядро удаляет объект.",
              "<code>GetProcessHandleCount()</code>: количество открытых дескрипторов процесса.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Разделение объектов между процессами (Windows):",
          }),
          createContentItem("list", {
            items: [
              "<strong>1. Наследование:</strong> Дочерний процесс наследует дескрипторы от родителя, если они помечены как наследуемые (<code>bInheritHandle = TRUE</code> в <code>SECURITY_ATTRIBUTES</code> и в <code>CreateProcess</code>). Значение дескриптора передается (командная строка, IPC). <code>SetHandleInformation()</code> / <code>GetHandleInformation()</code> для управления наследованием.",
              "<strong>2. Дублирование дескриптора (<code>DuplicateHandle</code>):</strong> Для передачи объекта ядра произвольному процессу или изменения прав доступа.",
              "<strong>3. Именование объектов:</strong> Многие объекты могут быть именованными и открываться по имени другими процессами.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: 'Синхронизация процессов "по завершению" (Windows):',
          }),
          createContentItem("list", {
            items: [
              "Функции семейства <code>WaitFor*</code>: <code>WaitForSingleObject(hObject, dwMilliseconds)</code>, <code>WaitForMultipleObjects(nCount, lpHandles, fWaitAll, dwMilliseconds)</code>.",
              "Ожидают перехода объекта в сигнальное состояние.",
              "Возвращаемые значения: <code>WAIT_OBJECT_0</code> (успех), <code>WAIT_TIMEOUT</code>, <code>WAIT_FAILED</code>.",
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 3. Управление Процессами и Потоками
  // =================================================================================
  {
    id: "processes-threads",
    title: "3. Управление Процессами и Потоками",
    path: "/processes-threads",
    subsections: [
      {
        id: "processes-concepts",
        title: "3.1. Процессы",
        path: "/processes-threads/processes",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №2." }),
          createContentItem("paragraph", {
            text: "<strong>Процесс (process):</strong> Экземпляр выполняющейся программы. Абстрактное понятие, объект, обладающий собственным независимым виртуальным адресным пространством.",
          }),
          createContentItem("heading", { level: 4, text: "Ресурсы процесса:" }),
          createContentItem("list", {
            items: [
              "Один или несколько потоков исполнения",
              "Виртуальное адресное пространство",
              "Сегменты кода и данных (включая DLL)",
              "Куча процесса",
              "Дескрипторы открытых файлов и др.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Управляющий Блок Процесса (PCB - Process Control Block):",
          }),
          createContentItem("list", {
            items: [
              "Структура данных в ядре, хранящая атрибуты процесса:",
              "Идентификаторы: PID, PPID, UID, GID.",
              "Контекст ЦП: регистры, счетчик команд, PSW.",
              "Указатели на стек, таблицы памяти.",
              "Состояние процесса.",
              "Приоритет, информация о планировании, о событиях.",
              "Данные IPC, маркеры доступа, информация о ресурсах (открытые файлы).",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Образ процесса:</strong> Совокупность программы, данных, стека и атрибутов (PCB).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Иерархия процессов:",
          }),
          createContentItem("paragraph", {
            text: "Родительский процесс (parent) порождает дочерний (child). В некоторых системах (Unix) образуется древовидная структура. Процесс `init` (PID 1) в Unix является прародителем.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Классификация процессов:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Интерактивные (приложения):</strong> Взаимодействие с пользователем.",
              "<strong>Фоновые (демоны/службы):</strong> Не связаны с пользователем.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Состояния процессов (Process State):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Выполнение (Running):</strong> Использует процессор.",
              "<strong>Готовность (Ready):</strong> Может выполняться, ожидает процессор.",
              "<strong>Блокировка (Blocked/Wait/Sleeping):</strong> Ожидает внешнего события (В/В, сигнал, ресурс).",
              "<strong>Новый (New):</strong> Процесс создается.",
              "<strong>Завершенный (Terminated):</strong> Выполнение окончено.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Создание процесса:",
          }),
          createContentItem("paragraph", {
            text: "Причины: инициализация системы, системный запрос, запрос пользователя, запуск пакетного задания.",
          }),
          createContentItem("heading", { level: 4, text: "В Windows:" }),
          createContentItem("list", {
            items: [
              "<code>CreateProcess()</code>: Основная функция. Создает новый процесс и его первичный поток. Возвращает дескриптор процесса и PID.",
              "<code>GetCurrentProcess()</code>, <code>GetCurrentProcessId()</code>: Получение информации о текущем процессе.",
              "<code>OpenProcess()</code>: Создает дескриптор процесса по PID.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "В UNIX/Linux:" }),
          createContentItem("list", {
            items: [
              "<strong><code>fork()</code>:</strong> Создает почти точную копию родительского процесса. Возвращает PID дочернего процессу-родителю и 0 дочернему процессу. <code>-1</code> в случае ошибки.",
              "<ul><li><code>vfork()</code>: Не копирует при записи сегмент данных.</li><li><code>clone()</code>: Для создания потоков, но может использоваться и для процессов.</li></ul>",
              "<strong>Семейство <code>exec</code> (<code>execl, execv, execle, execve, execlp, execvp</code>):</strong> Замещает образ текущего процесса новым (загружает новую программу).<ul><li><code>l</code> (list): Аргументы списком. <code>v</code> (vector): Аргументы массивом.</li><li><code>e</code> (environment): Передается окружение. <code>p</code> (path): Поиск в PATH.</li></ul>",
              "<code>system(const char* command)</code>: Комбинация <code>fork</code> + <code>exec</code>, запускает командный интерпретатор.",
              "<code>getpid()</code>, <code>getppid()</code>: Получение PID и PPID текущего процесса.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Отличия моделей (Windows vs UNIX):",
          }),
          createContentItem("list", {
            items: [
              "Windows: <code>CreateProcess</code> = <code>fork</code> + <code>exec</code> (нет прямого аналога <code>fork</code>).",
              "Windows: Процессы идентифицируются дескрипторами и PID; UNIX: только PID.",
              "Windows: Отношение родитель-потомок менее строгое.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Завершение процесса:",
          }),
          createContentItem("paragraph", {
            text: "Причины: обычный выход, выход по ошибке, выход по неисправимой ошибке, уничтожение другим процессом.",
          }),
          createContentItem("heading", { level: 4, text: "В Windows:" }),
          createContentItem("list", {
            items: [
              "<code>ExitProcess(uExitCode)</code>: Завершение текущего процесса с кодом.",
              "<code>GetExitCodeProcess(hProcess, lpExitCode)</code>: Получение кода завершения другого процесса.",
              "<code>TerminateProcess(hProcess, uExitCode)</code>: Принудительное завершение (небезопасно).",
            ],
          }),
          createContentItem("heading", { level: 4, text: "В UNIX/Linux:" }),
          createContentItem("list", {
            items: [
              "<code>return exit_code;</code> или <code>exit(exit_code);</code> или <code>_exit(exit_code);</code>: Нормальное завершение.",
              "<code>kill(pid, signum)</code>: Посылает сигнал (SIGTERM, SIGKILL). <code>signum=0</code> проверяет существование/права.",
              "<code>wait(exit_status)</code>, <code>waitpid(child_pid, exit_status, options)</code>: Родитель ожидает дочерний.",
              "<strong>Зомби-процесс:</strong> Дочерний завершился, но родитель не вызвал <code>wait()</code>. PCB сохраняется для кода завершения.",
            ],
          }),
        ],
      },
      {
        id: "processes-threads-threads",
        title: "3.2. Потоки (Нити)",
        path: "/processes-threads/threads",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №4." }),
          createContentItem("paragraph", {
            text: "<strong>Поток (Thread):</strong> Единица выполнения программы в рамках процесса. Разделяет адресное пространство и ресурсы процесса, но имеет свой счетчик команд, регистры и стек.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Многопоточность:</strong> Способность ОС поддерживать выполнение нескольких потоков в одном процессе.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Причины использования потоков:",
          }),
          createContentItem("list", {
            items: [
              "Отзывчивость GUI",
              "Масштабирование на многоядерных системах",
              "Неблокирующий В/В для процесса",
              "Фоновая работа",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Элементы, общие для всех потоков процесса:",
          }),
          createContentItem("list", {
            items: [
              "Адресное пространство",
              "Глобальные переменные",
              "Открытые файлы",
              "Дочерние процессы",
              "Информация об использовании ресурсов",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Элементы, индивидуальные для каждого потока:",
          }),
          createContentItem("list", {
            items: [
              "Счетчик команд (PC)",
              "Регистры",
              "Стек",
              "Состояние потока",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Порождение и завершение потоков:",
          }),
          createContentItem("heading", {
            level: 4,
            text: "В Linux (POSIX Threads - pthreads):",
          }),
          createContentItem("list", {
            items: [
              "Основной тип: <code>pthread_t</code>. Заголовочный файл: <code>&lt;pthread.h&gt;</code>.",
              "Функция потока: <code>void* ThreadFunc(void* arg)</code>.",
              "Создание: <code>pthread_create(pthread_t* thread_id, const pthread_attr_t* attr, void* (*start_fn)(void*), void* arg)</code>. Компиляция с <code>-lpthread</code>.",
              "Завершение: <code>return</code> из функции потока, <code>pthread_exit(void* status)</code>, <code>pthread_cancel(pthread_t tid)</code> (другим потоком), завершение процесса.",
              "Ожидание: <code>pthread_join(pthread_t tid, void** status)</code>.",
              "Идентификация: <code>pthread_self()</code>, <code>pthread_equal()</code>.",
              "<code>pthread_kill(pthread_t tid, int signal)</code>: Посылка сигнала потоку.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "В Windows:" }),
          createContentItem("list", {
            items: [
              "Функция потока: <code>DWORD WINAPI ThreadFunc(LPVOID lpThreadParam)</code>.",
              "Создание: <code>CreateThread(LPSECURITY_ATTRIBUTES lpsa, ..., LPTHREAD_START_ROUTINE lpStartAddress, ..., LPDWORD lpThreadId)</code>. Флаг <code>CREATE_SUSPENDED</code> для создания в приостановленном состоянии.",
              "Завершение: <code>return</code> из функции потока (лучший вариант), <code>ExitThread(DWORD dwExitCode)</code>, <code>TerminateThread(HANDLE hThread, DWORD dwExitCode)</code> (не рекомендуется), завершение процесса.",
              "Получение кода возврата: <code>GetExitCodeThread()</code>.",
              "Идентификация: <code>GetCurrentThread()</code> (псевдодескриптор), <code>GetCurrentThreadId()</code>, <code>GetThreadId()</code>, <code>OpenThread()</code>.",
              "Функции CRT: <code>_beginthreadex()</code>, <code>_endthreadex()</code> для корректной работы с ресурсами CRT.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Состояния потоков:",
          }),
          createContentItem("paragraph", {
            text: "Аналогично процессам: Выполнение, Готовность, Блокировка. В Windows: <code>SuspendThread()</code>, <code>ResumeThread()</code>. <code>Sleep(dwMilliseconds)</code> для добровольного отказа от CPU.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Реализация потоков (Модели многопоточности):",
          }),
          createContentItem("list", {
            items: [
              "<strong>На уровне пользователя (User-Level Threads - ULT):</strong> Управляются библиотекой в пользовательском пространстве (POSIX P-Threads, Mach C-Threads).<br/><em>Плюсы:</em> Быстрое переключение, гибкое планирование, переносимость.<br/><em>Минусы:</em> Блокирующий системный вызов блокирует все потоки процесса; не используют многоядерность.",
              "<strong>На уровне ядра (Kernel-Level Threads - KLT):</strong> Ядро знает о потоках (OS/2, Linux, Windows NT).<br/><em>Плюсы:</em> Блокируется только вызвавший поток, используют многоядерность.<br/><em>Минусы:</em> Большие накладные расходы на системные вызовы.",
              "<strong>Смешанные решения (например, Solaris):</strong> Комбинация ULT и KLT.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Преимущества и недостатки потоков:",
          }),
          createContentItem("paragraph", {
            text: "<strong>Плюсы:</strong> Отзывчивость, разделение ресурсов, экономичность создания/переключения, масштабируемость, асинхронная обработка, модульная структура программы.<br/><strong>Недостатки:</strong> Усложнение программной модели, необходимость синхронизации при доступе к общим данным, сложность отладки и обработки ошибок.",
          }),
        ],
      },
      {
        id: "processes-threads-scheduling",
        title: "3.3. Планирование ЦП",
        path: "/processes-threads/scheduling",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №5." }),
          createContentItem("paragraph", {
            text: "<strong>Планирование (Scheduling):</strong> Распределение времени процессора между процессами/потоками. <strong>Планировщик (Scheduler)</strong> - часть ОС, выбирающая следующий процесс. <strong>Алгоритм планирования</strong> - логика выбора.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Виды планировщиков:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Долгосрочный (Job/High-level):</strong> Выбирает процессы для загрузки в память.",
              "<strong>Краткосрочный (CPU/Low-level/Dispatcher):</strong> Выбирает следующий процесс из очереди готовых.",
              // 'Среднесрочный: Управляет свопингом.', // Не было в лекции 5, но часто упоминается
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Приоритет:</strong> Значение, определяющее важность процесса (статический/динамический).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Категории алгоритмов планирования:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Невытесняющие (Non-preemptive):</strong> Процесс выполняется до завершения или блокировки.",
              "<strong>Вытесняющие (Preemptive):</strong> Процесс может быть прерван (по таймеру, более приоритетным).",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Поведение процессов:</strong> CPU-bound (ограничены процессором), I/O-bound (ограничены вводом-выводом).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Ситуации планирования:",
          }),
          createContentItem("list", {
            items: [
              "Прерывание от таймера/В/В",
              "Системные вызовы",
              "Создание/завершение процесса",
              "Блокировка процесса",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Задачи алгоритмов планирования:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Все системы:</strong> Справедливость, предсказуемость, баланс, масштабируемость.",
              "<strong>Пакетные системы:</strong> Максимальная пропускная способность, минимальное время оборота, максимальное использование CPU.",
              "<strong>Интерактивные системы:</strong> Минимальное время отклика, пропорциональность.",
              "<strong>Системы реального времени:</strong> Соблюдение сроков, предсказуемость.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Алгоритмы планирования:",
          }),
          createContentItem("list", {
            items: [
              '<strong>1. FCFS (First-Come, First-Served) - "Первым пришел – первым обслужен":</strong><br/><em>Плюсы:</em> Легко понять и программировать.<br/><em>Минусы:</em> Преимущество CPU-bound процессов над I/O-bound. Невытесняющий.',
              '<strong>2. SPN (Shortest Process Next) / SJN (Shortest Job Next) - "Кратчайшая задача – первая":</strong><br/><em>Плюсы:</em> Хорошее время отклика для коротких процессов.<br/><em>Минусы:</em> Плохая производительность длительных, низкое время отклика для них. Сложно предсказать время выполнения. Невытесняющий.',
              '<strong>3. SRT (Shortest Remaining Time) - "Наименьшее остающееся время выполнения":</strong><br/>Вытесняющая версия SPN. Планировщик выбирает процесс с наименьшим оставшимся временем.<br/><em>Плюсы:</em> Хорошее время отклика.<br/><em>Минусы:</em> Низкая производительность длительных процессов.',
              '<strong>4. RR (Round Robin) - Циклическое планирование ("Карусельное"):</strong><br/>Каждому процессу дается квант времени. По истечении – прерывание, процесс в конец очереди. Вытесняющий.<br/><em>Плюсы:</em> Минимальные накладные расходы, хорошее время отклика, беспристрастность.<br/><em>Минусы:</em> Низкая пропускная способность при малом кванте; I/O-bound процессы получают меньше времени.<br/><em>Модификации:</em> VRR (Virtual Round Robin) – вспомогательная очередь для I/O-bound.',
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Планирование в Windows:",
          }),
          createContentItem("list", {
            items: [
              "Единица планирования – поток.",
              "32 уровня приоритета (0-31). 0 – поток обнуления страниц.",
              "Все потоки с одинаковым наивысшим приоритетом – равноправны (RR).",
              "Вытесняющий: более приоритетный поток прерывает текущий.",
              "<strong>Базовый приоритет потока</strong> = Класс приоритета процесса + Уровень приоритета потока.",
              "<strong>6 классов приоритета процесса:</strong> <code>IDLE_PRIORITY_CLASS</code>, <code>BELOW_NORMAL_PRIORITY_CLASS</code>, <code>NORMAL_PRIORITY_CLASS</code> (по умолчанию), <code>ABOVE_NORMAL_PRIORITY_CLASS</code>, <code>HIGH_PRIORITY_CLASS</code>, <code>REALTIME_PRIORITY_CLASS</code>. (<code>SetPriorityClass</code>, <code>GetPriorityClass</code>).",
              "<strong>Уровни приоритета потока в классе:</strong> <code>THREAD_PRIORITY_IDLE</code>, <code>THREAD_PRIORITY_LOWEST</code>, ..., <code>THREAD_PRIORITY_NORMAL</code> (по умолчанию), ..., <code>THREAD_PRIORITY_HIGHEST</code>, <code>THREAD_PRIORITY_TIME_CRITICAL</code>. (<code>SetThreadPriority</code>, <code>GetThreadPriority</code>).",
              "<strong>Динамическое повышение приоритета (Priority Boosts):</strong> Для избегания голодания и улучшения отклика (активное окно, завершение В/В). Только для базовых приоритетов 0-15.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Планирование в системах реального времени:",
          }),
          createContentItem("paragraph", {
            text: "Если система может обработать все периодические события в срок, она называется <strong>планируемой</strong>. Условие: Σ (C<sub>i</sub> / P<sub>i</sub>) ≤ 1, где C<sub>i</sub> – время обработки, P<sub>i</sub> – период события i.",
          }),
          createContentItem("list", {
            items: [
              "<strong>Статические алгоритмы:</strong> Решения принимаются до запуска.",
              "<strong>Динамические алгоритмы.</strong>",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Политика и механизм планирования:",
          }),
          createContentItem("paragraph", {
            text: "Используется параметризованный алгоритм, параметры которого могут изменяться процессом пользовательского уровня через системный вызов.",
          }),
          createContentItem("heading", {
            level: 3,
            text: "Планирование в многопроцессорных системах:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Назначение процессов процессорам:</strong> Ведущий/ведомый; равноправные.",
              "<strong>Разделение загрузки (Load Sharing):</strong> Глобальная очередь готовых потоков.",
              "<strong>Бригадное планирование (Gang Scheduling):</strong> Связанные потоки распределяются для одновременной работы на разных процессорах.",
              '<strong>Назначение процессоров (Processor Affinity):</strong> Потокам "привязываются" процессоры.',
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 4. Синхронизация и Взаимодействие Процессов (IPC)
  // =================================================================================
  {
    id: "ipc-sync",
    title: "4. Синхронизация и IPC",
    path: "/ipc-sync",
    subsections: [
      {
        id: "ipc-sync-problems",
        title: "4.1. Проблемы Синхронизации",
        path: "/ipc-sync/problems",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №6." }),
          createContentItem("paragraph", {
            text: "<strong>Состояние гонки (Race Condition):</strong> Ситуация, когда два (и более) процесса/потока считывают или записывают общие данные одновременно, и конечный результат зависит от порядка доступа.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Критическая секция (Critical Section):</strong> Часть программы, в которой есть обращение к совместно используемому неразделяемому (критическому) ресурсу.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Условия правильного использования общих данных (для взаимного исключения):",
          }),
          createContentItem("list", {
            ordered: true,
            items: [
              "Два процесса не должны одновременно находиться в критических областях (Взаимное исключение).",
              "Не должно быть предположений об относительных скоростях или количестве процессов.",
              "Процессы, находящиеся вне критической области, не должны блокировать другие процессы (Прогресс).",
              "Невозможна ситуация, в которой процесс вечно ждет попадания в критическую область (Ограниченное ожидание/Отсутствие голодания).",
            ],
          }),
          createContentItem("paragraph", {
            text: "Вопрос из самостоятельной работы: <strong>Подходы к решению проблемы взаимного исключения.</strong>",
          }),
          createContentItem("list", {
            items: [
              "<strong>Программные:</strong> Алгоритм Петерсона, Деккера (сложны, для 2 процессов).",
              "<strong>Аппаратные:</strong> Атомарные инструкции (Test-and-Set, Compare-and-Swap).",
              "<strong>ОС-уровня:</strong> Мьютексы, Семафоры, Условные переменные, Мониторы.",
            ],
          }),
        ],
      },
      {
        id: "ipc-sync-mechanisms",
        title: "4.2. Механизмы Синхронизации",
        path: "/ipc-sync/mechanisms",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №6." }),
          createContentItem("heading", {
            level: 3,
            text: "Реализация взаимного исключения с активным ожиданием (Busy Waiting):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Запрет прерываний:</strong> Просто, но небезопасно (сбой пользователя может повесить ОС), не для многопроцессорных систем.",
              "<strong>Переменные блокировки:</strong> Не решают проблему гонки без атомарности.",
              '<strong>Строгое чередование:</strong> Нарушает условие "процессы вне КС не должны блокировать других".',
              "<strong>Алгоритм Деккера/Питерсона:</strong> Корректные программные решения для 2-х процессов, но с активным ожиданием.",
              "<strong>Команда TSL (Test and Set Lock):</strong> Атомарная аппаратная инструкция. Корректна, но с активным ожиданием.",
              "<strong>Спин-блокировка (Spinlock):</strong> Блокировка, использующая активное ожидание. Может вызвать проблему инверсии приоритета.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Примитивы синхронизации (без активного ожидания):",
          }),
          createContentItem("list", {
            items: [
              '<strong>1. Sleep и Wakeup:</strong> <code>sleep()</code> блокирует, <code>wakeup()</code> пробуждает. Нужен "активационный бит" для обхода гонки.',
              "<strong>2. Семафоры (Semaphores):</strong> (Дейкстра, 1965) Целочисленная переменная с атомарными операциями:<br/>- <code>down()</code> (P-операция, <code>wait()</code>): Если значение > 0, уменьшает на 1. Если 0, блокирует процесс.<br/>- <code>up()</code> (V-операция, <code>signal()</code>, <code>post()</code>): Увеличивает значение. Если есть ждущие процессы, один пробуждается.<br/><em>В *NIX (POSIX):</em> <code>sem_init()</code>, <code>sem_wait()</code>, <code>sem_post()</code>, <code>sem_destroy()</code> (тип <code>sem_t</code>).<br/><em>В Windows:</em> <code>CreateSemaphore()</code>, <code>OpenSemaphore()</code>, <code>ReleaseSemaphore()</code>, <code>WaitForSingleObject()</code>.",
              "<strong>3. Мьютексы (Mutexes - MUTual EXclusion):</strong> Упрощенная версия семафора (бинарный). Состояния: неблокирован (0) / блокирован (1).<br/>Операции: <code>mutex_lock()</code>, <code>mutex_unlock()</code>. (Также <code>mutex_trylock</code>).<br/><em>В *NIX (POSIX Pthreads):</em> <code>pthread_mutex_t</code>, <code>pthread_mutex_init()</code>, <code>pthread_mutex_lock()</code>, <code>pthread_mutex_unlock()</code>, <code>pthread_mutex_destroy()</code>.<br/><em>В Windows:</em> <code>CreateMutex()</code>, <code>OpenMutex()</code>, <code>ReleaseMutex()</code>, <code>WaitForSingleObject()</code>.",
              "<strong>4. Мониторы (Monitors):</strong> (Хоар, 1974) Высокоуровневая конструкция: набор процедур, переменных, структур данных. Гарантирует, что в мониторе активен только один процесс. (Java <code>synchronized</code>, C# <code>lock</code>).",
              "<strong>5. Передача сообщений:</strong> <code>send()</code> и <code>receive()</code>. Блокируются, если сообщение недоступно.",
              "<strong>6. Барьеры (Barriers):</strong> Для групп процессов. Блокируют процессы до завершения последнего из группы.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Объекты синхронизации в Windows:",
          }),
          createContentItem("paragraph", {
            text: "Объекты ядра с состояниями: сигнальное (signaled) / несигнальное (nonsignaled).",
          }),
          createContentItem("list", {
            items: [
              "<strong>Для параллельных потоков:</strong> Мьютекс, Событие, Семафор.",
              "<strong>С таймером:</strong> Ожидающий таймер.",
              "<strong>По завершению:</strong> Работа (job), Процесс, Поток.",
              "<strong>По изменению содержимого:</strong> Изменение состояния каталога, Консольный ввод.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "События (Events) в Windows:",
          }),
          createContentItem("paragraph", {
            text: "Оповещение о действии. Для условной синхронизации.<br/><code>CreateEvent()</code>, <code>OpenEvent()</code>, <code>SetEvent()</code> (в сигнальное), <code>ResetEvent()</code> (в несигнальное), <code>PulseEvent()</code>.<br/>Бывают с ручным и автоматическим сбросом.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Критические секции (CRITICAL_SECTION) в Windows:",
          }),
          createContentItem("paragraph", {
            text: "Не являются объектами ядра, не имеют дескрипторов, не разделяются процессами (только для потоков одного процесса).<br/><code>InitializeCriticalSection()</code>, <code>EnterCriticalSection()</code>, <code>TryEnterCriticalSection()</code>, <code>LeaveCriticalSection()</code>, <code>DeleteCriticalSection()</code>.",
          }),
        ],
      },
      {
        id: "ipc-sync-ipc",
        title: "4.3. Межпроцессное Взаимодействие (IPC)",
        path: "/ipc-sync/ipc",
        content: [
          createContentItem("paragraph", {
            text: "Вопрос к экзамену №23, 25. Основано на Лекциях 6, 7, Лаб. 2, 3, 5, 6.",
          }),
          createContentItem("heading", {
            level: 3,
            text: "Общие механизмы IPC:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Каналы (Pipes):</strong><br/>- <em>Неименованные (Anonymous Pipes):</em> Однонаправленные, между родственными процессами (родитель-потомок). Linux: <code>pipe()</code>.<br/>- <em>Именованные (Named Pipes / FIFO):</em> Для неродственных процессов. Linux: <code>mkfifo()</code>, <code>open()</code>, <code>read()</code>, <code>write()</code>. Windows: <code>CreateNamedPipe()</code> и др.",
              "<strong>Сигналы:</strong> Асинхронные уведомления о событиях. (См. ниже)",
              "<strong>Очереди сообщений (Message Queues):</strong> Обмен форматированными сообщениями.<br/>- POSIX: <code>mq_open()</code>, <code>mq_send()</code>, <code>mq_receive()</code>.<br/>- System V: <code>msgget()</code>, <code>msgsnd()</code>, <code>msgrcv()</code>.",
              "<strong>Разделяемая память (Shared Memory):</strong> Самый быстрый способ. Область памяти, доступная нескольким процессам. Требует внешней синхронизации.<br/>- POSIX: <code>shm_open()</code>, <code>ftruncate()</code>, <code>mmap()</code>.<br/>- System V: <code>shmget()</code>, <code>shmat()</code>, <code>shmdt()</code>.",
              "<strong>Семафоры:</strong> Для синхронизации доступа к разделяемым ресурсам (в т.ч. разделяемой памяти).",
              "<strong>Мьютексы:</strong> Для взаимного исключения.",
              "<strong>Сокеты (Sockets):</strong> Для сетевого и локального взаимодействия. Типы: <code>AF_INET</code>, <code>AF_UNIX</code>. Протоколы: TCP, UDP.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Сигналы и их обработка (Вопрос №24, Лаб. 2):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Сигнал:</strong> Асинхронное уведомление процессу о событии.",
              "<strong>Источники:</strong> Ядро (ошибки), другие процессы (<code>kill()</code>), сам процесс (<code>raise()</code>).",
              "<strong>Действия при получении:</strong> По умолчанию (SIG_DFL), Игнорировать (SIG_IGN), Обработать (пользовательская функция).",
              "<strong>Функции (POSIX/Linux):</strong> <code>signal()</code>, <code>sigaction()</code> (гибче), <code>kill(pid, sig)</code>, <code>raise(sig)</code>, <code>alarm()</code>, <code>pause()</code>, <code>sigprocmask()</code> (блокировка), <code>sigpending()</code> (проверка ожидающих), <code>sigsuspend()</code>.",
              "<strong>Важные сигналы (Linux):</strong> <code>SIGHUP</code>(1), <code>SIGINT</code>(2), <code>SIGQUIT</code>(3), <code>SIGILL</code>(4), <code>SIGABRT</code>(6), <code>SIGFPE</code>(8), <code>SIGKILL</code>(9 - нельзя перехватить), <code>SIGSEGV</code>(11), <code>SIGPIPE</code>(13), <code>SIGALRM</code>(14), <code>SIGTERM</code>(15), <code>SIGCHLD</code>(17), <code>SIGCONT</code>(18), <code>SIGSTOP</code>(19 - нельзя перехватить), <code>SIGTSTP</code>(20), <code>SIGUSR1</code>, <code>SIGUSR2</code>.",
              "<strong>Реентерабельность обработчиков:</strong> Функции в обработчике должны быть реентерабельными (не использовать глобальные статические данные без синхронизации).",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Каналы (Pipes) и их использование (Вопрос №25, Лаб. 6):",
          }),
          createContentItem("list", {
            items: [
              '<strong>Неименованные (анонимные) каналы:</strong><br/>- Создаются <code>pipe(int fd[2])</code> в Linux (<code>fd[0]</code> - чтение, <code>fd[1]</code> - запись).<br/>- Для связи родственных процессов (после <code>fork()</code>).<br/>- Пример: <code>ls | grep ".txt"</code>.',
              '<strong>Именованные каналы (FIFO - First-In, First-Out):</strong><br/>- Специальный файл в ФС. Для неродственных процессов.<br/>- Linux: <code>mkfifo("myfifo", mode)</code> (команда или вызов). Открытие через <code>open()</code>. Запись/чтение через <code>write()</code>/<code>read()</code>. Удаление <code>unlink()</code>.<br/>- Характеристики: Полудуплексные, данные читаются в порядке записи, блокирующее поведение, атомарность записи для блоков < <code>PIPE_BUF</code>.',
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "IPC в Windows (из Лаб. 3):",
          }),
          createContentItem("list", {
            items: [
              "<code>DuplicateHandle()</code>: Для передачи объектов ядра между процессами.",
              "Наследование дескрипторов.",
              "Именование объектов ядра (мьютексы, события, семафоры, проекции файлов).",
              "Переменные окружения, командная строка, запись в файл для передачи информации.",
              "Mailslots: Однонаправленная передача сообщений в домене.",
            ],
          }),
          createContentItem("blockquote", {
            text: 'Вопрос из самостоятельной работы (Вариант B): <strong>Отличия процессов от потоков.</strong><br/>1. <strong>Адресное пространство:</strong> Процессы имеют отдельные, изолированные адресные пространства. Потоки одного процесса разделяют общее адресное пространство.<br/>2. <strong>Ресурсы:</strong> Процесс – единица выделения ресурсов (память, файлы). Потоки разделяют ресурсы своего процесса.<br/>3. <strong>Создание и переключение:</strong> Создание потока и переключение контекста между потоками одного процесса обычно "легче" (быстрее и менее ресурсоемко), чем для процессов.<br/>4. <strong>Взаимодействие:</strong> Потокам одного процесса проще обмениваться данными (через общую память, глобальные переменные), но это требует тщательной синхронизации. Межпроцессное взаимодействие (IPC) сложнее и медленнее.<br/>5. <strong>Надежность/Изоляция:</strong> Ошибка в одном потоке может "уронить" весь процесс. Процессы лучше изолированы друг от друга; сбой одного процесса обычно не влияет на другие.<br/>6. <strong>Параллелизм:</strong> Потоки позволяют достичь параллелизма внутри одного приложения на многоядерных системах. Несколько процессов также могут выполняться параллельно.',
          }),
        ],
      },
      {
        id: "ipc-sync-deadlocks",
        title: "4.4. Тупики (Deadlocks)",
        path: "/ipc-sync/deadlocks",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №6." }),
          createContentItem("paragraph", {
            text: "<strong>Тупик (Deadlock):</strong> Ситуация, когда два или более процесса находятся в состоянии взаимного ожидания ресурсов, выделенных друг другу, и ни один из них не может продолжать выполнение.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Условия возникновения тупиков (все 4 необходимы, Коффман, 1970):",
          }),
          createContentItem("list", {
            ordered: true,
            items: [
              "<strong>Взаимное исключение (Mutual exclusion):</strong> Ресурс может использоваться только одним процессом в данный момент времени.",
              "<strong>Удержание и ожидание (Hold and wait):</strong> Процесс удерживает уже выделенные ему ресурсы и запрашивает новые, которые заняты другими процессами.",
              "<strong>Неперераспределяемость (No preemption):</strong> Ресурс не может быть принудительно отобран у процесса; он должен быть освобожден самим процессом.",
              "<strong>Круговое ожидание (Circular wait):</strong> Существует кольцевая цепь из двух или более процессов, где каждый процесс ждет ресурс, удерживаемый следующим процессом в цепи.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Направления борьбы с тупиками:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Игнорирование проблемы</strong> (наиболее частый подход в ОС общего назначения).",
              "<strong>Предотвращение тупиков (Prevention):</strong> Устранение одного из четырех условий возникновения (например, запрос всех ресурсов сразу, упорядочивание запросов).",
              "<strong>Обход тупиков (Avoidance):</strong> Динамическое выделение ресурсов так, чтобы система всегда оставалась в безопасном состоянии (например, алгоритм банкира).",
              "<strong>Обнаружение тупиков (Detection):</strong> Периодический запуск алгоритма для проверки наличия тупика (например, анализ графа выделения ресурсов).",
              "<strong>Восстановление после тупиков (Recovery):</strong> Прерывание процессов, вытеснение ресурсов (preemption), откат (rollback).",
            ],
          }),
        ],
      },
      {
        id: "ipc-sync-classic-problems",
        title: "4.5. Классические Проблемы Синхронизации",
        path: "/ipc-sync/classic-problems",
        content: [
          createContentItem("paragraph", { text: "Основано на Лекции №6." }),
          createContentItem("list", {
            items: [
              "<strong>Проблема обедающих философов (Dining Philosophers Problem):</strong> 5 философов, 5 вилок. Демонстрирует проблему тупиков и голодания при разделении ресурсов.",
              "<strong>Проблема читателей и писателей (Readers-Writers Problem):</strong> Множество читателей могут одновременно читать данные, но писатель должен иметь эксклюзивный доступ. Различные стратегии приоритета (читателям или писателям).",
              "<strong>Проблема производителей и потребителей (Producer-Consumer / Bounded-Buffer Problem):</strong> Один или несколько производителей добавляют элементы в общий буфер ограниченного размера, один или несколько потребителей извлекают их. Требуется синхронизация доступа к буферу и счетчикам.",
              "<strong>Проблема спящего брадобрея (Sleeping Barber Problem):</strong> Моделирует ситуацию с одним сервером (брадобрей) и очередью клиентов. Брадобрей спит, если нет клиентов; клиенты ждут, если брадобрей занят и есть место в очереди, или уходят, если очередь полна.",
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 5. Управление Памятью
  // =================================================================================
  {
    id: "memory-management",
    title: "5. Управление Памятью",
    path: "/memory-management",
    subsections: [
      {
        id: "memory-management-concepts",
        title: "5.1. Основные Концепции",
        path: "/memory-management/concepts",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8 и вопросах к экзамену 26-30.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Управление памятью (Memory Management):</strong> Задача распределения оперативной памяти ОС для размещения нескольких процессов.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Требования к стратегиям управления памятью:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Перемещение (Relocation):</strong> Возможность перемещать программу из одной области памяти в другую во время выполнения.",
              "<strong>Защита (Protection):</strong> Защита памяти одного процесса от несанкционированного доступа со стороны других процессов.",
              "<strong>Совместное использование (Sharing):</strong> Возможность для нескольких процессов обращаться к одной и той же области памяти (например, для разделяемых библиотек).",
              "<strong>Логическая организация (Logical Organization):</strong> Поддержка модульности ПО, разделение на код, данные, стек.",
              "<strong>Физическая организация (Physical Organization):</strong> Организация взаимодействия между основной (ОП) и вторичной памятью (диск).",
            ],
          }),
          createContentItem("heading", { level: 4, text: "Типы адресов:" }),
          createContentItem("list", {
            items: [
              "<strong>Логический адрес (Виртуальный адрес):</strong> Генерируется ЦП, адрес в пределах адресного пространства процесса, не зависит от текущего расположения данных в физической памяти.",
              "<strong>Относительный адрес:</strong> Частный случай логического адреса; адрес определяется положением относительно некоторой известной точки (обычно начала программы).",
              "<strong>Физический адрес (Абсолютный адрес):</strong> Действительное расположение ячейки в оперативной памяти.",
              "<strong>MMU (Memory Management Unit):</strong> Аппаратное устройство, преобразующее логические адреса в физические.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "Фрагментация:" }),
          createContentItem("list", {
            items: [
              "<strong>Внутренняя фрагментация:</strong> Неиспользуемая память *внутри* выделенного процессу блока памяти (например, если блок больше, чем нужно процессу).",
              "<strong>Внешняя фрагментация:</strong> Свободная память разбита на множество мелких, несмежных участков. Суммарный объем свободной памяти может быть большим, но нет единого непрерывного блока достаточного размера для нового процесса.",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Уплотнение (Compaction):</strong> Перемещение всех занятых процессов в памяти так, чтобы вся свободная память образовала один непрерывный блок. Требует перемещаемости процессов и является затратной операцией.",
          }),
        ],
      },
      {
        id: "memory-management-simple",
        title: "5.2. Простейшие Стратегии Управления Памятью",
        path: "/memory-management/simple-strategies",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8 и вопросе к экзамену 26.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Распределение с фиксированными разделами (Fixed Partitioning):",
          }),
          createContentItem("list", {
            items: [
              "Память делится на несколько разделов фиксированного размера при загрузке системы.",
              "Процесс загружается в достаточно большой свободный раздел.",
              "<em>Проблемы:</em> Внутренняя фрагментация, ограничение на максимальный размер процесса, неэффективное использование памяти.",
              "Алгоритм размещения: каждый процесс в наименьший подходящий раздел; одна очередь для всех разделов.",
              "<em>Достоинства:</em> Простота, минимум требований к ОС.",
              "<em>Недостатки:</em> Ограниченное число активных процессов, неэффективное использование памяти малыми процессами.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Распределение с динамическими разделами (Dynamic Partitioning):",
          }),
          createContentItem("list", {
            items: [
              "Разделы создаются динамически под фактический размер загружаемого процесса.",
              "<em>Проблема:</em> Внешняя фрагментация.",
              "Алгоритмы размещения:<ul><li><strong>Первый подходящий (First-fit):</strong> Сканируется список свободных блоков, выбирается первый достаточно большой. Быстро.</li><li><strong>Наилучший подходящий (Best-fit):</strong> Выбирается самый маленький свободный блок, который достаточно велик. Может оставлять очень маленькие бесполезные блоки.</li><li><strong>Следующий подходящий (Next-fit):</strong> Поиск начинается с места, где закончился предыдущий поиск.</li></ul>",
              "<em>Достоинства:</em> Отсутствие внутренней фрагментации, более эффективное использование памяти.",
              "<em>Недостатки:</em> Внешняя фрагментация, необходимость уплотнения.",
            ],
          }),
        ],
      },
      {
        id: "memory-management-paging",
        title: "5.3. Страничная Организация (Paging)",
        path: "/memory-management/paging",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8 и вопросе к экзамену 27.",
          }),
          createContentItem("list", {
            items: [
              "<strong>Физическая память</strong> делится на блоки фиксированного размера – <strong>кадры (frames)</strong>.",
              "<strong>Логическая память процесса</strong> делится на блоки такого же размера – <strong>страницы (pages)</strong>.",
              "<strong>Таблица страниц (Page Table):</strong> Для каждого процесса. Хранит соответствие: номер виртуальной страницы -> номер физического кадра.",
              "Каждая запись в таблице страниц (PTE - Page Table Entry) содержит номер кадра и различные флаги (биты):<br/>- <strong>P (Present/Valid):</strong> Присутствует ли страница в ОП.<br/>- <strong>R/W (Read/Write):</strong> Права на чтение/запись.<br/>- <strong>U/S (User/Supervisor):</strong> Уровень привилегий (пользователь/ядро).<br/>- <strong>A (Accessed):</strong> Было ли обращение к странице (для алгоритмов замещения).<br/>- <strong>D (Dirty/Modified):</strong> Была ли страница модифицирована (для записи на диск при вытеснении).<br/>- PCD (Page Cache Disable), PWT (Page Write-Through) и др.",
              "<strong>Преобразование адреса:</strong> Логический адрес (номер страницы P, смещение D) -> MMU ищет в таблице страниц номер кадра F для страницы P -> Физический адрес = (номер кадра F * размер_страницы) + смещение D.",
              "<em>Достоинства:</em> Отсутствие внешней фрагментации, простота выделения памяти.",
              "<em>Недостатки:</em> Внутренняя фрагментация (в последней странице процесса), накладные расходы на хранение таблицы страниц.",
              "<strong>TLB (Translation Lookaside Buffer):</strong> Ассоциативный кэш для недавно использованных записей таблицы страниц. Ускоряет преобразование адресов.",
              "<strong>Многоуровневые таблицы страниц (Hierarchical Paging):</strong> Для уменьшения размера таблицы страниц в памяти, когда адресное пространство велико и разреженно. Таблица страниц сама разбивается на страницы.",
            ],
          }),
        ],
      },
      {
        id: "memory-management-segmentation",
        title: "5.4. Сегментная Организация (Segmentation)",
        path: "/memory-management/segmentation",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8 и вопросе к экзамену 27.",
          }),
          createContentItem("list", {
            items: [
              "Логическая память процесса делится на <strong>сегменты</strong> – логические единицы переменного размера (например, код, данные, стек, куча).",
              "<strong>Таблица сегментов (Segment Table):</strong> Для каждого процесса. Хранит для каждого сегмента: базовый физический адрес и длину (лимит) сегмента.",
              "<strong>Преобразование адреса:</strong> Логический адрес (номер сегмента S, смещение D) -> MMU находит запись для S в таблице сегментов. Проверяется, что <code>0 <= D < длина_сегмента_S</code>. Если да, то Физический адрес = Базовый_адрес_сегмента_S + D.",
              "<em>Достоинства:</em> Соответствует логической структуре программы, удобная защита и разделение сегментов (разные права для кода, данных).",
              "<em>Недостатки:</em> Внешняя фрагментация (как при динамических разделах), сложность управления свободной памятью.",
            ],
          }),
        ],
      },
      {
        id: "memory-management-virtual",
        title: "5.5. Виртуальная Память",
        path: "/memory-management/virtual-memory",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8 и вопросах к экзамену 28, 29.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Виртуальная память (Virtual Memory):</strong> Техника, позволяющая выполнять процессы, размер которых может превышать доступную физическую оперативную память. Только часть процесса (активное рабочее множество) находится в ОП в любой момент времени, остальное хранится на диске (в области подкачки – swap space или page file).",
          }),
          createContentItem("paragraph", {
            text: "Основана на <strong>Принципе локальности ссылок (Locality of Reference):</strong> В любой короткий промежуток времени процесс обращается лишь к небольшой части своего адресного пространства (временная и пространственная локальность).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Реализация (обычно на основе страничной организации):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Подкачка по требованию (Demand Paging):</strong> Страница загружается в ОП только тогда, когда к ней происходит обращение, а ее нет в памяти (генерируется <strong>ошибка отсутствия страницы - Page Fault</strong>).",
              "При Page Fault: ОС приостанавливает процесс, находит нужную страницу на диске, загружает ее в свободный физический кадр (если свободного кадра нет – выполняется замещение страницы), обновляет таблицу страниц, возобновляет процесс.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Стратегии выборки страниц (Fetch Policy):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Выборка по требованию (Demand Paging):</strong> Страница загружается в основную память только при обращении к ней.",
              "<strong>Предварительная выборка (Prepaging):</strong> Загружается не только страница, вызвавшая прерывание, но и несколько соседних страниц (или предсказанных).",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Стратегии замещения страниц (Replacement Policy):",
          }),
          createContentItem("paragraph", {
            text: "Выбор страницы в ОП для выгрузки на диск, если нет свободных кадров. Цель – выбрать страницу, которая не понадобится в ближайшее время.",
          }),
          createContentItem("list", {
            items: [
              "<strong>Оптимальный алгоритм (OPT / MIN):</strong> Выгружает страницу, к которой дольше всего не будет обращений в будущем. Не реализуем на практике, используется для сравнения.",
              '<strong>FIFO (First-In, First-Out):</strong> Выгружает самую "старую" (первой загруженную) страницу. Прост, но может выгружать часто используемые страницы (Аномалия Белади).',
              "<strong>LRU (Least Recently Used – Наименее давно использовавшаяся):</strong> Выгружает страницу, к которой дольше всего не было обращений. Хорошая производительность, но сложен в точной аппаратной реализации (требует отметки времени для каждой страницы).",
              '<strong>Аппроксимации LRU:</strong><ul><li><strong>Алгоритм второй попытки (Second Chance / Clock Algorithm):</strong> Использует бит обращения (reference bit, R-bit). Страницы организованы в кольцевой список. Указатель обходит список. Если R=0 – выгружаем. Если R=1 – сбрасываем R=0 и переходим к следующей.</li><li><strong>NUR (Not Used Recently) / NFU (Not Frequently Used):</strong> Используют биты обращения (R) и модификации (M или Dirty). Страницы делятся на классы (R=0,M=0; R=0,M=1; R=1,M=0; R=1,M=1), выгружается из наименее "ценного" класса.</li></ul>',
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Блокировка кадров (Frame Locking):</strong> Некоторые кадры (например, содержащие ядро ОС, важные структуры данных, буферы В/В) могут быть заблокированы от вытеснения.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Управление резидентным множеством (Resident Set Management):",
          }),
          createContentItem("paragraph", {
            text: "Определяет, сколько кадров выделить процессу.",
          }),
          createContentItem("list", {
            items: [
              "<strong>С фиксированным выделением:</strong> Процессу выделяется фиксированное число кадров.",
              "<strong>С переменным выделением:</strong> Число кадров для процесса может меняться.",
              "<strong>Локальная стратегия замещения:</strong> Страница выбирается для замещения только из множества страниц текущего процесса.",
              "<strong>Глобальная стратегия замещения:</strong> Страница может быть выбрана из множества страниц любого процесса.",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Пробуксовка (Thrashing):</strong> Ситуация, когда система тратит большую часть времени на подкачку страниц из-за недостатка физической памяти для активных рабочих множеств процессов. Производительность резко падает. Решение: управление степенью мультипрограммирования, алгоритм рабочего множества (Working Set Model).",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Стратегия очистки (Cleaning Policy):",
          }),
          createContentItem("list", {
            items: [
              '<strong>По требованию (Demand Cleaning):</strong> "Грязная" страница записывается на диск только тогда, когда она выбрана для замещения.',
              '<strong>Предварительная очистка (Precleaning):</strong> "Грязные" страницы периодически записываются на диск в фоновом режиме, до того как они будут выбраны для замещения.',
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Виртуальная память в Windows:",
          }),
          createContentItem("list", {
            items: [
              "Используется страничная организация.",
              "Менеджер виртуальной памяти (VMM).",
              "Состояния страниц реальной памяти: Valid, Modified, Standby, Free, Zeroed, Bad.",
              "Права доступа к страницам: <code>PAGE_NOACCESS</code>, <code>PAGE_READONLY</code>, <code>PAGE_READWRITE</code>, <code>PAGE_EXECUTE</code>, <code>PAGE_GUARD</code>.",
              "Алгоритм замещения LRU-подобный, локальный для процесса (в рамках его рабочего множества).",
              "Виртуальное адресное пространство процесса (например, 4ГБ) делится на пользовательскую часть и системную.",
              "Состояния страниц виртуальной памяти процесса: Свободны (free), Распределены для использования (committed), Зарезервированы, но не используются (reserved).",
              "API: <code>VirtualAlloc</code>, <code>VirtualFree</code>, <code>VirtualLock</code>, <code>VirtualUnlock</code>, <code>VirtualProtect</code>.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Основные режимы защиты виртуальной памяти (Вопрос №29):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Биты защиты в таблице страниц/сегментов:</strong> Для каждой страницы/сегмента хранятся права доступа (read, write, execute). Проверяются MMU. При нарушении – прерывание (segmentation fault / protection fault).",
              "<strong>Режимы работы процессора (Kernel mode / User mode):</strong> Код ядра работает в привилегированном режиме, пользовательские процессы – в ограниченном.",
              "<strong>Предельные регистры (для сегментации):</strong> Базовый и предельный регистр определяют допустимый диапазон адресов.",
            ],
          }),
        ],
      },
      {
        id: "memory-management-mmf",
        title: "5.6. Отображение Файлов в Память (MMF)",
        path: "/memory-management/mmf",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №8, Лаб. 7 и вопросе к экзамену 30.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Отображение файлов в память (Memory-Mapped Files - MMF):</strong> Механизм, позволяющий ОС отобразить содержимое файла (или его часть) непосредственно в виртуальное адресное пространство процесса. После этого к файлу можно обращаться как к обычной области памяти (например, через указатели).",
          }),
          createContentItem("heading", { level: 4, text: "Преимущества:" }),
          createContentItem("list", {
            items: [
              "<strong>Удобство:</strong> Работа с файлом как с массивом в памяти, без явных вызовов <code>read()</code>/<code>write()</code>.",
              "<strong>Производительность:</strong> Часто быстрее, чем традиционный В/В, т.к. избегается копирование данных между буферами ядра и пользователя. ОС использует свою страничную подсистему для ленивой загрузки данных из файла и отложенной записи изменений.",
              "<strong>Разделение памяти:</strong> Если несколько процессов отображают один и тот же файл с флагом разделяемого доступа, они получают доступ к одной и той же физической памяти, что является эффективным способом IPC.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "Использование:" }),
          createContentItem("list", {
            items: [
              "Загрузка исполняемых файлов и динамических библиотек.",
              "Работа с большими файлами.",
              "Межпроцессное взаимодействие (IPC) через разделяемую память.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "В Linux (POSIX):" }),
          createContentItem("list", {
            items: [
              "<code>caddr_t mmap(caddr_t addr, int size, int prot, int flags, int fd, off_t pos);</code><br/>- <code>addr</code>: желаемый начальный адрес (обычно <code>NULL</code>, система выбирает).<br/>- <code>size</code>: размер отображаемой области.<br/>- <code>prot</code>: права доступа (<code>PROT_READ</code>, <code>PROT_WRITE</code>, <code>PROT_EXEC</code>, <code>PROT_NONE</code>).<br/>- <code>flags</code>: опции (<code>MAP_SHARED</code> - изменения видны другим и пишутся в файл; <code>MAP_PRIVATE</code> - copy-on-write, изменения локальны; <code>MAP_ANONYMOUS</code> - не связано с файлом; <code>MAP_FIXED</code> - использовать указанный <code>addr</code>).<br/>- <code>fd</code>: файловый дескриптор открытого файла.<br/>- <code>pos</code> (offset): смещение в файле (кратно размеру страницы).",
              "<code>int munmap(caddr_t addr, int size);</code>: Отсоединяет отображение.",
              "<code>int msync(caddr_t addr, int size, int flags);</code>: Синхронизирует данные в памяти с файлом на диске (<code>MS_SYNC</code>, <code>MS_ASYNC</code>, <code>MS_INVALIDATE</code>).",
            ],
          }),
          createContentItem("heading", { level: 4, text: "В Windows:" }),
          createContentItem("paragraph", { text: "Алгоритм работы:" }),
          createContentItem("list", {
            ordered: true,
            items: [
              "Открыть файл с нужными правами (<code>CreateFile</code>).",
              'Создать объект ядра "отображение файла в память" (<code>CreateFileMapping</code>).',
              "Отобразить файл (или его часть) в адресное пространство процесса (<code>MapViewOfFile</code>).",
              "Выполнить действия с проекцией файла.",
              "Отменить отображение (<code>UnmapViewOfFile</code>).",
              "Закрыть объект ядра для отображения файла (<code>CloseHandle</code> на дескриптор от <code>CreateFileMapping</code>).",
              "Закрыть файл (<code>CloseHandle</code> на дескриптор от <code>CreateFile</code>).",
            ],
          }),
          createContentItem("list", {
            items: [
              "<code>HANDLE CreateFileMapping(HANDLE hFile, LPSECURITY_ATTRIBUTES lpAttributes, DWORD flProtect, DWORD dwMaximumSizeHigh, DWORD dwMaximumSizeLow, LPCTSTR lpName);</code><br/>- <code>hFile</code>: дескриптор файла (может быть <code>INVALID_HANDLE_VALUE</code> для создания разделяемой памяти, не связанной с файлом, но тогда нужно указать размер).<br/>- <code>flProtect</code>: права доступа к страницам памяти (<code>PAGE_READONLY</code>, <code>PAGE_READWRITE</code>, <code>PAGE_EXECUTE_READ</code> и т.д.).<br/>- <code>dwMaximumSizeHigh/Low</code>: максимальный размер объекта отображения.<br/>- <code>lpName</code>: имя объекта (для разделения между процессами).",
              "<code>LPVOID MapViewOfFile(HANDLE hMapObject, DWORD dwDesiredAccess, DWORD dwOffsetHigh, DWORD dwOffsetLow, SIZE_T cbMap);</code><br/>- <code>hMapObject</code>: дескриптор от <code>CreateFileMapping</code>.<br/>- <code>dwDesiredAccess</code>: права доступа к представлению (<code>FILE_MAP_READ</code>, <code>FILE_MAP_WRITE</code>, <code>FILE_MAP_ALL_ACCESS</code>, <code>FILE_MAP_COPY</code> - для copy-on-write).<br/>- <code>dwOffsetHigh/Low</code>: смещение в файле.<br/>- <code>cbMap</code>: размер отображаемого участка.",
              "<code>BOOL UnmapViewOfFile(LPVOID lpBaseAddress);</code>",
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 6. Управление Вводом-Выводом (I/O)
  // =================================================================================
  {
    id: "io-management",
    title: "6. Управление Вводом-Выводом (I/O)",
    path: "/io-management",
    subsections: [
      {
        id: "io-management-devices",
        title: "6.1. Устройства В/В и Контроллеры",
        path: "/io-management/devices",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №9 и вопросе к экзамену 31.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Классификация устройств В/В:",
          }),
          createContentItem("list", {
            items: [
              "<strong>По взаимодействию с пользователем/машиной:</strong><ul><li>Устройства для взаимодействия с человеком (клавиатура, мышь, дисплей, принтер).</li><li>Устройства для взаимодействия с машиной (диски, сетевые карты, датчики).</li><li>Коммуникационные устройства (модемы, сетевые адаптеры).</li></ul>",
              "<strong>По скорости передачи данных:</strong> Медленные, средние, быстрые.",
              "<strong>По способу передачи данных:</strong><ul><li><strong>Блочные устройства (Block devices):</strong> Хранят информацию в блоках фиксированного размера с уникальными адресами (диски). Чтение/запись блоками.</li><li><strong>Символьные устройства (Character devices):</strong> Доставляют или принимают поток символов без структуры блоков (клавиатура, мышь, принтер, последовательные порты). Не адресуемы, нет операции поиска.</li></ul>",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Контроллеры устройств (Device Controllers):",
          }),
          createContentItem("paragraph", {
            text: "Электронная часть устройства (адаптер). Содержит регистры для команд, данных и статуса, через которые ОС управляет устройством. Может иметь буфер данных.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Отображение В/В на адресное пространство памяти:",
          }),
          createContentItem("list", {
            items: [
              "<strong>1. Порты В/В (Port-Mapped I/O):</strong> Каждому регистру контроллера назначается номер порта. Доступ через специальные инструкции ЦП (<code>IN</code>, <code>OUT</code> в x86). Два адресных пространства (память и порты).",
              "<strong>2. В/В, отображаемый на память (Memory-Mapped I/O - MMIO):</strong> Управляющие регистры и буферы данных отображаются на адресное пространство физической памяти. Доступ через обычные команды работы с памятью. Одно адресное пространство.<em><br/>Достоинства:</em> Не нужны спец. команды, не нужен спец. механизм защиты, все команды для памяти применимы.<br/><em>Недостатки:</em> Нужна аппаратура для выборочного запрета кэширования, все адреса должны проверяться и памятью, и устройствами.",
              "<strong>3. Гибридная схема:</strong> Буферы устройств - MMIO, управляющие регистры - порты В/В (например, IBM PC).",
            ],
          }),
        ],
      },
      {
        id: "io-management-methods",
        title: "6.2. Способы Реализации В/В",
        path: "/io-management/methods",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №9 и вопросе к экзамену 32.",
          }),
          createContentItem("list", {
            items: [
              "<strong>1. Программируемый В/В (Programmed I/O - PIO):</strong><ul><li>Процессор полностью контролирует операцию В/В.</li><li><strong>Опрос (Polling / Busy-waiting):</strong> ЦП посылает команды контроллеру и постоянно проверяет регистр статуса устройства в цикле, ожидая завершения операции. Неэффективно, т.к. ЦП занят ожиданием.</li></ul>",
              "<strong>2. В/В, управляемый прерываниями (Interrupt-driven I/O):</strong><ul><li>ЦП инициирует операцию В/В и продолжает выполнять другие задачи (вызвавший процесс может быть заблокирован).</li><li>Когда устройство завершает операцию, оно посылает ЦП сигнал <strong>прерывания (interrupt)</strong>.</li><li>ЦП приостанавливает текущую задачу, сохраняет контекст и передает управление <strong>обработчику прерывания (Interrupt Service Routine - ISR)</strong>, который является частью драйвера устройства.</li><li>ISR обрабатывает событие и возвращает управление. Значительно эффективнее PIO.</li></ul>",
              "<strong>3. Прямой доступ к памяти (Direct Memory Access - DMA):</strong><ul><li>Для высокоскоростного обмена данными между устройством и ОП <strong>без активного участия ЦП</strong>.</li><li><strong>DMA-контроллер (DMAC):</strong> Специализированный процессор, управляющий передачей.</li><li>Процесс DMA: ЦП программирует DMAC (адреса, количество байт, направление), DMAC выполняет передачу, по завершении генерирует прерывание для ЦП.</li><li>Режимы работы DMA: Сквозной (устройство -> память), Непрямой (устройство -> DMAC -> память).</li><li>Значительно разгружает ЦП.</li></ul>",
            ],
          }),
        ],
      },
      {
        id: "io-management-buffering-drivers",
        title: "6.3. Буферизация и Драйверы",
        path: "/io-management/buffering-drivers",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №9 и вопросе к экзамену 33.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Буферизация (Buffering):",
          }),
          createContentItem("paragraph", {
            text: "Использование области памяти (буфера) для временного хранения данных во время их передачи между устройством и приложением, или между устройствами.",
          }),
          createContentItem("list", {
            items: [
              '<strong>Цели:</strong> Сглаживание разницы скоростей, адаптация к разным размерам блоков данных, поддержка "копирующей семантики" (вызов возвращается до завершения физ. записи).',
              "<strong>Типы буферизации:</strong><ul><li><strong>Одиночная буферизация:</strong> Один буфер.</li><li><strong>Двойная буферизация:</strong> Два буфера (пока один передается, другой заполняется/читается).</li><li><strong>Кольцевой буфер (Circular Buffer):</strong> Несколько буферов в кольце.</li></ul>",
              "<strong>Кэширование (Caching):</strong> Особый вид буферизации. Хранение копии часто используемых данных в быстрой памяти (кэше) для ускорения последующих обращений.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Драйверы устройств (Device Drivers):",
          }),
          createContentItem("list", {
            items: [
              "Программный модуль (обычно режима ядра, загружаемый), предназначенный для управления конкретным типом устройства.",
              "Образует интерфейс между диспетчером В/В ядра и оборудованием.",
              "<strong>Функции драйвера:</strong> Инициализация устройства, прием запросов от ОС, преобразование запросов в команды для контроллера устройства, управление передачей данных (PIO, прерывания, DMA), обработка прерываний, обработка ошибок, управление питанием.",
              "Код драйвера должен быть <strong>реентерабельным</strong> (поддерживать повторный вызов во время обработки первого).",
              "<strong>Виды драйверов (Windows):</strong> Аппаратных устройств, файловой системы, фильтра ФС, сетевые редиректоры/серверы, протоколов, потоковых фильтров ядра.",
              "<strong>Модели драйверов Windows:</strong> WDM (Windows Driver Model - Plug and Play, управление питанием), WDF (Windows Driver Foundation) -> KMDF (Kernel Mode), UMDF (User Mode).",
              "<strong>Структура драйверов:</strong> Одноуровневые (монолитные), Многоуровневые (шинные, фильтр-драйверы, функциональные).",
            ],
          }),
        ],
      },
      {
        id: "io-management-hdd",
        title: "6.4. Жесткие Диски (HDD)",
        path: "/io-management/hdd",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и вопросе к экзамену 34.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Физическое устройство HDD:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Магнитные пластины (platters):</strong> Вращающиеся диски с магнитным покрытием.",
              "<strong>Шпиндель (spindle):</strong> Ось вращения пластин.",
              "<strong>Головки чтения/записи (heads):</strong> По одной (или две) на каждую рабочую поверхность пластины, перемещаются радиально.",
              "<strong>Консоль (привод) головок (disk arm/actuator):</strong> Механизм перемещения головок.",
              "<strong>Устаревшая геометрия (CHS):</strong><ul><li><strong>Цилиндр (Cylinder):</strong> Набор всех дорожек на одном радиальном расстоянии от центра на всех пластинах.</li><li><strong>Дорожка (Track):</strong> Концентрическая окружность на поверхности пластины.</li><li><strong>Сектор (Sector):</strong> Наименьшая адресуемая единица хранения (обычно 512 байт или 4 КБ).</li></ul>",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Логическое устройство HDD:",
          }),
          createContentItem("list", {
            items: [
              "Современные диски используют <strong>LBA (Logical Block Addressing)</strong>: Диск представляется как линейный массив логических блоков.",
              "Контроллер диска сам преобразует LBA в физическую геометрию (CHS).",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Время доступа к данным = Время позиционирования (seek time) + Время вращательного ожидания (rotational latency) + Время передачи (transfer time).</strong><br/>- <em>Seek time:</em> Перемещение головок на нужный цилиндр (самая значительная часть).<br/>- <em>Rotational latency:</em> Ожидание поворота нужного сектора под головку.<br/>- <em>Transfer time:</em> Чтение/запись данных.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Форматирование диска:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Низкоуровневое форматирование (Low-level):</strong> Создание дорожек и секторов, запись служебной информации. Выполняется производителем.",
              "<strong>Разбиение на разделы (Partitioning):</strong> Диск делится на логические разделы. Информация о разделах хранится в <strong>MBR (Master Boot Record)</strong> или <strong>GPT (GUID Partition Table)</strong>.",
              "<strong>Высокоуровневое форматирование (High-level):</strong> Создание файловой системы (FAT32, NTFS, ext4) внутри раздела. Запись структур ФС.",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Барьеры размеров дисков (исторические):</strong> 31.5 ГБ (CHS), 137 ГБ (LBA-28), 2.2 ТБ (MBR), 144 ПБ (LBA-48).",
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 7. Файловые Системы (ФС)
  // =================================================================================
  {
    id: "file-systems",
    title: "7. Файловые Системы (ФС)",
    path: "/file-systems",
    subsections: [
      {
        id: "file-systems-concepts",
        title: "7.1. Концепции ФС. Файлы и Каталоги",
        path: "/file-systems/concepts",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и вопросе к экзамену 35.",
          }),
          createContentItem("paragraph", {
            text: "<strong>Файловая система (File System - FS):</strong> Часть ОС, отвечающая за организацию, хранение, именование, доступ и управление файлами на носителях информации. Предоставляет 2 основных сервиса: сервис хранения (storage service) и сервис каталогов (directory service).",
          }),
          createContentItem("paragraph", {
            text: "<strong>Том (Volume):</strong> Часть накопителя (раздел), в которой может размещаться файловая система и множество файлов.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Задачи файловой системы:",
          }),
          createContentItem("list", {
            items: [
              "Соответствие требованиям пользователя по хранению и операциям.",
              "Гарантия корректности данных.",
              "Оптимизация производительности.",
              "Поддержка I/O для различных типов устройств.",
              "Минимизация потерь/повреждений данных.",
              "Стандартизированный набор подпрограмм интерфейса I/O.",
              "Поддержка коллективного использования данных.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "Аспекты ФС:" }),
          createContentItem("list", {
            items: [
              "<strong>Пользователь:</strong> Именование файлов, защита, операции с файлами.",
              "<strong>Программист (реализация):</strong> Реализация файлов/каталогов, адресация на носителе, бит-карты свободных/занятых блоков.",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Аппаратная независимость ФС:</strong> Символьные имена (логическое представление, NewDirectory\\NewFile.txt) vs Физические имена (расположение, диск 2, блоки 252-253).",
          }),
          createContentItem("heading", { level: 3, text: "Файлы:" }),
          createContentItem("list", {
            items: [
              "<strong>Именование:</strong> Длина (8-255 символов), набор символов (ASCII, Unicode), регистрозависимость (Unix) / регистронезависимость (Windows), наличие расширения (формат 8.3 MS-DOS).",
              '<strong>Типы файлов:</strong><ul><li>Обычные файлы (текстовые, двоичные).</li><li>Каталоги (директории).</li><li>Специальные файлы (Unix: устройства, каналы).</li><li>Ссылки (Links):<br/>- <em>Жесткая ссылка (Hard Link):</em> Запись в каталоге, указывающая на тот же inode/позицию файла. Несколько имен для одного файла. Действует в пределах одной ФС. Файл удаляется, когда счетчик ссылок = 0.<br/>- <em>Символическая (мягкая) ссылка (Symbolic/Soft Link):</em> Файл, содержащий путь к другому файлу (Unix: symlink, Windows: ярлык/shortcut, MacOS: alias). Может указывать на файлы в других ФС. Если целевой файл удален, ссылка становится "битой".</li></ul>',
              "<strong>Доступ к файлам:</strong> Последовательный, Произвольный (прямой).",
              "<strong>Атрибуты файлов (метаданные):</strong><ul><li>Защита, Пароль.</li><li>Создатель, Владелец.</li><li>Флаги: «только чтение», «скрытый», «системный», «архивный», ASCII/двоичный, произвольного доступа, «временный».</li><li>Флаги блокировки.</li><li>Длина записи.</li><li>Время создания, Время последнего доступа, Время последнего изменения.</li><li>Текущий размер, Максимальный размер.</li></ul>",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Каталоги (Директории):",
          }),
          createContentItem("list", {
            items: [
              "Средство организованного размещения файлов на накопителе; ускорение поиска.",
              "<strong>Структуры каталогов:</strong> Одноуровневые (плоская модель), Двухуровневые, Иерархические (древовидные).",
              "<strong>Имя пути (Pathname):</strong><ul><li><em>Корневой каталог (root directory):</em> <code>C:</code> (Windows), <code>/</code> (UNIX).</li><li><em>Абсолютное имя пути:</em> От корневого каталога (<code>\\home\\user\\file</code>, <code>/home/user/file</code>).</li><li><em>Относительное имя пути:</em> От текущего рабочего каталога (<code>working directory</code>).</li></ul>",
              "<strong>Специальные элементы в каталогах (Unix-like):</strong> <code>.</code> (текущий каталог), <code>..</code> (родительский каталог).",
              "<strong>Реализация каталогов:</strong> Простой список пар (имя файла, указатель на inode/данные), хеш-таблица, B-деревья.",
            ],
          }),
        ],
      },
      {
        id: "file-systems-operations",
        title:
          "7.2. Операции с Файлами и Каталогами. Совместное использование.",
        path: "/file-systems/operations",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и вопросе к экзамену 36.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Операции с файлами (Системные вызовы):",
          }),
          createContentItem("table", {
            headers: ["Операция", "Windows API", "POSIX API"],
            rows: [
              [
                "Create (создание)",
                "<code>CreateFile</code>",
                "<code>creat</code>, <code>open</code> (с флагами)",
              ],
              [
                "Delete (удаление)",
                "<code>DeleteFile</code>",
                "<code>unlink</code>",
              ],
              [
                "Open (открытие)",
                "<code>CreateFile</code>",
                "<code>open</code>",
              ],
              [
                "Close (закрытие)",
                "<code>CloseHandle</code>",
                "<code>close</code>",
              ],
              ["Read (чтение)", "<code>ReadFile</code>", "<code>read</code>"],
              [
                "Write (запись)",
                "<code>WriteFile</code>",
                "<code>write</code>",
              ],
              [
                "Append (добавление в конец)",
                "(открытие с флагом)",
                "(открытие с флагом <code>O_APPEND</code>)",
              ],
              [
                "Seek (поиск/позиционирование)",
                "<code>SetFilePointer</code>",
                "<code>lseek</code>",
              ],
              [
                "Get attributes (получение атрибутов)",
                "<code>GetFileAttributes</code>",
                "<code>stat</code>, <code>fstat</code>, <code>listxattr</code>, <code>getxattr</code>",
              ],
              [
                "Set attributes (установка атрибутов)",
                "<code>SetFileAttributes</code>",
                "<code>chmod</code>, <code>chown</code>, <code>utime</code>, <code>setxattr</code>",
              ],
              [
                "Rename (переименование)",
                "<code>MoveFile</code>",
                "<code>rename</code>",
              ],
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Операции с каталогами (Системные вызовы):",
          }),
          createContentItem("table", {
            headers: ["Операция", "Windows API", "POSIX API"],
            rows: [
              [
                "Create (создать каталог)",
                "<code>CreateDirectory</code>",
                "<code>mkdir</code>",
              ],
              [
                "Delete (удалить каталог)",
                "<code>RemoveDirectory</code>",
                "<code>rmdir</code>",
              ],
              [
                "Opendir (открыть каталог)",
                "<code>FindFirstFile</code>",
                "<code>opendir</code>",
              ],
              [
                "Closedir (закрыть каталог)",
                "<code>FindClose</code>",
                "<code>closedir</code>",
              ],
              [
                "Readdir (прочитать след. элемент)",
                "<code>FindNextFile</code>",
                "<code>readdir</code>",
              ],
              [
                "Rename (переименование каталога)",
                "<code>MoveFile</code>",
                "<code>rename</code> (для каталогов тоже)",
              ],
              [
                "Link (связывание - жесткая ссылка)",
                "<code>CreateHardLink</code>",
                "<code>link</code>",
              ],
              [
                "SymLink (символическая ссылка)",
                "<code>CreateSymbolicLink</code>",
                "<code>symlink</code>",
              ],
              [
                "Unlink (удаление ссылки из каталога)",
                "<code>DeleteFile</code> (для файлов)",
                "<code>unlink</code> (для файлов и ссылок)",
              ],
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Совместное использование файлов (File Sharing):",
          }),
          createContentItem("list", {
            items: [
              "Несколько процессов могут одновременно иметь доступ к одному файлу.",
              "<strong>Проблемы:</strong> Синхронизация доступа для избежания гонок и потери данных.",
              "<strong>Механизмы управления совместным доступом:</strong><ul><li><strong>Блокировки файлов (File Locks):</strong><br/>- <em>Разделяемая (Shared / Read lock):</em> Несколько процессов могут читать.<br/>- <em>Исключительная (Exclusive / Write lock):</em> Только один процесс может писать.<br/>- Блокировки на весь файл или на его часть (диапазон байт).<br/>- <em>Рекомендательные (Advisory locks):</em> ОС не принуждает, процессы кооперируются (Unix <code>fcntl()</code>, <code>flock()</code>).<br/>- <em>Обязательные (Mandatory locks):</em> ОС принудительно блокирует доступ.</li><li><strong>Семантика сессий (Unix):</strong> Запись одного пользователя не видна другим, пока файл не закрыт.</li><li><strong>Неизменяемые общие файлы (Immutable Shared Files).</strong></li></ul>",
              "<strong>Таблицы открытых файлов:</strong><ul><li><em>Таблица открытых файлов процесса:</em> Для каждого процесса. Указатель на системную таблицу.</li><li><em>Системная таблица открытых файлов:</em> Одна на систему. Информация о файле (режим, позиция, указатель на inode/FCB), счетчик открытий.</li></ul>",
            ],
          }),
        ],
      },
      {
        id: "file-systems-implementation",
        title: "7.3. Реализация ФС. Монтирование.",
        path: "/file-systems/implementation",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и Лаб. 8.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Методы выделения дискового пространства (Реализация файлов):",
          }),
          createContentItem("list", {
            items: [
              "<strong>1. Непрерывное размещение (Contiguous Allocation):</strong><br/>- Файл занимает смежные блоки на диске.<br/>- <em>Плюсы:</em> Простой доступ, высокая скорость чтения/записи (минимальное перемещение головок).<br/>- <em>Минусы:</em> Внешняя фрагментация, сложность определения начального размера файла, проблемы с ростом файла.",
              "<strong>2. Связный список (Linked Allocation):</strong><br/>- Блоки файла могут быть разбросаны по диску. Каждый блок содержит указатель на следующий блок.<br/>- Запись в каталоге указывает на первый блок.<br/>- <em>Плюсы:</em> Нет внешней фрагментации, файл может легко расти.<br/>- <em>Минусы:</em> Только последовательный доступ эффективен (произвольный доступ медленный), ненадежность (потеря указателя -> потеря части файла), место под указатели в каждом блоке.",
              "<strong>3. Связный список с таблицей в памяти (FAT - File Allocation Table):</strong><br/>- Модификация связанного списка. Таблица FAT хранится в начале тома, содержит по одной записи для каждого блока диска. Запись содержит номер следующего блока файла или специальный маркер (конец файла, свободный блок, плохой блок).<br/>- Запись в каталоге указывает на номер первого блока файла в FAT.<br/>- <em>Плюсы:</em> Произвольный доступ эффективнее, вся информация о связях в одном месте.<br/>- <em>Минусы:</em> Размер FAT может быть большим, FAT должна быть в памяти для быстрой работы, повреждение FAT критично.",
              "<strong>4. Индексные узлы (I-nodes / Indexed Allocation):</strong> (UNIX-подобные системы)<br/>- Для каждого файла создается структура данных <strong>i-node</strong>, которая хранит метаданные файла (атрибуты) и указатели на блоки данных файла.<br/>- Указатели могут быть прямыми (на блоки данных), косвенными (на блоки, содержащие указатели на блоки данных), двойной/тройной косвенности для очень больших файлов.<br/>- Запись в каталоге содержит имя файла и номер его i-node.<br/>- <em>Плюсы:</em> Поддерживает произвольный доступ, нет внешней фрагментации, эффективен для малых и больших файлов.<br/>- <em>Минусы:</em> Накладные расходы на хранение i-node, дополнительный дисковый доступ для чтения i-node.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Управление свободным пространством:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Битовые таблицы (Bitmap / Bit Vector):</strong> Каждый бит соответствует блоку диска (1 – занят, 0 – свободен). Просто и эффективно для нахождения смежных свободных блоков.",
              "<strong>Цепочки свободных порций (Linked List of Free Blocks):</strong> Свободные блоки связаны в список. Первый свободный блок содержит указатель на следующий и т.д. Просто, но сложно найти смежные блоки.",
              "<strong>Индексирование (Indexing):</strong> Хранение указателей на все свободные блоки в специальном блоке (как в i-node).",
              "<strong>Список свободных блоков (Free Block List):</strong> Подходит, если много свободных блоков объединены в группы.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Монтирование ФС (Mounting):",
          }),
          createContentItem("list", {
            items: [
              "Процесс объединения нескольких файловых систем (с разных устройств или разделов) в единое иерархическое пространство имен.",
              '<strong>Точка монтирования (Mount Point):</strong> Существующий каталог в "родительской" ФС, к которому "прикрепляется" корневой каталог монтируемой ФС. Содержимое точки монтирования становится временно недоступным.',
              "<strong>В Linux:</strong> Нет буквенных обозначений дисков. Одна корневая ФС (<code>/</code>). Команда <code>mount -t <тип_фс> <устройство> <точка_монтирования></code>. Команда <code>umount <точка_монтирования_или_устройство></code>. Файл <code>/etc/fstab</code> для автоматического монтирования при загрузке.",
              "<strong>В Windows:</strong> Традиционно - буквы дисков (C:, D:). NTFS 5.0 и новее поддерживают монтирование томов в пустые каталоги на NTFS-томах (точки подключения томов, volume mount points). Утилиты <code>mountvol</code>, <code>mklink</code> (для символических ссылок и junction points).",
            ],
          }),
        ],
      },
      {
        id: "file-systems-reliability-performance",
        title: "7.4. Надежность и Производительность ФС",
        path: "/file-systems/reliability-performance",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и вопросе к экзамену 37.",
          }),
          createContentItem("heading", { level: 3, text: "Надежность ФС:" }),
          createContentItem("list", {
            items: [
              "<strong>Резервные копии (Backup):</strong> Физическая (образ диска) / Логическая (файлы). Полная, инкрементная, дифференциальная.",
              "<strong>Непротиворечивость ФС (Consistency):</strong> Утилиты проверки и исправления ошибок (<code>fsck</code> в Unix, <code>chkdsk</code>/<code>scandisk</code> в Windows).",
              "<strong>Журналирование (Journaling):</strong> (NTFS, ext3/ext4, HFS+)<br/>- Перед выполнением операций с метаданными (а иногда и с данными), ФС записывает информацию об этих операциях в специальный файл – <strong>журнал (log)</strong>.<br/>- Если происходит сбой, после перезагрузки ОС проверяет журнал и либо завершает незавершенные транзакции (redo), либо отменяет их (undo), приводя ФС в согласованное состояние.",
              "<strong>Теневое копирование (Shadow Paging / Copy-on-Write - CoW):</strong> (ZFS, Btrfs)<br/>- При изменении данных или метаданных они записываются в новое место на диске, а не поверх старых. Старые данные остаются нетронутыми до тех пор, пока новая запись не будет успешно завершена. Указатели на данные обновляются атомарно.<br/>- Обеспечивает согласованность, позволяет легко создавать снимки (snapshots).",
              "<strong>RAID (Redundant Array of Independent Disks):</strong> Массив независимых дисков для повышения надежности (избыточность) и/или производительности. Уровни: 0 (чередование), 1 (зеркалирование), 2 (контроль по Хеммингу), 3 (побитовый XOR), 4 (блочный XOR), 5 (блочный XOR с распределением четности), 6 (двойная четность).",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Производительность ФС:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Кэширование (Caching / Buffering):</strong> Хранение часто используемых блоков данных в ОП (дисковый кэш / буферный кэш).",
              "<strong>Опережающее чтение диска (Read-ahead):</strong> Если ФС предполагает, что потребуются следующие блоки (например, при последовательном чтении), она загружает их в кэш заранее.",
              "<strong>Отложенная запись (Delayed Write / Write-back Caching):</strong> Изменения сначала записываются в кэш, а на диск – позже (когда система менее загружена, по таймеру, или при вызове <code>sync()</code>). Ускоряет запись, но есть риск потери данных при сбое питания (если нет журналирования или энергонезависимого кэша).",
              "<strong>Диспетчеризация дисковых операций (Disk Scheduling):</strong> Алгоритмы упорядочивания запросов к диску для минимизации перемещения головок (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK).",
              "<strong>Реорганизация диска (Дефрагментация):</strong> Процесс объединения фрагментированных файлов в непрерывные области. Уменьшает время позиционирования.",
              "<strong>Сжатие данных:</strong> Уменьшает объем данных на диске, но требует процессорного времени на сжатие/распаковку.",
              "<strong>Репликация часто используемых данных</strong> (например, в RAID-массивах).",
            ],
          }),
        ],
      },
      {
        id: "file-systems-sync-async-io",
        title: "7.5. Синхронный и Асинхронный Ввод-Вывод",
        path: "/file-systems/sync-async-io",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №10 и вопросе к экзамену 38.",
          }),
          createContentItem("list", {
            items: [
              "<strong>Синхронный В/В (Synchronous I/O) / Блокирующий В/В (Blocking I/O):</strong><br/>- Процесс/поток, выполняющий операцию В/В (например, <code>read()</code> или <code>write()</code>), блокируется (переходит в состояние ожидания) до тех пор, пока операция не будет полностью завершена (данные прочитаны в буфер процесса или записаны из буфера процесса в системный буфер/на устройство).<br/>- Управление возвращается процессу только после завершения В/В.<br/>- Прост в программировании, но может снижать производительность и отзывчивость, если процесс мог бы выполнять другую работу во время ожидания.",
              "<strong>Асинхронный В/В (Asynchronous I/O) / Неблокирующий В/В (Non-blocking I/O) / Перекрывающийся В/В (Overlapped I/O в Windows):</strong><br/>- Процесс/поток инициирует операцию В/В, и управление немедленно (или почти немедленно) возвращается процессу, позволяя ему продолжать выполнение другой работы.<br/>- ОС уведомляет процесс о завершении операции В/В позже (например, через сигнал, callback-функцию, установку события, или процесс сам периодически проверяет статус).<br/>- <strong>В Windows:</strong><ul><li>Файл должен быть открыт с флагом <code>FILE_FLAG_OVERLAPPED</code>.</li><li>Функции <code>ReadFile</code> и <code>WriteFile</code> используются со структурой <code>OVERLAPPED</code>.</li><li>Если операция не завершилась немедленно, функция возвращает <code>FALSE</code>, а <code>GetLastError()</code> возвращает <code>ERROR_IO_PENDING</code>.</li><li>Момент завершения определяется: переход дескриптора файла в сигнальное состояние или использование специального события (<code>hEvent</code> в структуре <code>OVERLAPPED</code>), которое ОС устанавливает в сигнальное состояние. Ожидание события через <code>WaitForSingleObject</code>.</li></ul>",
              "- <strong>В *nix:</strong><ul><li>Установка флага <code>O_NONBLOCK</code> при открытии файла (<code>open</code>) или с помощью <code>fcntl()</code> с операцией <code>F_SETFL</code>.</li><li>Если операция не может быть выполнена немедленно (например, нет данных для чтения), вызов возвращает ошибку (<code>EAGAIN</code> или <code>EWOULDBLOCK</code>). Процесс должен повторять попытки или использовать механизмы мультиплексирования.</li><li>Механизмы мультиплексирования В/В: <code>select()</code>, <code>poll()</code>, <code>epoll()</code> (Linux) позволяют мониторить несколько файловых дескрипторов на готовность к В/В без блокировки.</li><li>Истинный асинхронный В/В (AIO): POSIX AIO (<code>aio_read()</code>, <code>aio_write()</code>).</li></ul>",
              "- Сложнее в программировании, но позволяет достичь большей производительности и отзывчивости, особенно для серверных приложений.",
            ],
          }),
        ],
      },
    ],
  },
  // =================================================================================
  // 8. Безопасность и Защита в ОС
  // =================================================================================
  {
    id: "security",
    title: "8. Безопасность и Защита в ОС",
    path: "/security",
    subsections: [
      {
        id: "security-concepts",
        title: "8.1. Основные Понятия. Аутентификация и Авторизация.",
        path: "/security/concepts",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №11 (или 12 по нумерации на слайдах) и вопросе к экзамену 39.",
          }),
          createContentItem("heading", { level: 4, text: "Определения:" }),
          createContentItem("list", {
            items: [
              "<strong>Безопасность:</strong> Общая проблема, связанная с гарантированием того, что файлы не читаются и не модифицируются неавторизованными лицами. Состояние защищенности.",
              "<strong>Механизмы защиты:</strong> Специфические механизмы ОС, используемые для обеспечения информационной безопасности.",
              "<strong>Контроль доступа:</strong> Разрешение доступа к ресурсу только авторизованным пользователям этого ресурса.",
              "<strong>Объекты:</strong> Ресурсы, которые требуется защитить (файлы, память, устройства и т.д.).",
              "<strong>Субъекты:</strong> Активные ресурсы, которые выполняют операции над объектами (процессы, потоки, пользователи).",
              "<strong>Менеджер/монитор безопасности:</strong> Компонент ОС, контролирующий доступ субъектов к объектам, руководствуясь политикой безопасности.",
              "<strong>Модель безопасности:</strong> Система, включающая объекты, наборы операций над объектами, субъекты и атрибуты защиты объектов.",
              "<strong>Право:</strong> Возможность выполнять некоторые операции над объектами системы.",
              "<strong>Привилегия:</strong> Более общее понятие, означающее возможность выполнять действия в отношении других объектов и субъектов системы безопасности.",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Аутентификация (Authentication - AuthN):",
          }),
          createContentItem("list", {
            items: [
              'Установление подлинности пользователя или процесса ("Кто ты?"). Определение, не выдает ли субъект себя за кого-то другого.',
              '<strong>Методы аутентификации:</strong><ul><li><strong>Что-то, что вы знаете:</strong> Пароль, PIN-код, ответы на секретные вопросы.<br/>- <em>Пароли:</em> Наиболее распространенный. Для защиты хранятся в захешированном виде с добавлением "соли" (salt value). Требования к паролям: длина (≥8 символов), сложность (строчные/прописные, цифры, спецсимволы), не словарные слова. Уязвимы к подбору ("грубая сила"), атакам по словарю.<br/>- <em>Улучшенные варианты:</em> Одноразовые пароли (OTP), система "пароль-отзыв".</li><li><strong>Что-то, что у вас есть:</strong> Физический объект. Электронные карты, USB-токены, смарт-карты (содержат микропроцессор для обработки информации).</li><li><strong>Что-то, что вы есть (Биометрия):</strong> Измерение уникальных физических или поведенческих характеристик.<br/>- <em>Статическая:</em> Отпечатки пальцев, сканирование сетчатки/радужки глаза, распознавание геометрии лица.<br/>- <em>Динамическая:</em> Распознавание голоса, анализ подписи, ритм набора на клавиатуре.</li><li><strong>Многофакторная аутентификация (MFA/2FA):</strong> Использование двух или более различных факторов.</li></ul>',
              "<strong>Контрмеры против атак на аутентификацию:</strong> Ограничение времени/числа попыток регистрации, задержка после неудачных попыток, блокировка учетной записи, ловушки для взломщика (honeypots).",
            ],
          }),
          createContentItem("heading", {
            level: 3,
            text: "Авторизация (Authorization - AuthZ):",
          }),
          createContentItem("list", {
            items: [
              'Назначение прав и привилегий в системе аутентифицированному пользователю/процессу. Определение того, какие действия субъект может выполнять с объектами системы ("Что тебе разрешено делать?").',
              "Происходит <em>после</em> успешной аутентификации.",
            ],
          }),
        ],
      },
      {
        id: "security-access-control",
        title: "8.2. Модели и Механизмы Контроля Доступа",
        path: "/security/access-control",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №11 и вопросе к экзамену 41.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Политики безопасности и модели контроля доступа:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Дискреционная (избирательная) политика безопасности (Discretionary Access Control - DAC):</strong><ul><li>Для каждого объекта определяется набор операций, которые можно над ним выполнять.</li><li>Субъект может выполнить операцию, если он имеет право на ее выполнение.</li><li>Субъект, имеющий права на выполнение операций над объектом, может передать эти права другому субъекту (владелец объекта контролирует доступ).</li><li><em>Либеральная DAC:</em> Передача прав без контроля менеджера безопасности.</li><li><em>Строгая DAC:</em> Передача прав только при наличии специальных полномочий.</li><li>Примеры: стандартные права доступа к файлам в Windows и Linux.</li></ul>",
              "<strong>Мандатная (полномочная) модель управления доступом (Mandatory Access Control - MAC):</strong><ul><li>Права доступа определяются системой на основе меток безопасности (конфиденциальности/целостности), присвоенных субъектам и объектам.</li><li>Пользователь (даже владелец) не может изменять права доступа, установленные системой.</li><li>Примеры: SELinux, AppArmor, модели Белла-ЛаПадулы (конфиденциальность), Биба (целостность).</li></ul>",
              "<strong>Управление доступом на основе ролей (Role-Based Access Control - RBAC):</strong><ul><li>Права доступа назначаются ролям, а пользователям назначаются роли. Упрощает управление правами в больших системах.</li></ul>",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Механизмы реализации контроля доступа:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Матрица управления доступом (Access Matrix):</strong> Теоретическая модель. Строки – субъекты, столбцы – объекты. Ячейка (Субъект, Объект) содержит список разрешенных операций. Разреженная, обычно не реализуется напрямую.",
              '<strong>Списки контроля доступа (Access Control Lists - ACLs):</strong> Представление матрицы доступа "по столбцам".<br/>- С каждым объектом связан список (ACL), содержащий записи контроля доступа (Access Control Entries - ACE).<br/>- Каждая ACE указывает субъекта (пользователя или группу, обычно через SID в Windows) и набор разрешений (или запретов) для этого субъекта по отношению к объекту.<br/>- Когда субъект пытается выполнить операцию над объектом, ОС проверяет ACL объекта.',
              '<strong>Перечни возможностей (Capability Lists / Capability Tickets):</strong> Представление матрицы доступа "по строкам".<br/>- У каждого субъекта есть список объектов и разрешенных операций над ними ("билеты" или "мандаты" на доступ). Менее распространены в ОС общего назначения.',
              "<strong>Домены защиты (Protection Domains):</strong> Набор пар (объект, права). Процесс выполняется в некотором домене защиты.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Реализация в Windows (из Лекции №11 и Лаб. №9):",
          }),
          createContentItem("list", {
            items: [
              "Используется дискреционная модель.",
              "<strong>Маркер доступа (Access Token):</strong> Создается для пользователя при входе. Содержит SID пользователя, SIDs групп, привилегии. Используется для контроля доступа к охраняемым объектам.",
              "<strong>Охраняемые объекты (Securable Objects):</strong> Объекты Windows, которые могут иметь имя, а также потоки и процессы.",
              "<strong>Дескриптор безопасности (Security Descriptor - SD):</strong> Связан с каждым охраняемым объектом. Содержит:<br/>- SID владельца объекта.<br/>- SID первичной группы владельца.<br/>- Указатель на <strong>DACL (Discretionary Access Control List)</strong> - список разрешающих/запрещающих ACE.<br/>- Указатель на <strong>SACL (System Access Control List)</strong> - список ACE для аудита доступа.",
              "<strong>Идентификатор безопасности (Security Identifier - SID):</strong> Уникальный идентификатор для каждой учетной записи (пользователя, группы, компьютера). Хранится в базе SAM (Security Account Manager). Формат: <code>S-R-I-SA0-SA1-...-RID</code>.",
              "<strong>Элемент управления доступом (Access Control Entry - ACE):</strong> Запись в ACL. Содержит:<br/>- SID субъекта.<br/>- Маску доступа (права: специфические, стандартные, родовые - <code>GENERIC_READ</code> и т.д., права для SACL).<br/>- Флаг типа ACE (<code>ACCESS_ALLOWED_ACE</code>, <code>ACCESS_DENIED_ACE</code>).<br/>- Флаги наследования ACE.<br/>- Флаги управления аудитом.",
              "При определении доступа: отсутствие DACL = доступ разрешен для всех; пустой DACL = доступ запрещён для всех.",
              "WinAPI для безопасности: Управление пользователями/группами (<code>net user</code>), работа с ACL (<code>cacls</code>, <code>icacls</code>, <code>SetNamedSecurityInfo</code>), работа с SID (<code>LookupAccountSid</code>), работа с SD (<code>GetNamedSecurityInfo</code>), работа с маркерами доступа (<code>OpenProcessToken</code>), привилегиями.",
            ],
          }),
        ],
      },
      {
        id: "security-threats",
        title: "8.3. Угрозы Безопасности и Уязвимости",
        path: "/security/threats",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №11 и вопросе к экзамену 40.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Основные требования к безопасности (Триада CIA):",
          }),
          createContentItem("list", {
            items: [
              "<strong>Конфиденциальность (Confidentiality):</strong> Информацию от компьютерных систем могут получать только авторизованные лица. Угрозы: несанкционированная демонстрация данных (разглашение, перехват, извлечение содержимого).",
              "<strong>Целостность (Integrity):</strong> Неавторизованные пользователи не должны иметь возможность модифицировать данные без разрешения владельца (изменение, удаление, добавление фальшивых данных). Угрозы: подделка данных, препятствование передаче/хранению валидных данных, модификация функций и данных системы.",
              "<strong>Доступность (Availability):</strong> Никто не должен иметь возможности вывести систему из строя. Авторизованные пользователи должны иметь доступ к системе и ресурсам. Угрозы: отказ в обслуживании (DoS/DDoS), разрушение системы, незаконное присвоение ресурсов.",
            ],
          }),
          createContentItem("heading", { level: 4, text: "Терминология:" }),
          createContentItem("list", {
            items: [
              "<strong>Угроза (Threat):</strong> Любое действие, которое может быть направлено на нарушение информационной безопасности системы.",
              "<strong>Атака (Attack):</strong> Реализованная угроза.",
              "<strong>Уязвимость (Vulnerability):</strong> Слабость в системе безопасности, которую может использовать злоумышленник.",
              "<strong>Риск (Risk):</strong> Вероятностная оценка величины возможного ущерба от успешной атаки.",
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Типы атак и злоумышленники:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Пассивные атаки:</strong> Направлены на перехват информации без её модификации (прослушивание, анализ трафика).",
              "<strong>Активные атаки:</strong> Направлены на модификацию данных или вывод системы из строя (фальсификация, DoS, изменение данных).",
              '<strong>Категории злоумышленников:</strong> Случайные любопытные, "спортсмены", лица с целью обогащения, коммерческий/военный шпионаж.',
            ],
          }),
          createContentItem("heading", {
            level: 4,
            text: "Распространенные угрозы:",
          }),
          createContentItem("list", {
            items: [
              "<strong>Вредоносное ПО (Malware):</strong><ul><li>Вирусы (самокопирующийся код, внедряющийся в другие программы).</li><li>Черви (Worms) (самокопирующиеся программы, распространяющиеся по сетям).</li><li>Троянские кони (Trojans) (вредоносная программа, маскирующаяся под полезную).</li><li>Шпионское ПО (Spyware) (собирает информацию о пользователе).</li><li>Рекламное ПО (Adware) (показывает нежелательную рекламу).</li><li>Вымогательское ПО (Ransomware) (шифрует данные и требует выкуп).</li><li>Руткиты (Rootkits) (скрывают присутствие вредоносного ПО).</li><li>Ботнеты (Botnets) (сеть зараженных компьютеров).</li></ul>",
              "<strong>Несанкционированный доступ (Unauthorized Access).</strong>",
              "<strong>Отказ в обслуживании (Denial of Service - DoS, Distributed DoS - DDoS).</strong>",
              "<strong>Повышение привилегий (Privilege Escalation).</strong>",
              "<strong>Социальная инженерия</strong> (манипулирование людьми).",
              "<strong>Фишинг</strong> (мошенничество с целью получения конфиденциальных данных).",
              "<strong>Атаки на пароли:</strong> Подбор (brute-force), по словарю, использование украденных учетных данных.",
              "<strong>Атаки на веб-приложения:</strong> SQL-инъекции, XSS (Cross-Site Scripting).",
              "<strong>Физические угрозы:</strong> Кража оборудования, повреждение.",
            ],
          }),
          createContentItem("paragraph", {
            text: "<strong>Случайная потеря данных:</strong> Форс-мажор (пожары, наводнения), аппаратные/программные ошибки (сбои CPU, нечитаемые диски, ошибки в программах), человеческий фактор (неправильный ввод, потерянный диск).",
          }),
        ],
      },
      {
        id: "security-protection-mechanisms",
        title: "8.4. Механизмы Защиты. Криптография. Аудит.",
        path: "/security/protection-mechanisms",
        content: [
          createContentItem("paragraph", {
            text: "Основано на Лекции №11 и вопросе к экзамену 41.",
          }),
          createContentItem("heading", {
            level: 4,
            text: "Принципы проектирования систем безопасности:",
          }),
          createContentItem("list", {
            ordered: true,
            items: [
              "Устройство системы не должно быть секретом (безопасность через неясность - плохая практика).",
              "По умолчанию доступ не должен предоставляться (принцип наименьших привилегий).",
              "Необходимо проверять текущее состояние прав доступа при каждой операции.",
              "Предоставляйте каждому процессу как можно меньше привилегий, необходимых для выполнения его задачи.",
              "Механизм защиты должен быть простым, одинаковым для всех и встроенным в самые нижние уровни системы.",
              "Выбранная схема должна быть психологически приемлемой для пользователей.",
            ],
          }),
          createContentItem("heading", { level: 3, text: "Механизмы защиты:" }),
          createContentItem("list", {
            items: [
              "<strong>Контроль доступа:</strong> DAC, MAC, RBAC, ACLs, Capability Lists (см. подраздел 8.2).",
              "<strong>Защита памяти:</strong> Сегментация, страничная организация с битами защиты, режимы ядра/пользователя (см. раздел Управление Памятью).",
              "<strong>Криптографическая защита данных:</strong><br/>- <em>Криптология</em> = Криптография (методы преобразования) + Криптоанализ (расшифровка без ключа).<br/>- <em>Задача криптографии:</em> Открытый текст (P) --- (Ключ K<sub>E</sub>, Алгоритм E) ---> Зашифрованный текст (C) --- (Ключ K<sub>D</sub>, Алгоритм D) ---> Открытый текст (P).<br/>- <em>Разделы:</em> Симметричные криптосистемы, криптосистемы с открытым ключом, системы электронной подписи, управление ключами.<br/>- <em>Направления использования:</em> Передача конфиденциальной информации, установление подлинности сообщений, хранение информации в зашифрованном виде.<br/>- <em>Типы криптосистем:</em><ul><li>Бесключевые.</li><li><strong>Симметричные (с секретным/закрытым ключом):</strong> K<sub>E</sub> = K<sub>D</sub> (или легко вычисляется). Примеры: DES, AES, ГОСТ 28147-89. Виды: блочное, потоковое. Методы: подстановки, перестановки, гаммирование. Слабое место: распределение ключей.</li><li><strong>С открытым ключом (асимметричные):</strong> Два ключа – открытый (публичный, для шифрования/проверки подписи) и закрытый (приватный, для дешифрования/создания подписи). Математически связаны, но закрытый нельзя получить из открытого. Основаны на односторонних функциях (разложение больших чисел на простые множители - RSA; вычисление логарифма в конечном поле - Elgamal, DSA). Примеры: RSA, Elgamal, ГОСТ P 34.10-2001.</li></ul>",
              "<strong>Электронная (цифровая) подпись:</strong> Присоединяемое к тексту его криптографическое преобразование (с использованием закрытого ключа отправителя), позволяющее проверить авторство и подлинность сообщения (с использованием открытого ключа отправителя).",
              '<strong>Хеширование:</strong> Создание "отпечатка" данных фиксированной длины (хеш-функции: MD5, SHA-1, SHA-256). Используется для проверки целостности, хранения паролей (с "солью").',
              "<strong>Шифрование файловых систем и дисков:</strong><ul><li><strong>EFS (Encrypting File System) в Windows:</strong> Шифрование файлов и папок на уровне ФС NTFS. Ключ шифрования файла (FEK) шифруется открытым ключом пользователя. (Лаб. №9, утилита <code>cipher</code>).</li><li><strong>BitLocker в Windows:</strong> Полнодисковое шифрование.</li></ul>",
              "<strong>Брандмауэры (Firewalls):</strong> Фильтрация сетевого трафика.",
              "<strong>Антивирусное ПО.</strong>",
              "<strong>Системы обнаружения/предотвращения вторжений (IDS/IPS).</strong>",
            ],
          }),
          createContentItem("heading", { level: 3, text: "Аудит (Auditing):" }),
          createContentItem("list", {
            items: [
              "Процесс сбора, анализа и хранения информации о событиях безопасности в системе.",
              "<strong>Журналы аудита (Audit Logs / Security Logs):</strong> Записи о событиях (входы/выходы из системы, попытки доступа к файлам (успешные/неуспешные), изменение прав, запуск процессов и т.д.).",
              "<strong>Цели аудита:</strong> Обнаружение нарушений безопасности, расследование инцидентов, сбор доказательств, мониторинг соответствия политикам безопасности.",
              '<strong>В Windows:</strong> Настраивается через групповые политики или локальные политики безопасности. Просмотр – в "Просмотре событий". (Лаб. №9 - аудит доступа к файлу).',
              "<strong>В Linux:</strong> Демон <code>auditd</code>, утилиты <code>ausearch</code>, <code>aureport</code>.",
            ],
          }),
        ],
      },
    ],
  },
];
