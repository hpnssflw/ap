import Link from "next/link";

export default function VoiceKeeperPage() {
  return (
    <div className="min-h-screen max-w-[800px] mx-auto relative py-5 px-5 md:px-0">
      <div className="fiber-dots">
        <div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            boxShadow: "inset 0 0 20px 20px rgba(0, 0, 0, 0.8)",
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-white transition-colors mb-6 inline-block"
        >
          ← Back
        </Link>

        <main className="flex flex-col gap-8 mt-4">
          <section className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium text-white">
              VoiceKeeper: Персональный AI-стратег для контента в Telegram
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              AI-агент для авторов Telegram-каналов, который анализирует уникальный стиль автора и генерирует посты на стыке тренда и авторского стиля.
            </p>
          </section>

          {/* Архитектура */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-white">Архитектура решения</h2>
            
            <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
              <h3 className="text-sm font-medium text-white mb-3">Стек технологий</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-zinc-400 mb-2">Backend:</p>
                  <ul className="text-zinc-300 space-y-1 ml-4">
                    <li>• Express + Telegraf</li>
                    <li>• BullMQ (очереди и воркеры)</li>
                    <li>• MongoDB (база данных)</li>
                    <li>• Redis (кэширование)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 mb-2">Frontend:</p>
                  <ul className="text-zinc-300 space-y-1 ml-4">
                    <li>• Next.js 16 (Telegram Mini App)</li>
                    <li>• Next.js 16 (Admin Panel)</li>
                    <li>• TypeScript</li>
                    <li>• TailwindCSS</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 mb-2">AI & Инфраструктура:</p>
                  <ul className="text-zinc-300 space-y-1 ml-4">
                    <li>• Gemini 1.5 Flash (MVP)</li>
                    <li>• OpenAI GPT-4o (продакшен)</li>
                    <li>• Browserless (парсинг каналов)</li>
                    <li>• Docker Compose</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 mb-2">Платежи:</p>
                  <ul className="text-zinc-300 space-y-1 ml-4">
                    <li>• Stripe / ЮKassa</li>
                    <li>• Webhook обработка</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Компоненты системы */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-white">Компоненты системы</h2>
            
            <div className="space-y-4">
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">packages/bot</h3>
                <p className="text-zinc-400 text-sm mb-3">
                  Express сервер с REST API, Telegram webhook, BullMQ workers
                </p>
                <div className="text-xs text-zinc-500 space-y-1">
                  <p>• AI провайдеры (Gemini, OpenAI)</p>
                  <p>• Сервисы: Voice Fingerprint, Trend Radar, Content Generator</p>
                  <p>• Воркеры: fingerprint, trend-scan, generation</p>
                  <p>• Модели: VoiceFingerprint, Competitor, TrendSnapshot, Generation, Subscription</p>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">packages/webapp</h3>
                <p className="text-zinc-400 text-sm mb-3">
                  Telegram Mini App для авторов контента
                </p>
                <div className="text-xs text-zinc-500 space-y-1">
                  <p>• Dashboard VoiceKeeper</p>
                  <p>• Настройка Voice Fingerprint</p>
                  <p>• Генерация постов</p>
                  <p>• Просмотр истории генераций</p>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">packages/admin</h3>
                <p className="text-zinc-400 text-sm mb-3">
                  Админ-панель для управления инфраструктурой
                </p>
                <div className="text-xs text-zinc-500 space-y-1">
                  <p>• Управление ботами и каналами</p>
                  <p>• API ключи (Gemini, OpenAI)</p>
                  <p>• Trend Radar (premium)</p>
                  <p>• Подписчики и рассылки</p>
                </div>
              </div>
            </div>
          </section>

          {/* Flow реализации */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-white">Flow реализации</h2>
            
            <div className="space-y-4">
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-3">1. Voice Fingerprint (Анализ стиля)</h3>
                <div className="text-xs text-zinc-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Пользователь загружает посты из канала или вручную</p>
                      <p className="text-zinc-500 mt-1">POST /api/fingerprint/analyze</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Задача добавляется в очередь fingerprint</p>
                      <p className="text-zinc-500 mt-1">fingerprintQueue.add()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Fingerprint Worker парсит канал через Browserless</p>
                      <p className="text-zinc-500 mt-1">ChannelParser.parseChannel()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">AI анализирует стиль через Gemini/OpenAI</p>
                      <p className="text-zinc-500 mt-1">VoiceFingerprintService.analyzeFromPosts()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Результат сохраняется в MongoDB</p>
                      <p className="text-zinc-500 mt-1">VoiceFingerprintModel.update()</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-3">2. Trend Radar (Мониторинг конкурентов)</h3>
                <div className="text-xs text-zinc-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Пользователь добавляет конкурентов для отслеживания</p>
                      <p className="text-zinc-500 mt-1">POST /api/competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Cron job запускает сканирование каждые 6 часов</p>
                      <p className="text-zinc-500 mt-1">trendQueue.add() (scheduled)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Trend Scan Worker парсит посты конкурентов</p>
                      <p className="text-zinc-500 mt-1">ChannelParser для каждого конкурента</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">AI определяет горячие темы и тренды</p>
                      <p className="text-zinc-500 mt-1">GeminiProvider.generate(trendPrompt)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Снимок трендов сохраняется</p>
                      <p className="text-zinc-500 mt-1">TrendSnapshotModel.create()</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-3">3. Генерация контента</h3>
                <div className="text-xs text-zinc-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Пользователь вводит тему и параметры</p>
                      <p className="text-zinc-500 mt-1">POST /api/generate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Проверка лимитов подписки</p>
                      <p className="text-zinc-500 mt-1">SubscriptionModel.checkLimits()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Задача добавляется в очередь generation</p>
                      <p className="text-zinc-500 mt-1">generationQueue.add()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Generation Worker загружает Voice Fingerprint</p>
                      <p className="text-zinc-500 mt-1">VoiceFingerprintModel.findById()</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">AI генерирует пост в стиле автора</p>
                      <p className="text-zinc-500 mt-1">ContentGenerator.generate() с промптом</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Frontend поллит статус через WebSocket/SSE</p>
                      <p className="text-zinc-500 mt-1">GET /api/generations/:id (polling)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div>
                      <p className="text-zinc-300">Результат отображается пользователю</p>
                      <p className="text-zinc-500 mt-1">Можно редактировать и опубликовать</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Модели данных */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-white">Ключевые модели данных</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">VoiceFingerprint</h3>
                <p className="text-xs text-zinc-400">
                  Профиль стиля автора: метрики (длина абзацев, формальность), паттерны (начало/конец постов), характерные фразы
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">Competitor</h3>
                <p className="text-xs text-zinc-400">
                  Конкуренты для мониторинга: username канала, частота сканирования, последний пост
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">TrendSnapshot</h3>
                <p className="text-xs text-zinc-400">
                  Снимок трендов: горячие темы, упущенные темы, примеры постов конкурентов
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">Generation</h3>
                <p className="text-xs text-zinc-400">
                  История генераций: входные параметры, результат, статус, обратная связь пользователя
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">Subscription</h3>
                <p className="text-xs text-zinc-400">
                  Подписки: план (free/pro/business), лимиты, использование, история платежей
                </p>
              </div>
            </div>
          </section>

          {/* API Endpoints */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-white">Основные API Endpoints</h2>
            
            <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-4">
              <div className="space-y-3 text-xs">
                <div>
                  <code className="text-violet-400">POST</code>
                  <span className="text-zinc-300 ml-2">/api/fingerprint/analyze</span>
                  <span className="text-zinc-500 ml-2">— запуск анализа стиля</span>
                </div>
                <div>
                  <code className="text-violet-400">GET</code>
                  <span className="text-zinc-300 ml-2">/api/fingerprint</span>
                  <span className="text-zinc-500 ml-2">— получить профиль стиля</span>
                </div>
                <div>
                  <code className="text-violet-400">POST</code>
                  <span className="text-zinc-300 ml-2">/api/generate</span>
                  <span className="text-zinc-500 ml-2">— создать пост</span>
                </div>
                <div>
                  <code className="text-violet-400">GET</code>
                  <span className="text-zinc-300 ml-2">/api/generations/:id</span>
                  <span className="text-zinc-500 ml-2">— статус генерации</span>
                </div>
                <div>
                  <code className="text-violet-400">GET</code>
                  <span className="text-zinc-300 ml-2">/api/trends/latest</span>
                  <span className="text-zinc-500 ml-2">— последний снимок трендов</span>
                </div>
                <div>
                  <code className="text-violet-400">POST</code>
                  <span className="text-zinc-300 ml-2">/api/competitors</span>
                  <span className="text-zinc-500 ml-2">— добавить конкурента</span>
                </div>
                <div>
                  <code className="text-violet-400">GET</code>
                  <span className="text-zinc-300 ml-2">/api/subscription</span>
                  <span className="text-zinc-500 ml-2">— информация о подписке</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

