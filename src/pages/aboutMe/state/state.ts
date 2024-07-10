import { SelectLang } from "../../../App"


type GeneralInformationType = Record<SelectLang, string[] >

export const generalInformation: GeneralInformationType = {
    'russian': [
        "Я сочитаю в себе безусловную любовь к истории искусства и классического портрета, дополняя это художнственным чутьём и бескомпромисным вниманием к деталям, проявляя лучшие черты портретируемого.",
        "На протяжении уже многих лет я работаю в области искусства, благодаря чему, обладаю возможность творческого взаимодействовать с многими людьми этой сферы",
        "Выполнял работы для международной ювелирной компаний, Государственного театра балета, Агентства недвижимости, брендов одежды."
    ],
    'england': [
        "I combine in myself an unconditional love for art history and classical portraiture, complementing this with artistic flair and uncompromising attention to detail, showing the best features of the person being portrayed.",
        "For many years now I have been working in the field of art, thanks to which I have the opportunity to creatively interact with many people in this field.",
        "Performed work for international jewelry companies, the State Ballet Theater, a real estate agency, and clothing brands."
    ]
}