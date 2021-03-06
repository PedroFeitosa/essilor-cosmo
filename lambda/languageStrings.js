/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Essilor Cosmo',
            GET_FACT_MESSAGE: 'Here\'s your fact: ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Essilor Cosmo skill can\'t help you with that.  It can help you discover facts about eye health if you say tell me something I don\'t know. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
            FACTS:
            [
            'World Health Organization recommends no screen time for children under 3 and screen time of no more than 1 hour for children ages 3 and 4.',

            'Presbyopia is the normal loss of near focusing ability. Most people begin to notice the effects of presbyopia sometime after age 40',

            'A number of recent studies have found that spending more time outdoors may help prevent or reduce the progression of myopia in children.',

            'Children should have their first comprehensive eye exam at 6 months of age.',

            'Most eye care professionals recommend that you have a comprehensive eye exam every one to two years, depending on your age and risk factors.',

            'Routine eye exams are essential for children to be ready to learn in school, and experts say more than 80 percent of information children receive in classrooms is presented visually.',

            'To maintain a lifetime of healthy vision, adults ages 18 to 60 should have a comprehensive eye exam at least every two years. Older adults, age 61 and older, should have annual exams.',

            '1.1 billion people live with vision loss. 90% of people with vision loss are in low- and middle-income countries.',

            '100 million people have vision loss from cataract. Of these:17 million people are blind and 83 million people experience vision impairment. For these people, sight can be restored with cataract surgery.',

            'Giving a child a pair of properly prescribed glasses can provide academic gains equivalent to half a semester of additional learning',

            'The global population is predicted to grow by 25% by 2050, reaching 9.7 billion. Projections show that vision loss will increase by 55%, or 600 million people over the next 30 years.',

            'In 2015, it was estimated that 23% of the world’s population had myopia. By 2050, this is projected to rise to 50%.',

            'Practice the 20-20-20 Rule: every 20 minutes, look away from your monitor and focus on something at least 20 feet away, for 20 seconds. Your eyes will thank you for it.',

            'The Vision Council reports that 1 in 4 kids spend more than three hours a day using digital devices',

            'You got the fun fact. The average person blinks 12 times a minute. I bet you just blinked!.',
            ],
        }
    },
    fr: {
        translation: {
            SKILL_NAME: 'Essilor Cosmo',
            GET_FACT_MESSAGE: 'Voici votre anecdote : ',
            HELP_MESSAGE: 'Vous pouvez dire donne-moi une anecdote, ou, vous pouvez dire stop... Comment puis-je vous aider?',
            HELP_REPROMPT: 'Comment puis-je vous aider?',
            FALLBACK_MESSAGE: 'La skill des Essilor Cosmo ne peux vous aider avec cela. Je peux vous aider à découvrir des anecdotes sur la santé oculaire si vous dites par exemple, donnez-moi une anecdote. Comment puis-je vous aider?',
            FALLBACK_REPROMPT: 'Comment puis-je vous aider?',
            ERROR_MESSAGE: 'Désolé, une erreur est survenue.',
            STOP_MESSAGE: 'Au revoir!',
            FACTS:
                [
                'Organisation mondiale de la Santé recommande pas le temps d\'écran pour les enfants de moins de 3 et de temps d\'écran de plus de 1 heure pour les enfants âgés de 3 et 4.',

                'La presbytie est la perte normale de près la capacité de mise au point. La plupart des gens commencent à remarquer les effets de quelque temps presbytie après 40 ans',

                'Un certain nombre d\'études récentes ont montré que les dépenses plus de temps à l\'extérieur peut aider à prévenir ou réduire la progression de la myopie chez les enfants.',

                'Les enfants devraient avoir leur premier examen ophtalmologique complet à 6 mois.',

                'La plupart des professionnels des soins oculaires vous recommandons de faire un examen complet de la vue tous les un à deux ans, en fonction de vos facteurs d\'âge et de risque.',

                'examens oculaires de routine sont essentiels pour les enfants soient prêts à apprendre à l\'école, et les experts disent que plus de 80 pour cent des enfants reçoivent de l\'information dans les salles de classe est présentée visuellement.',

                'Pour maintenir une vie de vision saine, les adultes âgés de 18 à 60 devraient avoir un examen complet de la vue au moins tous les deux ans. Les personnes âgées, 61 ans et plus, devraient avoir des examens annuels.',

                '1,1 milliard de personnes vivent avec une perte de vision. 90% des personnes ayant une déficience visuelle sont dans les pays à revenu faible ou intermédiaire.',

                '100 millions de personnes ont une perte de vision de la cataracte. Parmi ceux-ci: 17 millions de personnes sont aveugles et déficience vision 83 millions de personnes d\'expérience. Pour ces personnes, la vue peut être restauré avec la chirurgie de la cataracte.',

                'Donner à un enfant une paire de lunettes correctement prescrits peut fournir des gains universitaires équivalant à un demi-semestre d\'apprentissage supplémentaire',

                'La population mondiale devrait croître de 25% d\'ici 2050, pour atteindre 9,7 milliards. Les projections montrent que la perte de vision augmentera de 55%, soit 600 millions de personnes au cours des 30 prochaines années.',

                'En 2015, on estimait que 23% de la population mondiale avait la myopie. D\'ici 2050, cela devrait passer à 50%.',

                'Pratique de la Règle 20-20-20: toutes les 20 minutes, regardez loin de votre écran et de se concentrer sur quelque chose d\'au moins 20 pieds de distance, pendant 20 secondes. Vos yeux vous remercieront.',

                'Le Conseil Vision rapporte que 1 à 4 enfants passent plus de trois heures par jour à l\'aide des appareils numériques',

                'Vous avez le fait amusant. La personne moyenne clignote 12 fois par minute pari que vous venez cligné des yeux!.',
                ],
        }
    },
    it: {
        translation: {
            SKILL_NAME: 'Essilor Cosmo',
            GET_FACT_MESSAGE: 'Ecco il tuo fatto: ',
            HELP_MESSAGE: 'Puoi chiedermi un fatto o puoi chiudermi dicendo "esci"... Come posso aiutarti?',
            HELP_REPROMPT: 'Come posso aiutarti?',
            FALLBACK_MESSAGE: 'Non posso aiutarti con questo. Posso aiutarti a scoprire fatti e aneddoti sulla salute degli occhi, basta che mi chiedi di dirti un fatto. Come posso aiutarti?',
            FALLBACK_REPROMPT: 'Come posso aiutarti?',
            ERROR_MESSAGE: 'Spiacenti, si è verificato un errore.',
            STOP_MESSAGE: 'A presto!',
            FACTS:
            [
            'Organizzazione Mondiale della Sanità raccomanda nessun tempo sullo schermo per i bambini fino a 3 anni e il tempo dello schermo di non più di 1 ora per i bambini dai 3 e 4.',

            'La presbiopia è la normale perdita di quasi capacità di messa a fuoco. La maggior parte delle persone iniziano a notare gli effetti della presbiopia qualche tempo dopo i 40 anni',

            'Una serie di recenti studi hanno trovato che la spesa più tempo all\'aria aperta può aiutare a prevenire o ridurre la progressione della miopia nei bambini.',

            'I bambini dovrebbero avere il loro primo esame completo degli occhi a 6 mesi di età.',

            'La maggior parte dei professionisti dell\'ottica consiglia di avere un esame completo degli occhi ogni uno o due anni, a seconda delle età e fattori di rischio.',

            'esami oculistici di routine sono essenziali per i bambini di essere pronti ad imparare a scuola, e gli esperti dicono che oltre l\'80 per cento dei bambini di informazione ricevono nelle aule è presentato visivamente.',

            'Per mantenere una vita di visione sana, adulti età da 18 a 60 dovrebbero avere un esame completo dell\'occhio almeno ogni due anni. Gli anziani, età 61 e più anziani, dovrebbero avere esami annuali.',

            '1,1 miliardi di persone vivono con la perdita della vista. 90% delle persone con perdita della vista sono in paesi a basso e medio reddito.',

            '100 milioni di persone hanno la perdita della vista da cataratta. Di questi: 17 milioni di persone sono di valore non vedenti e 83 milioni di persone l\'esperienza di visione. Per queste persone, la vista può essere ripristinato con la chirurgia della cataratta.',

            'Dare un bambino un paio di occhiali prescritti correttamente può fornire i guadagni accademici pari alla metà un semestre di apprendimento supplementari',

            'La popolazione globale dovrebbe crescere del 25% entro il 2050, raggiungendo 9,7 miliardi. Le proiezioni mostrano che la perdita della vista aumenterà del 55%, o 600 milioni di persone nei prossimi 30 anni.',

            'Nel 2015, è stato stimato che il 23% della popolazione mondiale ha avuto la miopia. Nel 2050, questo dovrebbe aumentare al 50%.',

            'Pratica il 20-20-20 regola: ogni 20 minuti, a distogliere lo sguardo dal monitor econcentrarsi su qualcosa di almeno 20 piedi di distanza, per 20 secondi. I vostri occhi vi ringrazieranno per questo.',

            'Il Vision Council riferisce che 1 in 4 bambini trascorrono più di tre ore al giorno utilizzando dispositivi digitali',

            'Hai il fatto divertente. La persona media lampeggia 12 volte al minuto. scommetto che appena le palpebre!.',
            ],
        }
    },
}
