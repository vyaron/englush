const originalData = {
    sections: [
        {
            id: 'section1',
            title: 'מתחילים',
            units: [
                {
                    id: 'unit1_1',
                    title: 'אותיות באנגלית',
                    levels: [
                        {
                            id: 'level1_1_1',
                            title: 'איך זה נשמע',
                            lessons: [
                                {
                                    id: 'lesson1_1_1_1',
                                    title: 'א-ד',
                                    quests: [
                                        {
                                            id: 'quest1_1_1_1_3',
                                            title: 'בחר את הצליל המתאים לאות ג',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'j' },
                                                { word: 'k' },
                                                { word: 'g' },
                                                { word: 'h' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_1_1',
                                            title: 'בחר את הצליל המתאים לאות א',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'a' },
                                                { word: 'b' },
                                                { word: 'd' },
                                                { word: 'f' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_1_4',
                                            title: 'בחר את הצליל המתאים לאות ד',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 't' },
                                                { word: 'b' },
                                                { word: 'd' },
                                                { word: 'f' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_1_2',
                                    title: 'ה-ז, י',
                                    quests: [
                                        {
                                            id: 'quest1_1_1_2_1',
                                            title: 'בחר את הצליל המתאים לאות ה',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'a' },
                                                { word: 'k' },
                                                { word: 'g' },
                                                { word: 'h' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_2_2',
                                            title: 'בחר את הצליל המתאים לאות ו',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'u' },
                                                { word: 'w' },
                                                { word: 'v' },
                                                { word: 'f' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_2_3',
                                            title: 'בחר את הצליל המתאים לאות ז',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 's' },
                                                { word: 'j' },
                                                { word: 'g' },
                                                { word: 'z' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_2_4',
                                            title: 'בחר את הצליל המתאים לאות י',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'j' },
                                                { word: 'y' },
                                                { word: 'a' },
                                                { word: 'l' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_1_3',
                                    title: 'ל, מ, נ, ס, פ',
                                    quests: [
                                        {
                                            id: 'quest1_1_1_3_1',
                                            title: 'בחר את הצליל המתאים לאות ל',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'j' },
                                                { word: 'k' },
                                                { word: 'l' },
                                                { word: 'm' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_3_2',
                                            title: 'בחר את הצליל המתאים לאות מ',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'n' },
                                                { word: 'l' },
                                                { word: 'k' },
                                                { word: 'm' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_3_3',
                                            title: 'בחר את הצליל המתאים לאות נ',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'n' },
                                                { word: 'm' },
                                                { word: 'l' },
                                                { word: 'k' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_3_4',
                                            title: 'בחר את הצליל המתאים לאות ס',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'z' },
                                                { word: 's' },
                                                { word: 't' },
                                                { word: 'f' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_1_4',
                                    title: 'פ, ק, ר, ש, ת',
                                    quests: [
                                        {
                                            id: 'quest1_1_1_4_1',
                                            title: 'בחר את הצליל המתאים לאות פ',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'j' },
                                                { word: 'p' },
                                                { word: 'b' },
                                                { word: 'v' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_4_2',
                                            title: 'בחר את הצליל המתאים לאות ק',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'k' },
                                                { word: 'g' },
                                                { word: 'r' },
                                                { word: 'x' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_4_3',
                                            title: 'בחר את הצליל המתאים לאות ר',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'l' },
                                                { word: 'w' },
                                                { word: 'r' },
                                                { word: 'v' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_1_4_4',
                                            title: 'בחר את הצליל המתאים לאות ש',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'v' },
                                                { word: 'sh' },
                                                { word: 'z' },
                                                { word: 'ch' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_1_2',
                            title: 'באיזה אות מתחיל',
                            lessons: [
                                {
                                    id: 'lesson1_1_2_1',
                                    title: 'מילים פשוטות',
                                    quests: [
                                        {
                                            id: 'quest1_1_2_1_4',
                                            title: 'באיזה אות מתחילה המילה "Dog"?',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_1_1',
                                            title: 'באיזה אות מתחילה המילה "Apple"?',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_1_3',
                                            title: 'באיזה אות מתחילה המילה "Cat"?',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_1_2',
                                            title: 'באיזה אות מתחילה המילה "Book"?',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_2_2',
                                    title: 'מילים מורכבות יותר',
                                    quests: [
                                        {
                                            id: 'quest1_1_2_2_3',
                                            title: 'באיזה אות מתחילה המילה "Kitchen"?',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'K' },
                                                { word: 'L' },
                                                { word: 'M' },
                                                { word: 'N' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_2_1',
                                            title: 'באיזה אות מתחילה המילה "House"?',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_2_4',
                                            title: 'באיזה אות מתחילה המילה "Lemon"?',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'K' },
                                                { word: 'L' },
                                                { word: 'M' },
                                                { word: 'N' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_2_2_2',
                                            title: 'באיזה אות מתחילה המילה "Jacket"?',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' },
                                                { word: 'J' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_1_3',
                            title: 'זהה את האות המושמעת',
                            lessons: [
                                {
                                    id: 'lesson1_1_3_1',
                                    title: 'אותיות A-E',
                                    quests: [
                                        {
                                            id: 'quest1_1_3_1_4',
                                            title: 'בחר את האות המתאימה',
                                            word: 'D',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_1_1',
                                            title: 'בחר את האות המתאימה',
                                            word: 'A',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_1_5',
                                            title: 'בחר את האות המתאימה',
                                            word: 'E',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'E' },
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_1_2',
                                            title: 'בחר את האות המתאימה',
                                            word: 'B',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_1_3',
                                            title: 'בחר את האות המתאימה',
                                            word: 'C',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'A' },
                                                { word: 'B' },
                                                { word: 'C' },
                                                { word: 'D' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_3_2',
                                    title: 'אותיות F-J',
                                    quests: [
                                        {
                                            id: 'quest1_1_3_2_5',
                                            title: 'בחר את האות המתאימה',
                                            word: 'J',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'J' },
                                                { word: 'K' },
                                                { word: 'L' },
                                                { word: 'M' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_2_2',
                                            title: 'בחר את האות המתאימה',
                                            word: 'G',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_2_4',
                                            title: 'בחר את האות המתאימה',
                                            word: 'I',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_2_1',
                                            title: 'בחר את האות המתאימה',
                                            word: 'F',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_3_2_3',
                                            title: 'בחר את האות המתאימה',
                                            word: 'H',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'F' },
                                                { word: 'G' },
                                                { word: 'H' },
                                                { word: 'I' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_1_4',
                            title: 'התאם צמדים',
                            lessons: [
                                {
                                    id: 'lesson1_1_4_1',
                                    title: 'התאם אותיות A-G',
                                    quests: [
                                        {
                                            id: 'quest1_1_4_1_1',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'A', word2: 'א' },
                                                { word1: 'B', word2: 'ב' },
                                                { word1: 'D', word2: 'ד' },
                                                { word1: 'F', word2: 'פ' },
                                                { word1: 'G', word2: 'ג' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_1_2',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'A', word2: 'א' },
                                                { word1: 'B', word2: 'ב' },
                                                { word1: 'D', word2: 'ד' },
                                                { word1: 'F', word2: 'פ' },
                                                { word1: 'G', word2: 'ג' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_1_3',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'A', word2: 'א' },
                                                { word1: 'B', word2: 'ב' },
                                                { word1: 'D', word2: 'ד' },
                                                { word1: 'F', word2: 'פ' },
                                                { word1: 'G', word2: 'ג' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_4_2',
                                    title: 'התאם אותיות H-N',
                                    quests: [
                                        {
                                            id: 'quest1_1_4_2_1',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'H', word2: 'ה' },
                                                { word1: 'J', word2: 'ג׳' },
                                                { word1: 'K', word2: 'ק' },
                                                { word1: 'L', word2: 'ל' },
                                                { word1: 'M', word2: 'מ' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_2_2',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'H', word2: 'ה' },
                                                { word1: 'J', word2: 'ג׳' },
                                                { word1: 'K', word2: 'ק' },
                                                { word1: 'L', word2: 'ל' },
                                                { word1: 'N', word2: 'נ' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_2_3',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'H', word2: 'ה' },
                                                { word1: 'J', word2: 'ג׳' },
                                                { word1: 'K', word2: 'ק' },
                                                { word1: 'M', word2: 'מ' },
                                                { word1: 'N', word2: 'נ' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_4_3',
                                    title: 'התאם אותיות P-T',
                                    quests: [
                                        {
                                            id: 'quest1_1_4_3_1',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'P', word2: 'פ' },
                                                { word1: 'R', word2: 'ר' },
                                                { word1: 'S', word2: 'ס' },
                                                { word1: 'T', word2: 'ט' },
                                                { word1: 'V', word2: 'ו' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_3_2',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'P', word2: 'פ' },
                                                { word1: 'R', word2: 'ר' },
                                                { word1: 'S', word2: 'ס' },
                                                { word1: 'T', word2: 'ט' },
                                                { word1: 'Y', word2: 'י' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_3_3',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'P', word2: 'פ' },
                                                { word1: 'R', word2: 'ר' },
                                                { word1: 'S', word2: 'ס' },
                                                { word1: 'V', word2: 'ו' },
                                                { word1: 'Z', word2: 'ז' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_4_5',
                                    title: 'התאם מילים פשוטות (חלק א)',
                                    quests: [
                                        {
                                            id: 'quest1_1_4_5_1',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Dog', word2: 'כלב' },
                                                { word1: 'Cat', word2: 'חתול' },
                                                { word1: 'House', word2: 'בית' },
                                                { word1: 'Tree', word2: 'עץ' },
                                                { word1: 'Book', word2: 'ספר' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_5_2',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Sun', word2: 'שמש' },
                                                { word1: 'Moon', word2: 'ירח' },
                                                { word1: 'Star', word2: 'כוכב' },
                                                { word1: 'Water', word2: 'מים' },
                                                { word1: 'Fire', word2: 'אש' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_5_3',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Apple', word2: 'תפוח' },
                                                { word1: 'Banana', word2: 'בננה' },
                                                { word1: 'Orange', word2: 'תפוז' },
                                                { word1: 'Grape', word2: 'ענב' },
                                                { word1: 'Peach', word2: 'אפרסק' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_1_4_6',
                                    title: 'התאם מילים פשוטות (חלק ב)',
                                    quests: [
                                        {
                                            id: 'quest1_1_4_6_1',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Hand', word2: 'יד' },
                                                { word1: 'Foot', word2: 'רגל' },
                                                { word1: 'Eye', word2: 'עין' },
                                                { word1: 'Nose', word2: 'אף' },
                                                { word1: 'Mouth', word2: 'פה' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_6_2',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Table', word2: 'שולחן' },
                                                { word1: 'Chair', word2: 'כיסא' },
                                                { word1: 'Bed', word2: 'מיטה' },
                                                { word1: 'Door', word2: 'דלת' },
                                                { word1: 'Window', word2: 'חלון' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_1_4_6_3',
                                            title: 'התאם את הזוגות הנכונים',
                                            couples: [
                                                { word1: 'Red', word2: 'אדום' },
                                                { word1: 'Blue', word2: 'כחול' },
                                                { word1: 'Green', word2: 'ירוק' },
                                                { word1: 'Yellow', word2: 'צהוב' },
                                                { word1: 'White', word2: 'לבן' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'unit1_2',
                    title: 'שמות באנגלית',
                    levels: [
                        {
                            id: 'level1_2_1',
                            title: 'זיהוי חיות',
                            lessons: [
                                {
                                    id: 'lesson1_2_1_1',
                                    title: 'חיות חווה',
                                    quests: [
                                        {
                                            id: 'quest1_2_1_1_1',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Dog',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🐕' },
                                                { word: '🐈' },
                                                { word: '🐎' },
                                                { word: '🐖' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_1_2',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Cat',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🐇' },
                                                { word: '����' },
                                                { word: '🦊' },
                                                { word: '🐒' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_1_3',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Horse',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🐂' },
                                                { word: '🦓' },
                                                { word: '🐎' },
                                                { word: '🦌' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_1_4',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Pig',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: '🐑' },
                                                { word: '🐐' },
                                                { word: '🐄' },
                                                { word: '🐖' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_1_5',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Cow',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: '🐃' },
                                                { word: '🐂' },
                                                { word: '🐪' },
                                                { word: '🐄' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_1_2',
                                    title: 'חיות בר',
                                    quests: [
                                        {
                                            id: 'quest1_2_1_2_1',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Lion',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🦁' },
                                                { word: '🐯' },
                                                { word: '🐆' },
                                                { word: '🐅' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_2_2',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Elephant',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🦏' },
                                                { word: '🐘' },
                                                { word: '🦛' },
                                                { word: '🦒' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_2_3',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Monkey',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🦊' },
                                                { word: '🦝' },
                                                { word: '🐒' },
                                                { word: '🦥' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_1_3',
                                    title: 'חיות ים',
                                    quests: [
                                        {
                                            id: 'quest1_2_1_3_1',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Fish',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🐠' },
                                                { word: '🦈' },
                                                { word: '🐋' },
                                                { word: '🦑' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_3_2',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Dolphin',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🐋' },
                                                { word: '🐬' },
                                                { word: '🦈' },
                                                { word: '🐡' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_3_3',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Octopus',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🦑' },
                                                { word: '🦐' },
                                                { word: '🐙' },
                                                { word: '🦀' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_1_4',
                                    title: 'חיות מעופפות',
                                    quests: [
                                        {
                                            id: 'quest1_2_1_4_1',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Bird',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🐦' },
                                                { word: '🦅' },
                                                { word: '🦉' },
                                                { word: '🦆' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_4_2',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Eagle',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🦃' },
                                                { word: '🦅' },
                                                { word: '🦢' },
                                                { word: '🦩' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_1_4_3',
                                            title: 'בחר את החיה הנכונה: ',
                                            speakWord: 'Owl',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🦜' },
                                                { word: '🦚' },
                                                { word: '🦉' },
                                                { word: '🐦' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_2_2',
                            title: 'שמות החיות',
                            lessons: [
                                {
                                    id: 'lesson1_2_2_1',
                                    title: 'חיות חווה ובית',
                                    quests: [
                                        {
                                            id: 'quest1_2_2_1_1',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐕',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Dog' },
                                                { word: 'Cat' },
                                                { word: 'Horse' },
                                                { word: 'Pig' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_1_2',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐈',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Rabbit' },
                                                { word: 'Cat' },
                                                { word: 'Fox' },
                                                { word: 'Monkey' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_1_3',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐇',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Rabbit' },
                                                { word: 'Cat' },
                                                { word: 'Fox' },
                                                { word: 'Monkey' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_1_4',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🦊',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'Fox' },
                                                { word: 'Raccoon' },
                                                { word: 'Monkey' },
                                                { word: 'Sloth' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_1_5',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐒',
                                            correctOptIdx: 4,
                                            opts: [
                                                { word: 'Fox' },
                                                { word: 'Raccoon' },
                                                { word: 'Monkey' },
                                                { word: 'Sloth' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_2_2',
                                    title: 'חיות בר',
                                    quests: [
                                        {
                                            id: 'quest1_2_2_2_1',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🦁',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Lion' },
                                                { word: 'Tiger' },
                                                { word: 'Leopard' },
                                                { word: 'Cheetah' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_2_2',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐘',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Rhino' },
                                                { word: 'Elephant' },
                                                { word: 'Hippo' },
                                                { word: 'Giraffe' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_2_3',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐒',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Fox' },
                                                { word: 'Raccoon' },
                                                { word: 'Monkey' },
                                                { word: 'Sloth' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_2_3',
                                    title: 'חיות ים',
                                    quests: [
                                        {
                                            id: 'quest1_2_2_3_1',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐠',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Fish' },
                                                { word: 'Shark' },
                                                { word: 'Whale' },
                                                { word: 'Squid' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_3_2',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐬',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Whale' },
                                                { word: 'Dolphin' },
                                                { word: 'Shark' },
                                                { word: 'Blowfish' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_3_3',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐙',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Squid' },
                                                { word: 'Shrimp' },
                                                { word: 'Octopus' },
                                                { word: 'Crab' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_2_4',
                                    title: 'חיות מעופפות',
                                    quests: [
                                        {
                                            id: 'quest1_2_2_4_1',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🐦',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Bird' },
                                                { word: 'Eagle' },
                                                { word: 'Owl' },
                                                { word: 'Duck' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_4_2',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🦅',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Turkey' },
                                                { word: 'Eagle' },
                                                { word: 'Swan' },
                                                { word: 'Flamingo' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_2_4_3',
                                            title: 'בחר את שם החיה הנכון:',
                                            speakWord: '🦉',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Parrot' },
                                                { word: 'Peacock' },
                                                { word: 'Owl' },
                                                { word: 'Sparrow' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_2_3',
                            title: 'זיהוי פירות',
                            lessons: [
                                {
                                    id: 'lesson1_2_3_1',
                                    title: 'פירות בסיסיים',
                                    quests: [
                                        {
                                            id: 'quest1_2_3_1_1',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Apple',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🍎' },
                                                { word: '🍐' },
                                                { word: '🍊' },
                                                { word: '🍌' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_1_2',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Banana',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🍎' },
                                                { word: '🍌' },
                                                { word: '🍊' },
                                                { word: '🍇' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_1_3',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Orange',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🍎' },
                                                { word: '🍌' },
                                                { word: '🍊' },
                                                { word: '🍇' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_3_2',
                                    title: 'פירות נוספים',
                                    quests: [
                                        {
                                            id: 'quest1_2_3_2_1',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Grapes',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🍇' },
                                                { word: '🍓' },
                                                { word: '🍑' },
                                                { word: '🍒' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_2_2',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Strawberry',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🍇' },
                                                { word: '🍓' },
                                                { word: '🍑' },
                                                { word: '🍒' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_2_3',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Cherry',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: '🍇' },
                                                { word: '🍓' },
                                                { word: '🍑' },
                                                { word: '🍒' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_3_3',
                                    title: 'פירות טרופיים',
                                    quests: [
                                        {
                                            id: 'quest1_2_3_3_1',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Pineapple',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🍍' },
                                                { word: '🥝' },
                                                { word: '🥭' },
                                                { word: '🍐' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_3_2',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Kiwi',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🍍' },
                                                { word: '🥝' },
                                                { word: '🥭' },
                                                { word: '🍐' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_3_3_3',
                                            title: 'בחר את הפרי הנכון: ',
                                            speakWord: 'Mango',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🍍' },
                                                { word: '🥝' },
                                                { word: '🥭' },
                                                { word: '🍐' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_2_4',
                            title: 'שמות הפירות',
                            lessons: [
                                {
                                    id: 'lesson1_2_4_1',
                                    title: 'פירות בסיסיים',
                                    quests: [
                                        {
                                            id: 'quest1_2_4_1_1',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍎',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Apple' },
                                                { word: 'Pear' },
                                                { word: 'Orange' },
                                                { word: 'Banana' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_1_2',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍌',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Apple' },
                                                { word: 'Banana' },
                                                { word: 'Orange' },
                                                { word: 'Grapes' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_1_3',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍊',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Apple' },
                                                { word: 'Banana' },
                                                { word: 'Orange' },
                                                { word: 'Grapes' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_4_2',
                                    title: 'פירות נוספים',
                                    quests: [
                                        {
                                            id: 'quest1_2_4_2_1',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍇',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Grapes' },
                                                { word: 'Strawberry' },
                                                { word: 'Peach' },
                                                { word: 'Cherry' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_2_2',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍓',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Grapes' },
                                                { word: 'Strawberry' },
                                                { word: 'Peach' },
                                                { word: 'Cherry' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_2_3',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍒',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'Grapes' },
                                                { word: 'Strawberry' },
                                                { word: 'Peach' },
                                                { word: 'Cherry' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_2_4_3',
                                    title: 'פירות טרופיים',
                                    quests: [
                                        {
                                            id: 'quest1_2_4_3_1',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🍍',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Pineapple' },
                                                { word: 'Kiwi' },
                                                { word: 'Mango' },
                                                { word: 'Pear' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_3_2',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🥝',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Pineapple' },
                                                { word: 'Kiwi' },
                                                { word: 'Mango' },
                                                { word: 'Pear' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_2_4_3_3',
                                            title: 'בחר את שם הפרי הנכון:',
                                            speakWord: '🥭',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Pineapple' },
                                                { word: 'Kiwi' },
                                                { word: 'Mango' },
                                                { word: 'Pear' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'unit1_3',
                    title: 'ימי השבוע, חודשים ושעות',
                    levels: [
                        {
                            id: 'level1_3_1',
                            title: 'ימי השבוע',
                            lessons: [
                                {
                                    id: 'lesson1_3_1_1',
                                    title: 'ימי השבוע - חלק א׳',
                                    quests: [
                                        {
                                            id: 'quest1_3_1_1_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Wednesday',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'יום שישי' },
                                                { word: 'יום שני' },
                                                { word: 'יום רביעי' },
                                                { word: 'יום ראשון' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_1_1_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Friday',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'יום שישי' },
                                                { word: 'יום שלישי' },
                                                { word: 'יום חמישי' },
                                                { word: 'יום שבת' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_1_1_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Sunday',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'יום שלישי' },
                                                { word: 'יום שישי' },
                                                { word: 'יום שני' },
                                                { word: 'יום ראשון' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_1_1_4',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Monday',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'יום רביעי' },
                                                { word: 'יום שני' },
                                                { word: 'יום חמישי' },
                                                { word: 'יום שישי' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_3_1_2',
                                    title: 'ימי השבוע - חלק ב׳',
                                    quests: [
                                        {
                                            id: 'quest1_3_1_2_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Saturday',
                                            correctOptIdx: 3,
                                            opts: [
                                                { word: 'יום רביעי' },
                                                { word: 'יום חמישי' },
                                                { word: 'יום שישי' },
                                                { word: 'יום שבת' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_1_2_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Tuesday',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'יום ראשון' },
                                                { word: 'יום שלישי' },
                                                { word: 'יום שני' },
                                                { word: 'יום רביעי' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_1_2_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Thursday',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'יום חמישי' },
                                                { word: 'יום שלישי' },
                                                { word: 'יום שישי' },
                                                { word: 'יום ראשון' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_3_2',
                            title: 'החודשים',
                            lessons: [
                                {
                                    id: 'lesson1_3_2_1',
                                    title: 'חודשי השנה - חלק א׳',
                                    quests: [
                                        {
                                            id: 'quest1_3_2_1_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'July',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'מרץ' },
                                                { word: 'מאי' },
                                                { word: 'יולי' },
                                                { word: 'ינואר' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_2_1_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'March',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'מרץ' },
                                                { word: 'ספטמבר' },
                                                { word: 'אפריל' },
                                                { word: 'אוגוסט' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_2_1_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'October',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'דצמבר' },
                                                { word: 'אוקטובר' },
                                                { word: 'נובמבר' },
                                                { word: 'פברואר' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_3_2_2',
                                    title: 'חודשי השנה - חלק ב׳',
                                    quests: [
                                        {
                                            id: 'quest1_3_2_2_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'September',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'אוגוסט' },
                                                { word: 'יולי' },
                                                { word: 'ספטמבר' },
                                                { word: 'אוקטובר' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_2_2_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'April',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'אפריל' },
                                                { word: 'מאי' },
                                                { word: 'מרץ' },
                                                { word: 'יוני' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_2_2_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'December',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'נובמבר' },
                                                { word: 'דצמבר' },
                                                { word: 'ינואר' },
                                                { word: 'פברואר' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_3_3',
                            title: 'מילים הקשורות לזמן',
                            lessons: [
                                {
                                    id: 'lesson1_3_3_1',
                                    title: 'מושגי זמן בסיסיים',
                                    quests: [
                                        {
                                            id: 'quest1_3_3_1_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Evening',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'בוקר' },
                                                { word: 'ערב' },
                                                { word: 'צהריים' },
                                                { word: 'לילה' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_3_1_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Yesterday',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'אתמול' },
                                                { word: 'היום' },
                                                { word: 'מחר' },
                                                { word: 'עכשיו' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_3_1_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Hour',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'דקה' },
                                                { word: 'שניה' },
                                                { word: 'שעה' },
                                                { word: 'יום' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_3_3_2',
                                    title: 'מושגי זמן מתקדמים',
                                    quests: [
                                        {
                                            id: 'quest1_3_3_2_1',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Minute',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'שעה' },
                                                { word: 'יום' },
                                                { word: 'דקה' },
                                                { word: 'שניה' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_3_2_2',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Tomorrow',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'אתמול' },
                                                { word: 'מחר' },
                                                { word: 'היום' },
                                                { word: 'עכשיו' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_3_3_2_3',
                                            title: 'בחר את התרגום הנכון:',
                                            speakWord: 'Now',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'מחר' },
                                                { word: 'אתמול' },
                                                { word: 'עכשיו' },
                                                { word: 'היום' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'unit1_4',
                    title: 'צבעים באנגלית',
                    levels: [
                        {
                            id: 'level1_4_1',
                            title: 'צבעים בסיסיים',
                            lessons: [
                                {
                                    id: 'lesson1_4_1_1',
                                    title: 'אדום, כחול, צהוב',
                                    quests: [
                                        {
                                            id: 'quest1_4_1_1_1',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Red',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🟥' },
                                                { word: '🟦' },
                                                { word: '🟨' },
                                                { word: '⬜' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_1_2',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Blue',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🟥' },
                                                { word: '🟦' },
                                                { word: '🟨' },
                                                { word: '⬜' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_1_3',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Yellow',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🟥' },
                                                { word: '🟦' },
                                                { word: '🟨' },
                                                { word: '⬜' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_1_2',
                                    title: 'ירוק, שחור, לבן',
                                    quests: [
                                        {
                                            id: 'quest1_4_1_2_1',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Green',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🟩' },
                                                { word: '⬛' },
                                                { word: '⬜' },
                                                { word: '🟫' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_2_2',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Black',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🟩' },
                                                { word: '⬛' },
                                                { word: '⬜' },
                                                { word: '🟫' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_2_3',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'White',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🟩' },
                                                { word: '⬛' },
                                                { word: '⬜' },
                                                { word: '🟫' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_1_3',
                                    title: 'חום, כתום, סגול',
                                    quests: [
                                        {
                                            id: 'quest1_4_1_3_1',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Brown',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: '🟫' },
                                                { word: '🟧' },
                                                { word: '🟪' },
                                                { word: '⬜' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_3_2',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Orange',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: '🟫' },
                                                { word: '🟧' },
                                                { word: '🟪' },
                                                { word: '⬜' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_1_3_3',
                                            title: 'בחר את הצבע הנכון:',
                                            speakWord: 'Purple',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: '🟫' },
                                                { word: '🟧' },
                                                { word: '🟪' },
                                                { word: '⬜' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_4_2',
                            title: 'שמות הצבעים',
                            lessons: [
                                {
                                    id: 'lesson1_4_2_1',
                                    title: 'צבעים בסיסיים - שמות',
                                    quests: [
                                        {
                                            id: 'quest1_4_2_1_1',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟥',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Blue' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_1_2',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟦',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Blue' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_1_3',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟨',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Blue' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_2_2',
                                    title: 'שחור, לבן וירוק - שמות',
                                    quests: [
                                        {
                                            id: 'quest1_4_2_2_1',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '⬛',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Green' },
                                                { word: 'Brown' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_2_2',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '⬜',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Green' },
                                                { word: 'Brown' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_2_3',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟩',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Green' },
                                                { word: 'Brown' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_2_3',
                                    title: 'צבעים נוספים - שמות',
                                    quests: [
                                        {
                                            id: 'quest1_4_2_3_1',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟧',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Orange' },
                                                { word: 'Purple' },
                                                { word: 'Brown' },
                                                { word: 'Pink' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_3_2',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟪',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Orange' },
                                                { word: 'Purple' },
                                                { word: 'Brown' },
                                                { word: 'Pink' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_2_3_3',
                                            title: 'בחר את שם הצבע הנכון:',
                                            speakWord: '🟫',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Orange' },
                                                { word: 'Purple' },
                                                { word: 'Brown' },
                                                { word: 'Pink' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'level1_4_3',
                            title: 'צבעים בחיי היומיום',
                            lessons: [
                                {
                                    id: 'lesson1_4_3_1',
                                    title: 'צבעים בטבע',
                                    quests: [
                                        {
                                            id: 'quest1_4_3_1_1',
                                            title: 'מה הצבע של השמש?',
                                            speakWord: 'Sun',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Yellow' },
                                                { word: 'Blue' },
                                                { word: 'Green' },
                                                { word: 'Red' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_1_2',
                                            title: 'מה הצבע של השמיים?',
                                            speakWord: 'Sky',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Yellow' },
                                                { word: 'Blue' },
                                                { word: 'Green' },
                                                { word: 'Red' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_1_3',
                                            title: 'מה הצבע של העשב?',
                                            speakWord: 'Grass',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Yellow' },
                                                { word: 'Blue' },
                                                { word: 'Green' },
                                                { word: 'Red' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_3_2',
                                    title: 'צבעי מאכלים',
                                    quests: [
                                        {
                                            id: 'quest1_4_3_2_1',
                                            title: 'מה הצבע של התפוח?',
                                            speakWord: 'Apple',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Orange' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_2_2',
                                            title: 'מה הצבע של התפוז?',
                                            speakWord: 'Orange',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Orange' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_2_3',
                                            title: 'מה הצבע של הבננה?',
                                            speakWord: 'Banana',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Red' },
                                                { word: 'Orange' },
                                                { word: 'Yellow' },
                                                { word: 'Green' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'lesson1_4_3_3',
                                    title: 'צבעים בבגדים',
                                    quests: [
                                        {
                                            id: 'quest1_4_3_3_1',
                                            title: 'איזה צבע החולצה?',
                                            speakWord: '👕',
                                            correctOptIdx: 0,
                                            opts: [
                                                { word: 'Blue' },
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Red' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_3_2',
                                            title: 'איזה צבע המכנסיים?',
                                            speakWord: '👖',
                                            correctOptIdx: 1,
                                            opts: [
                                                { word: 'Blue' },
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Red' }
                                            ]
                                        },
                                        {
                                            id: 'quest1_4_3_3_3',
                                            title: 'איזה צבע הנעליים?',
                                            speakWord: '👟',
                                            correctOptIdx: 2,
                                            opts: [
                                                { word: 'Blue' },
                                                { word: 'Black' },
                                                { word: 'White' },
                                                { word: 'Red' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
}

export const gameService = {
    async getSections() {
        const data = await _getData()
        return data.sections
    },

    async getSection(sectionId) {
        const data = await _getData()
        return data.sections.find(s => s.id === sectionId)
    },

    async getUnitsForSection(sectionId) {
        const section = await this.getSection(sectionId)
        return section?.units || []
    },


    async getUnit(sectionId, unitId) {
        const section = await this.getSection(sectionId)
        return section?.units.find(u => u.id === unitId)
    },


    async getLevel(sectionId, unitId, levelId) {
        const unit = await this.getUnit(sectionId, unitId)
        return unit?.levels.find(l => l.id === levelId)
    },

    async getLesson(sectionId, unitId, levelId, lessonId) {
        const level = await this.getLevel(sectionId, unitId, levelId)
        return level?.lessons.find(l => l.id === lessonId)
    },

    async getQuests(sectionId, unitId, levelId, lessonId) {
        const lesson = await this.getLesson(sectionId, unitId, levelId, lessonId)
        return lesson?.quests
    },


    getProgressTemplate: async function () {
        const sections = await this.getSections()
        const progressTemplate = { sections: {} }

        sections.forEach(section => {
            progressTemplate.sections[section.id] = {
                id: section.id,
                title: section.title,
                completed: false,
                totalUnits: section.units.length,
                completedUnits: 0,
                units: {}
            }

            section.units.forEach(unit => {
                progressTemplate.sections[section.id].units[unit.id] = {
                    id: unit.id,
                    title: unit.title,
                    completed: false,
                    totalLevels: unit.levels.length,
                    completedLevels: 0,
                    levels: {}
                }

                unit.levels.forEach(level => {
                    progressTemplate.sections[section.id].units[unit.id].levels[level.id] = {
                        id: level.id,
                        title: level.title,
                        completed: false,
                        totalLessons: level.lessons.length,
                        completedLessons: 0,
                        lessons: {}
                    }

                    level.lessons.forEach(lesson => {
                        progressTemplate.sections[section.id].units[unit.id].levels[level.id].lessons[lesson.id] = {
                            id: lesson.id,
                            title: lesson.title,
                            completed: false,
                            totalQuests: lesson.quests.length,
                            completedQuests: 0,
                            quests: {}
                        }

                        lesson.quests.forEach(quest => {
                            progressTemplate.sections[section.id].units[unit.id].levels[level.id].lessons[lesson.id].quests[quest.id] = {
                                id: quest.id,
                                completed: false,
                                score: 0
                            }
                        })
                    })
                })
            })
        })

        return progressTemplate
    }
}


async function _getData() {
    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 100))

    const manipulatedData = JSON.parse(JSON.stringify(originalData))

    // Create a deep copy of the first section with new IDs
    const newSection = deepCloneWithNewIds(manipulatedData.sections[0], 'section2_')
    newSection.title = 'מתקדמים'

    // Add the new section to the data
    manipulatedData.sections.push(newSection)

    return manipulatedData
}


// Helper function to generate new IDs
function generateNewId(oldId, prefix) {
    const numericPart = oldId.match(/\d+/g).map(Number)
    numericPart[0] += 1
    return `${prefix}${numericPart.join('_')}`
}




// Helper function for deep cloning with new IDs
function deepCloneWithNewIds(obj, idPrefix) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepCloneWithNewIds(item, idPrefix))
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {}
        for (const [key, value] of Object.entries(obj)) {
            if (key === 'id') {
                newObj[key] = generateNewId(value, idPrefix)
            } else {
                newObj[key] = deepCloneWithNewIds(value, idPrefix)
            }
        }
        return newObj
    }
    return obj
}



