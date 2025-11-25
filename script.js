// ====================================================================
// NOVO OBJETO: ESTRUTURA ESTÁTICA DAS CARTAS PARA GITHUB PAGES
// ====================================================================
const CARD_STRUCTURE = {
    Ancestries: [
        'Clank.jpg', 'Drakona.jpg', 'Dwarf.jpg', 'Elf.jpg', 'Faerie.jpg', 'Faun.jpg', 'Firbolg.jpg',
        'Fungril.jpg', 'Galapa.jpg', 'Giant.jpg', 'Goblin.jpg', 'Halfling.jpg', 'Human.jpg',
        'Infernis.jpg', 'Katari.jpg', 'Orc.jpg', 'Ribbet.jpg', 'Simiah.jpg'
    ],
    Communities: [
        'Highborne.jpg', 'Loreborne.jpg', 'Dwarf.jpg', 'Orderborne.jpg', 'Ridgeborne.jpg', 'Seaborne.jpg',
        'Slyborne.jpg', 'Underborne.jpg', 'Wanderborne.jpg', 'Wildborne.jpg'
    ],
    Classes: {
        Bard: {
            Troubadour: [
                'Bard_Troubadour_Foundation.jpg', 'Bard_Troubadour_Mastery.jpg', 'Bard_Troubadour_Specialisation.jpg'
            ],
            Wordsmith: [
                'Bard_Wordsmith_Foundation.jpg', 'Bard_Wordsmith_Mastery.jpg', 'Bard_Wordsmith_Specialisation.jpg'
            ]
        },
        Druid: {
            WardenOfRenewal: [
                'Druid_WardenOfRenewal_Foundation.jpg', 'Druid_WardenOfRenewal_Mastery.jpg', 'Druid_WardenOfRenewal_Specialisation.jpg'
            ],
            WardenOfTheElements: [
                'Druid_WardenOfTheElements_Foundation.jpg', 'Druid_WardenOfTheElements_Mastery.jpg', 'Druid_WardenOfTheElements_Specialisation.jpg'
            ]
        },
        Guardian: {
            Stalwart: [
                'Guardian_Stalwart_Foundation.jpg', 'Guardian_Stalwart_Mastery.jpg', 'Guardian_Stalwart_Specialisation.jpg'
            ],
            Vengeance: [
                'Guardian_Vengeance_Foundation.jpg', 'Guardian_Vengeance_Mastery.jpg', 'Guardian_Vengeance_Specialisation.jpg'
            ]
        },
        Ranger: {
            Beastbound: [
                'Ranger_Beastbound_Foundation.jpg', 'Ranger_Beastbound_Mastery.jpg', 'Ranger_Beastbound_Specialisation.jpg'
            ],
            Wayfinder: [
                'Ranger_Wayfinder_Foundation.jpg', 'Ranger_Wayfinder_Mastery.jpg', 'Ranger_Wayfinder_Specialisation.jpg'
            ]
        },
        Rogue: {
            Nightwalker: [
                'Rogue_Nightwalker_Foundation.jpg', 'Rogue_Nightwalker_Mastery.jpg', 'Rogue_Nightwalker_Specialisation.jpg'
            ],
            Syndicate: [
                'Rogue_Syndicate_Foundation.jpg', 'Rogue_Syndicate_Mastery.jpg', 'Rogue_Syndicate_Specialisation.jpg'
            ]
        },
        Seraph: {
            DivineWielder: [
                'Seraph_DivineWielder_Foundation.jpg', 'Seraph_DivineWielder_Mastery.jpg', 'Seraph_DivineWielder_Specialisation.jpg'
            ],
            WingedSentinel: [
                'Seraph_WingedSentinel_Foundation.jpg', 'Seraph_WingedSentinel_Mastery.jpg', 'Seraph_WingedSentinel_Specialisation.jpg'
            ]
        },
        Sorcerer: {
            ElementalOrigin: [
                'Sorcerer_ElementalOrigin_Foundation.jpg', 'Sorcerer_ElementalOrigin_Mastery.jpg', 'Sorcerer_ElementalOrigin_Specialisation.jpg'
            ],
            PrimalOrigin: [
                'Sorcerer_PrimalOrigin_Foundation.jpg', 'Sorcerer_PrimalOrigin_Mastery.jpg', 'Sorcerer_PrimalOrigin_Specialisation.jpg'
            ]
        },
        Warrior: {
            CallOfTheBrave: [
                'Warrior_CallOfTheBrave_Foundation.jpg', 'Warrior_CallOfTheBrave_Mastery.jpg', 'Warrior_CallOfTheBrave_Specialisation.jpg'
            ],
            CallOfTheSlayer: [
                'Warrior_CallOfTheSlayer_Foundation.jpg', 'Warrior_CallOfTheSlayer_Mastery.jpg', 'Warrior_CallOfTheSlayer_Specialisation.jpg'
            ]
        },
        Wizard: {
            SchoolOfKnowledge: [
                'Wizard_SchoolOfKnowledge_Foundation.jpg', 'Wizard_SchoolOfKnowledge_Mastery.jpg', 'Wizard_SchoolOfKnowledge_Specialisation.jpg'
            ],
            SchoolOfWar: [
                'Wizard_SchoolOfWar_Foundation.jpg', 'Wizard_SchoolOfWar_Mastery.jpg', 'Wizard_SchoolOfWar_Specialisation.jpg'
            ]
        }
    },
    Domains: {
        ARCANA: [ /* ... preenchimento abaixo ... */ ],
        BLADE: [ /* ... preenchimento abaixo ... */ ],
        BONE: [ /* ... preenchimento abaixo ... */ ],
        CODEX: [ /* ... preenchimento abaixo ... */ ],
        GRACE: [ /* ... preenchimento abaixo ... */ ],
        MIDNIGHT: [ /* ... preenchimento abaixo ... */ ],
        SAGE: [ /* ... preenchimento abaixo ... */ ],
        SPLENDOR: [ /* ... preenchimento abaixo ... */ ],
        VALOR: [ /* ... preenchimento abaixo ... */ ]
    }
};

// Dados completos do ARCANA
CARD_STRUCTURE.Domains.ARCANA = [
    '01 - Rune Ward.jpg', '01 - Unleash Chaos.jpg', '01 - Wall Walk.jpg', '02 - Cinder Grasp.jpg',
    '02 - Floating Eye.jpg', '03 - Counterspell.jpg', '03 - Flight.jpg', '04 - Blink Out.jpg',
    '04 - Preservation Blast.jpg', '05 - Chain Lightning.jpg', '05 - Premonition.jpg', '06 - Rift Walker.jpg',
    '06 - Telekinesis.jpg', '07 - Arcana-Touched.jpg', '07 - Cloaking Blast.jpg', '08 - Arcane Reflection.jpg',
    '08 - Confusing Aura.jpg', '09 - Earthquake.jpg', '09 - Sensory Projection.jpg', '10 - Adjust Reality.jpg',
    '10 - Falling Sky.jpg'
];

// Dados completos do BLADE
CARD_STRUCTURE.Domains.BLADE = [
    '01 - Get Back Up.jpg', '01 - Not Good Enough.jpg', '01 - Whirlwind.jpg', '02 - A Soldier\'s Bond.jpg',
    '02 - Reckless.jpg', '03 - Scramble.jpg', '03 - Versatile Fighter.jpg', '04 - Deadly Focus.jpg',
    '04 - Fortified Armor.jpg', '05 - Champion\'s Edge.jpg', '05 - Vitality.jpg', '06 - Battle-Hardened.jpg',
    '06 - Rage Up.jpg', '07 - Blade-Touched.jpg', '07 - Glancing Blows.jpg', '08 - Battle Cry.jpg',
    '08 - Frenzy.jpg', '09 - Gore And Glory.jpg', '09 - Reaper\'s Strike.jpg', '10 - Battle Monster.jpg',
    '10 - Onslaught.jpg'
];

// Dados completos do BONE
CARD_STRUCTURE.Domains.BONE = [
    '01 - Deft Maneuvers.jpg', '01 - I See It Coming.jpg', '01 - Untouchable.jpg', '02 - Ferocity.jpg',
    '02 - Strategic Approach.jpg', '03 - Brace.jpg', '03 - Tactician.jpg', '04 - Boost.jpg',
    '04 - Redirect.jpg', '05 - Know Thy Enemy.jpg', '05 - Signature Move.jpg', '06 - Rapid Riposte.jpg',
    '06 - Recovery.jpg', '07 - Bone-Touched.jpg', '07 - Cruel Precision.jpg', '08 - Breaking Blow.jpg',
    '08 - Wrangle.jpg', '09 - On The Brink.jpg', '09 - Splintering Strike.jpg', '10 - Deathrun.jpg',
    '10 - Swift Step.jpg'
];

// Dados completos do CODEX
CARD_STRUCTURE.Domains.CODEX = [
    '01 - Book Of Ava.jpg', '01 - Book Of Illiat.jpg', '01 - Book Of Tyfar.jpg', '02 - Book Of Sitil.jpg',
    '02 - Book Of Vagras.jpg', '03 - Book Of Korvax.jpg', '03 - Book Of Norai.jpg', '04 - Book Of Exota.jpg',
    '04 - Book Of Grynn.jpg', '05 - Manifest Wall.jpg', '05 - Teleport.jpg', '06 - Banish.jpg',
    '06 - Sigil Of Retribution.jpg', '07 - Book Of Homet.jpg', '07 - Codex-Touched.jpg', '08 - Book Of Vyola.jpg',
    '08 - Safe Haven.jpg', '09 - Book Of Ronin.jpg', '09 - Desintegration Wave.jpg', '10 - Book Of Yarrow.jpg',
    '10 - Transcendent Union.jpg'
];

// Dados completos do GRACE
CARD_STRUCTURE.Domains.GRACE = [
    '01 - Deft Deceiver.jpg', '01 - Enrapture.jpg', '01 - Inspirational Words.jpg', '02 - Tell No Lies.jpg',
    '02 - Troublemaker.jpg', '03 - Hypnotic Shimmer.jpg', '03 - Invisibility.jpg', '04 - Soothing Speech.jpg',
    '04 - Through Your Eyes.jpg', '05 - Thought Delver.jpg', '05 - Words Of Discord.jpg', '06 - Never Upstaged.jpg',
    '06 - Share The Burden.jpg', '07 - Endless Charisma.jpg', '07 - Grace-Touched.jpg', '08 - Astral Projection.jpg',
    '08 - Mass Enrapture.jpg', '09 - Copycat.jpg', '09 - Master Of The Craft.jpg', '10 - Encore.jpg',
    '10 - Notorious.jpg'
];

// Dados completos do MIDNIGHT
CARD_STRUCTURE.Domains.MIDNIGHT = [
    '01 - Pick And Pull.jpg', '01 - Rain Of Blades.jpg', '01 - Uncanny Disguise.jpg', '02 - Midnight Spirit.jpg',
    '02 - Shadowbind.jpg', '03 - Chokehold.jpg', '03 - Veil Of Night.jpg', '04 - Glyph Of Nightfall.jpg',
    '04 - Stealth Expertise.jpg', '05 - Hush.jpg', '05 - Phantom Retreat.jpg', '06 - Dark Whispers.jpg',
    '06 - Mass Disguise.jpg', '07 - Midnight-Touched.jpg', '07 - Vanishing Dodge.jpg', '08 - Shadowhunter.jpg',
    '08 - Spellcharge.jpg', '09 - Night Terror.jpg', '09 - Twilight Toll.jpg', '10 - Eclipse.jpg',
    '10 - Specter Of The Dark.jpg'
];

// Dados completos do SAGE
CARD_STRUCTURE.Domains.SAGE = [
    '01 - Gifted Tracker.jpg', '01 - Nature\'s Tongue.jpg', '01 - Vicious Entangle.jpg', '02 - Conjure Swarm.jpg',
    '02 - Natural Familiar.jpg', '03 - Corrosive Projectile.jpg', '03 - Towering Stalk.jpg', '04 - Death Grip.jpg',
    '04 - Healing Field.jpg', '05 - Thorn Skin.jpg', '05 - Wild Fortress.jpg', '06 - Conjured Steeds.jpg',
    '06 - Forager.jpg', '07 - Sage-Touched.jpg', '07 - Wild Surge.jpg', '08 - Forest Sprites.jpg',
    '08 - Rejuvenation Barrier.jpg', '09 - Fane Of The Wilds.jpg', '09 - Plant Dominion.jpg', '10 - Force Of Nature.jpg',
    '10 - Tempest.jpg'
];

// Dados completos do SPLENDOR
CARD_STRUCTURE.Domains.SPLENDOR = [
    '01 - Bolt Beacon.jpg', '01 - Mending Touch.jpg', '01 - Reassurance.jpg', '02 - Final Words.jpg',
    '02 - Healing Hands.jpg', '03 - Second Wind.jpg', '03 - Voice Of Reason.jpg', '04 - Divination.jpg',
    '04 - Life Ward.jpg', '05 - Shape Material.jpg', '05 - Smite.jpg', '06 - Restoration.jpg',
    '06 - Zone Of Protection.jpg', '07 - Healing Strike.jpg', '07 - Splendor-Touched.jpg', '08 - Shield Aura.jpg',
    '08 - Stunning Sunlight.jpg', '09 - Overwhelming Aura.jpg', '09 - Salvation Beam.jpg', '10 - Invigoration.jpg',
    '10 - Resurrection.jpg'
];

// Dados completos do VALOR
CARD_STRUCTURE.Domains.VALOR = [
    '01 - Bare Bones.jpg', '01 - Forceful Push.jpg', '01 - I Am Your Shield.jpg', '02 - Body Basher.jpg',
    '02 - Bold Presence.jpg', '03 - Critical Inspiration.jpg', '03 - Lean On Me.jpg', '04 - Goad Them On.jpg',
    '04 - Support Tank.jpg', '05 - Armorer.jpg', '05 - Rousing Strike.jpg', '06 - Inevitable.jpg',
    '06 - Rise Up.jpg', '07 - Shrug It Off.jpg', '07 - Valor-Touched.jpg', '08 - Full Surge.jpg',
    '08 - Ground Pound.jpg', '09 - Hold The Line.jpg', '09 - Lead By Example.jpg', '10 - Unbreakable.jpg',
    '10 - Unyielding Armor.jpg'
];

// Daggerheart Character Sheet JavaScript

class DaggerheartCharacter {
    constructor() {
        this.data = {
            // Basic Info
            characterName: '',
            pronouns: '',
            heritage: '',
            selectedClass: '',
            classSubclass: '',
            level: 1,
            
            // Stats
            evasion: 10,
            armor: 10,
            armorBoxes: Array(12).fill(false),
            
            // Attributes
            agility: 0,
            strength: 0,
            finesse: 0,
            instinct: 0,
            presence: 0,
            knowledge: 0,
            
            // Damage thresholds
            minorDamage: '',
            majorDamage: '',
            severeDamage: '',
            
            // HP, Stress, Hope tracking
            hp: Array(12).fill(false),
            stress: Array(12).fill(false),
            hope: Array(6).fill(false),
            
            // Experience bars
            experience: Array(5).fill(0),
            
            // Gold tracking
            goldHandfuls: Array(8).fill(false),
            goldBags: Array(8).fill(false),
            goldChest: Array(1).fill(false),
            
            // Proficiency
            proficiency: Array(5).fill(false),
            
            // Text fields
            hopeFeature: '',
            classFeature: '',
            inventory: '',
            
            // Weapons
            primaryWeapon: {
                name: '',
                trait: '',
                damage: '',
                feature: ''
            },
            secondaryWeapon: {
                name: '',
                trait: '',
                damage: '',
                feature: ''
            },
            
            // Armor
            armor: {
                name: '',
                thresholds: '',
                score: '',
                feature: ''
            },
            
            // Inventory weapons
            inventoryWeapons: [
                {
                    name: '',
                    trait: '',
                    damage: '',
                    feature: '',
                    type: ''
                },
                {
                    name: '',
                    trait: '',
                    damage: '',
                    feature: '',
                    type: ''
                }
            ],
            
            // Cards
            cards: {
                race: null,
                community: null,
                class: [null, null, null],
                domains: [null, null, null, null, null],
                vault: [null, null, null, null, null]
            },
            // Tiers data
            tiers: {
                tier2: {
                    checkedBoxes: [],
                    maxChecks: 6
                },
                tier3: {
                    checkedBoxes: [],
                    maxChecks: 6
                },
                tier4: {
                    checkedBoxes: [],
                    maxChecks: 6
                }
            },
            
            // Contadores para cartas de domínio e cofre
            abilityCounters: Array(10).fill(0)
        };

        this.cardBasePath = "Cards";
        this.currentModalSlot = null;
        this.currentPath = [];
        this.selectedCards = {
            race: new Set(),
            community: new Set(),
            class: new Set(),
            domains: new Set(),
            vault: new Set()
        };
        
        this.init();
    }
    
    init() {
        this.createInteractiveElements();
        this.bindEvents();
        this.bindCardEvents(); // Mover esta linha para depois do bindEvents
        this.loadCharacter();
        this.bindTierEvents(); // Nova linha
        // Adicionar um pequeno delay para garantir que o DOM esteja completamente carregado
        setTimeout(() => {
            this.bindTierEvents();
            this.updateTierCounters();
        }, 100);
    }

    //codigo
    // Método para abrir o modal de seleção de cartas
    openCardSelectionModal(type, index) {
        this.currentModalSlot = { type, index };
        this.currentPath = [];
        
        const modal = document.getElementById('card-modal');
        const modalTitle = document.getElementById('modal-title');
        const breadcrumb = document.getElementById('breadcrumb');
        const cardGrid = document.getElementById('card-grid');
        
        // Definir título baseado no tipo
        const typeNames = {
            race: 'Raça',
            community: 'Comunidade',
            class: 'Classe',
            domain: 'Domínio',
            vault: 'Cofre'
        };
        
        modalTitle.textContent = `Selecionar Carta de ${typeNames[type]}`;
        
        // Inicializar breadcrumb
        this.updateBreadcrumb();
        
        // Carregar conteúdo inicial
        this.loadModalContent(type);
        
        modal.style.display = 'block';
    }

    // Atualizar breadcrumb
    updateBreadcrumb() {
        const breadcrumb = document.getElementById('breadcrumb');
        breadcrumb.innerHTML = '';
        
        // Item inicial
        const homeItem = document.createElement('span');
        homeItem.className = 'breadcrumb-item';
        homeItem.textContent = 'Início';
        homeItem.addEventListener('click', () => {
            this.currentPath = [];
            this.loadModalContent(this.currentModalSlot.type);
        });
        breadcrumb.appendChild(homeItem);
        
        // Itens do caminho atual
        this.currentPath.forEach((segment, index) => {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = ' › ';
            breadcrumb.appendChild(separator);
            
            const pathItem = document.createElement('span');
            pathItem.className = 'breadcrumb-item';
            pathItem.textContent = segment;
            pathItem.addEventListener('click', () => {
                this.currentPath = this.currentPath.slice(0, index + 1);
                this.loadModalContent(this.currentModalSlot.type);
            });
            breadcrumb.appendChild(pathItem);
        });
    }

    // Carregar conteúdo do modal baseado no caminho atual
    async loadModalContent(type) {
        const cardGrid = document.getElementById('card-grid');
        cardGrid.innerHTML = '<div class="card-item">Carregando...</div>';
        
        this.updateBreadcrumb();
        
        try {
            // A leitura do diretório agora é feita a partir da estrutura de dados estática
            const items = this.readStaticDirectory(type);
            this.displayModalItems(items, type);
        } catch (error) {
            console.error('Erro ao carregar cartas estáticas:', error);
            cardGrid.innerHTML = '<div class="card-item">Erro ao carregar cartas</div>';
        }
    }

    readStaticDirectory(type) {
        let items = [];
        let currentData;
        let currentPathString = this.currentPath.join('\\');
        
        switch (type) {
            case 'race':
            case 'community':
                // Para Raça e Comunidade, apenas o nível 0 é suportado
                if (this.currentPath.length === 0) {
                    const key = type === 'race' ? 'Ancestries' : 'Communities';
                    currentData = CARD_STRUCTURE[key];
                    items = currentData.map(name => ({ type: 'image', name }));
                }
                break;
                
            case 'class':
                currentData = CARD_STRUCTURE.Classes;
                
                if (this.currentPath.length === 0) {
                    // Nível de classes: Retorna pastas
                    items = Object.keys(currentData).map(name => ({ type: 'folder', name }));
                } else if (this.currentPath.length === 1) {
                    // Nível de subclasses: Retorna pastas
                    const className = this.currentPath[0];
                    currentData = currentData[className];
                    items = Object.keys(currentData).map(name => ({ type: 'folder', name }));
                } else if (this.currentPath.length === 2) {
                    // Nível de cartas: Retorna imagens
                    const className = this.currentPath[0];
                    const subclassName = this.currentPath[1];
                    currentData = currentData[className][subclassName];
                    items = currentData.map(name => ({ type: 'image', name }));
                }
                break;
                
            case 'domain':
            case 'vault':
                currentData = CARD_STRUCTURE.Domains;
                
                if (this.currentPath.length === 0) {
                    // Nível de domínios: Retorna pastas
                    items = Object.keys(currentData).map(name => ({ type: 'folder', name }));
                } else if (this.currentPath.length === 1) {
                    // Nível de cartas do domínio: Retorna imagens
                    const domainName = this.currentPath[0];
                    currentData = currentData[domainName];
                    items = currentData.map(name => ({ type: 'image', name }));
                }
                break;
        }
        
        // Se for um slot de imagem, adicione a opção de "Remover"
        if (this.currentPath.length === 0 && (type === 'race' || type === 'community')) {
            items.unshift({ type: 'remove', name: 'Remover Carta' });
        }
        
        return items;
    }

    // Simular leitura de diretório (substituir por chamada real se possível)
    async readDirectory(path, type) {
        // Esta é uma simulação - em um ambiente real, você precisaria de um backend
        // ou usar Electron para acessar o sistema de arquivos
        
        const items = [];
        
        // Mapeamento baseado na estrutura fornecida
        if (path.includes('Ancestries')) {
            const ancestries = ['Clank', 'Drakona', 'Dwarf', 'Elf', 'Faerie', 'Faun', 'Firbolg', 
                              'Fungril', 'Galapa', 'Giant', 'Goblin', 'Halfling', 'Human', 
                              'Infernis', 'Katari', 'Orc', 'Ribbet', 'Simiah'];
            items.push(...ancestries.map(name => ({ type: 'image', name: name + '.jpg' })));
        }
        else if (path.includes('Communities')) {
            const communities = ['Highborne', 'Loreborne', 'Orderborne', 'Ridgeborne', 
                               'Seaborne', 'Slyborne', 'Underborne', 'Wanderborne', 'Wildborne'];
            items.push(...communities.map(name => ({ type: 'image', name: name + '.jpg' })));
        }
        else if (path.includes('Classes')) {
            if (this.currentPath.length === 0) {
                // Nível de classes
                const classes = ['Bard', 'Druid', 'Guardian', 'Ranger', 'Rogue', 'Seraph', 'Sorcerer', 'Warrior', 'Wizard'];
                items.push(...classes.map(name => ({ type: 'folder', name })));
            } else if (this.currentPath.length === 1) {
                // Nível de subclasses
                const classSubclasses = {
                    'Bard': ['Troubadour', 'Wordsmith'],
                    'Druid': ['WardenOfRenewal', 'WardenOfTheElements'],
                    'Guardian': ['Stalwart', 'Vengeance'],
                    'Ranger': ['Beastbound', 'Wayfinder'],
                    'Rogue': ['Nightwalker', 'Syndicate'],
                    'Seraph': ['DivineWielder', 'WingedSentinel'],
                    'Sorcerer': ['ElementalOrigin', 'PrimalOrigin'],
                    'Warrior': ['CallOfTheBrave', 'CallOfTheSlayer'],
                    'Wizard': ['SchoolOfKnowledge', 'SchoolOfWar']
                };
                const currentClass = this.currentPath[0];
                if (classSubclasses[currentClass]) {
                    items.push(...classSubclasses[currentClass].map(name => ({ type: 'folder', name })));
                }
            } else if (this.currentPath.length === 2) {
                // Nível de cartas da subclasse
                const cardTypes = ['Foundation', 'Mastery', 'Specialisation'];
                const currentClass = this.currentPath[0];
                const currentSubclass = this.currentPath[1];
                
                items.push(...cardTypes.map(cardType => ({
                    type: 'image',
                    name: `${currentClass}_${currentSubclass}_${cardType}.jpg`
                })));
            }
        }
        else if (path.includes('Domains')) {
            if (this.currentPath.length === 0) {
                // Nível de domínios
                const domains = ['ARCANA', 'BLADE', 'BONE', 'CODEX', 'GRACE', 'MIDNIGHT', 'SAGE', 'SPLENDOR', 'VALOR'];
                items.push(...domains.map(name => ({ type: 'folder', name })));
            } else {
                // Nível de cartas do domínio
                // Simulação - em um ambiente real, você listaria os arquivos reais
                const domainCards = Array.from({length: 10}, (_, i) => i + 1)
                    .flatMap(num => [
                        { type: 'image', name: `${num.toString().padStart(2, '0')} - Carta ${num}A.jpg` },
                        { type: 'image', name: `${num.toString().padStart(2, '0')} - Carta ${num}B.jpg` }
                    ]);
                items.push(...domainCards);
            }
        }
        
        return items;
    }

    // Exibir itens no modal
    displayModalItems(items, type) {
        const cardGrid = document.getElementById('card-grid');
        cardGrid.innerHTML = '';
        
        items.forEach(item => {
            const cardItem = document.createElement('div');
            
            if (item.type === 'remove') {
                cardItem.className = 'card-item folder'; // Usar estilo de pasta para destaque
                cardItem.style.background = '#dc3545';
                cardItem.style.color = 'white';
                cardItem.innerHTML = `
                    <div style="font-size: 3em; margin-bottom: 10px;">🗑️</div>
                    <div class="card-name">${item.name}</div>
                `;
                cardItem.addEventListener('click', () => {
                    this.selectCard(item.name); // Chama a seleção para remover
                });
            } else if (item.type === 'folder') {
                cardItem.className = `card-item ${item.type}`;
                cardItem.innerHTML = `
                    <div class="card-name">${item.name}</div>
                    <div class="current-path">Pasta</div>
                `;
                
                cardItem.addEventListener('click', () => {
                    this.currentPath.push(item.name);
                    this.loadModalContent(type);
                });
            } else { // type === 'image'
                cardItem.className = `card-item ${item.type}`;
                
                // Construir o caminho URL para a miniatura (mesmo que o caminho final)
                const cardPath = this.buildCardPath(item.name);
                
                cardItem.innerHTML = `
                    <img src="${cardPath}" class="card-preview" alt="${item.name.replace('.jpg', '')}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'150\\'><rect width=\\'100\\'% height=\\'100\\'% fill=\\'#ccc\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-size=\\'10\\' fill=\\'#333\\'>${item.name.replace(/(\.jpg|\.png)/i, '')}</text></svg>';">
                    <div class="card-name">${item.name.replace(/(\.jpg|\.png)/i, '')}</div>
                `;
                
                cardItem.addEventListener('click', () => {
                    this.selectCard(item.name);
                });
            }
            
            cardGrid.appendChild(cardItem);
        });
    }

    // Selecionar uma carta
    selectCard(cardName) {
        const { type, index } = this.currentModalSlot;
        
        if (cardName === 'Remover Carta') {
            this.removeCard(document.querySelector(`[data-type="${type}"][data-index="${index}"]`), type, index);
            this.closeCardModal();
            this.showNotification('Carta removida com sucesso!', 'info');
            return;
        }
        
        // O caminho da carta agora é uma URL relativa ao repositório
        const cardPath = this.buildCardPath(cardName);
        
        // Verificar se a carta já foi selecionada (para tipos que não permitem duplicatas)
        if (this.isCardAlreadySelected(type, cardPath)) {
            this.showNotification('Esta carta já foi selecionada!', 'warning');
            return;
        }
        
        // Atualizar o slot com a nova carta
        this.setCardToSlot(type, index, cardPath);
        
        // Adicionar aos selecionados
        this.selectedCards[type].add(cardPath);
        
        // Fechar modal
        this.closeCardModal();
        
        this.showNotification('Carta selecionada com sucesso!', 'success');
    }

    // Construir caminho completo da carta
    buildCardPath(cardName) {
        const type = this.currentModalSlot.type;
        let path = this.cardBasePath; // "Cards"
        
        switch(type) {
            case 'race':
                path += '/Ancestries';
                break;
            case 'community':
                path += '/Communities';
                break;
            case 'class':
                path += '/Classes';
                // Adicionar caminho da classe e subclasse
                if (this.currentPath.length >= 2) {
                    path += '/' + this.currentPath[0] + '/' + this.currentPath[1];
                }
                break;
            case 'domain':
            case 'vault':
                path += '/Domains';
                // Adicionar caminho do domínio
                if (this.currentPath.length >= 1) {
                    path += '/' + this.currentPath[0];
                }
                break;
        }
        
        // Adicionar o nome do arquivo, garantindo que o separador seja '/'
        return path + '/' + cardName;
    }

    // Verificar se a carta já foi selecionada
    isCardAlreadySelected(type, cardPath) {
        // Para raça e comunidade, apenas uma carta pode ser selecionada
        if (type === 'race' || type === 'community') {
            return this.selectedCards[type].size > 0;
        }
        
        return this.selectedCards[type].has(cardPath);
    }

    // Definir carta no slot
    setCardToSlot(type, index, cardPath) {
        const slot = document.querySelector(`[data-type="${type}"][data-index="${index}"]`);
        const fileName = cardPath.split('/').pop().replace('.jpg', '');
        
        // Criar elemento de imagem real (que será carregada do GitHub Pages)
        const img = document.createElement('img');
        img.className = 'card-image';
        img.src = cardPath; // Usa a URL relativa 'Cards/...'
        img.alt = fileName;
        
        // Adicionar double-click para remover
        img.addEventListener('dblclick', () => {
            if (confirm(`Deseja remover a carta ${fileName}?`)) {
                this.removeCard(slot, type, index);
                this.closeCardModal();
            }
        });
        
        const placeholder = slot.querySelector('.card-placeholder');
        placeholder.style.display = 'none';
        
        // Remover imagem existente se houver
        const existingImg = slot.querySelector('.card-image');
        if (existingImg) {
            existingImg.remove();
        }
        
        slot.appendChild(img);
        slot.classList.add('has-image');
        
        // Salvar dados da carta (o cardPath)
        this.saveCardData(type, index, cardPath);
    }

    // Fechar modal
    closeCardModal() {
        const modal = document.getElementById('card-modal');
        modal.style.display = 'none';
        this.currentModalSlot = null;
        this.currentPath = [];
    }

    // Modificar o bindCardEvents para usar o modal
    bindCardEvents() {
        // Race card
    this.bindCardSlotModal('race', 0);
    
    // Community card
    this.bindCardSlotModal('community', 0);
    
    // Class cards
    for (let i = 0; i < 3; i++) {
        this.bindCardSlotModal('class', i);
    }
    
    // Domain cards
    for (let i = 0; i < 5; i++) {
        this.bindCardSlotModal('domain', i);
    }
    
    // Vault cards
    for (let i = 0; i < 5; i++) {
        this.bindCardSlotModal('vault', i);
    }
    
    // Fechar modal
    document.querySelector('.close').addEventListener('click', () => {
        this.closeCardModal();
    });
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('card-modal');
        // Adicionar verificação para garantir que o alvo é o modal, e não um item dentro dele
        if (e.target === modal) { 
            this.closeCardModal();
        }
    });
    }

    bindCardSlotModal(type, index) {
        const slots = document.querySelectorAll(`[data-type="${type}"][data-index="${index}"]`);
    const slot = slots[0];
    
    if (!slot) return;
    
    // 1. Remove qualquer input de arquivo que ainda possa estar anexado.
    const input = slot.querySelector('.card-input');
    if (input) {
        input.remove(); 
    }
    
    // 2. Anexa o evento de clique ao slot principal.
    // O evento de clique precisa ser anexado ao elemento de slot ou container, 
    // e não apenas ao placeholder, para funcionar quando a carta já estiver lá.
    slot.addEventListener('click', (e) => {
        // Ignora cliques em botões de contador (se existirem)
        if (e.target.closest('.card-counter')) return; 
        
        // Abre o modal
        this.openCardSelectionModal(type, index);
    });
    }
    //codigo

    bindTierEvents() {
        const tiers = ['2', '3', '4'];
        
        tiers.forEach(tier => {
            const checkboxes = document.querySelectorAll(`.tier[data-tier="${tier}"] input[type="checkbox"]`);
            
            checkboxes.forEach(checkbox => {
                // Remover event listeners existentes para evitar duplicação
                checkbox.replaceWith(checkbox.cloneNode(true));
            });

            // Re-selecionar os checkboxes após o clone
            const newCheckboxes = document.querySelectorAll(`.tier[data-tier="${tier}"] input[type="checkbox"]`);
            
            newCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    this.handleTierOptionChange(tier, e.target);
                });
            });
        });
    }

    handleTierOptionChange(tier, checkbox) {
        const tierKey = `tier${tier}`;
        const tierData = this.data.tiers[tierKey];
        
        // Obter ID único do checkbox
        const checkboxId = this.getCheckboxId(checkbox);
        
        if (checkbox.checked) {
            // Verificar se já atingiu o limite
            if (tierData.checkedBoxes.length >= tierData.maxChecks) {
                checkbox.checked = false;
                this.showNotification(`Você só pode marcar ${tierData.maxChecks} checkboxes no Tier ${tier}!`, 'warning');
                return;
            }
            
            // Adicionar à lista de checkboxes marcados
            if (!tierData.checkedBoxes.includes(checkboxId)) {
                tierData.checkedBoxes.push(checkboxId);
            }
        } else {
            // Remover da lista de checkboxes marcados
            tierData.checkedBoxes = tierData.checkedBoxes.filter(id => id !== checkboxId);
        }
        
        console.log(`Tier ${tier}: ${tierData.checkedBoxes.length}/${tierData.maxChecks} checkboxes marcados`);
        this.saveCharacter();
        this.updateTierCounters();
    }

    getCheckboxId(checkbox) {
        const tierElement = checkbox.closest('.tier');
        const tier = tierElement.getAttribute('data-tier');
        const index = Array.from(tierElement.querySelectorAll('input[type="checkbox"]')).indexOf(checkbox);
        return `tier${tier}_checkbox${index}`;
    }

    loadTiers() {
        const tiers = ['2', '3', '4'];
        
        tiers.forEach(tier => {
            const tierKey = `tier${tier}`;
            const checkboxes = document.querySelectorAll(`.tier[data-tier="${tier}"] input[type="checkbox"]`);
            
            // Limpar todos os checkboxes primeiro
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Marcar os checkboxes salvos
            this.data.tiers[tierKey].checkedBoxes.forEach(checkboxId => {
                // Encontrar o checkbox pelo ID
                const checkboxes = document.querySelectorAll(`.tier[data-tier="${tier}"] input[type="checkbox"]`);
                const index = parseInt(checkboxId.split('checkbox')[1]);
                
                if (checkboxes[index]) {
                    checkboxes[index].checked = true;
                }
            });
        });
    }

    bindCounterEvents() {
        // Vincular eventos dos botões de contador
        document.querySelectorAll('.counter-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                this.incrementAbilityCounter(index);
            });
        });

        document.querySelectorAll('.counter-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                this.decrementAbilityCounter(index);
            });
        });
    }

    incrementAbilityCounter(index) {
        this.data.abilityCounters[index]++;
        this.updateAbilityCounterDisplay(index);
        this.saveCharacter();
    }

    decrementAbilityCounter(index) {
        if (this.data.abilityCounters[index] > 0) {
            this.data.abilityCounters[index]--;
            this.updateAbilityCounterDisplay(index);
            this.saveCharacter();
        }
    }

    updateAbilityCounterDisplay(index) {
        const counters = document.querySelectorAll('.counter-value');
        if (counters[index]) {
            counters[index].textContent = this.data.abilityCounters[index];
        }
    }
    
    createInteractiveElements() {
        // Create HP boxes
        this.createClickableBoxes('hp-boxes', 12, 'hp-box', (index) => {
            this.data.hp[index] = !this.data.hp[index];
            this.saveCharacter();
        });
        
        // Create Stress boxes
        this.createClickableBoxes('stress-boxes', 12, 'stress-box', (index) => {
            this.data.stress[index] = !this.data.stress[index];
            this.saveCharacter();
        });
        
        // Create Hope diamonds
        this.createClickableBoxes('hope-track', 6, 'hope-diamond', (index) => {
            this.data.hope[index] = !this.data.hope[index];
            this.saveCharacter();
        });
        
        // Create Experience bars
        this.createExperienceBars();
        
        // Create Gold circles
        this.createClickableBoxes('gold-handfuls', 8, 'gold-circle', (index) => {
            this.data.goldHandfuls[index] = !this.data.goldHandfuls[index];
            this.saveCharacter();
        });
        
        this.createClickableBoxes('gold-bags', 8, 'gold-circle', (index) => {
            this.data.goldBags[index] = !this.data.goldBags[index];
            this.saveCharacter();
        });
        
        this.createClickableBoxes('gold-chest', 1, 'gold-circle', (index) => {
            this.data.goldChest[index] = !this.data.goldChest[index];
            this.saveCharacter();
        });
        
        // Create Proficiency circles
        this.createClickableBoxes('proficiency-circles', 5, 'proficiency-circle', (index) => {
            this.data.proficiency[index] = !this.data.proficiency[index];
            this.saveCharacter();
        });
        
        // Create Armor boxes
        this.createClickableBoxes('armor-boxes', 12, 'armor-box', (index) => {
            this.data.armorBoxes[index] = !this.data.armorBoxes[index];
            this.saveCharacter();
        });
    }
    
    createClickableBoxes(containerId, count, className, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const box = document.createElement('div');
            box.className = className;
            box.addEventListener('click', () => {
                callback(i);
                box.classList.toggle('filled');
            });
            container.appendChild(box);
        }
    }
    
    createExperienceBars() {
        const container = document.getElementById('experience-bars');
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 0; i < 5; i++) {
            const bar = document.createElement('div');
            bar.className = 'experience-bar';
            
            const fill = document.createElement('div');
            fill.className = 'experience-fill';
            bar.appendChild(fill);
            
            bar.addEventListener('click', (e) => {
                const rect = bar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percentage = Math.round((clickX / rect.width) * 100);
                this.data.experience[i] = Math.max(0, Math.min(100, percentage));
                fill.style.width = this.data.experience[i] + '%';
                this.saveCharacter();
            });
            
            container.appendChild(bar);
        }
    }
    
    bindEvents() {
        // Basic info fields
        const basicFields = [
            'character-name', 'pronouns', 'heritage', 'class-subclass',
            'evasion', 'armor', 'agility', 'strength', 'finesse', 
            'instinct', 'presence', 'knowledge', 'minor-damage', 
            'major-damage', 'severe-damage', 'hope-feature', 
            'class-feature', 'inventory'
        ];
        
        basicFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', () => {
                    this.updateDataFromField(fieldId, field.value);
                    this.saveCharacter();
                });
            }
        });
        
        // Class selection
        const classSelect = document.getElementById('class-select');
        if (classSelect) {
            classSelect.addEventListener('change', () => {
                this.data.selectedClass = classSelect.value;
                this.updateAvailableDomains();
                this.saveCharacter();
            });
        }
        
        // Weapon fields
        this.bindWeaponFields('primary', 'primaryWeapon');
        this.bindWeaponFields('secondary', 'secondaryWeapon');
        
        // Armor fields
        this.bindArmorFields();
        
        // Inventory weapon fields
        this.bindInventoryWeaponFields();
        
        // Control buttons
        document.getElementById('save-character').addEventListener('click', () => {
            this.saveCharacter();
            this.showNotification('Personagem salvo com sucesso!', 'success');
        });
        
        document.getElementById('load-character').addEventListener('click', () => {
            this.loadCharacter();
            this.showNotification('Personagem carregado com sucesso!', 'success');
        });
        
        document.getElementById('clear-character').addEventListener('click', () => {
            if (confirm('Tem certeza que deseja limpar toda a ficha?')) {
                this.clearCharacter();
                this.showNotification('Ficha limpa com sucesso!', 'info');
            }
        });

        // Tier events
        this.bindTierEvents();
        
        // Card upload events
        this.bindCardEvents();

        // Vincular eventos dos contadores
        this.bindCounterEvents();
        
        // Drag and drop events
        this.bindDragAndDropEvents();
    }
    
    updateAvailableDomains() {
        const domainsDisplay = document.getElementById('available-domains');
        if (!domainsDisplay) return;
        
        const domainsMap = {
            'Bard': 'Codex & Grace',
            'Druid': 'Arcana & Sage',
            'Guardian': 'Blade & Valor',
            'Ranger': 'Bone & Sage',
            'Rogue': 'Grace & Midnight',
            'Seraph': 'Splendor & Valor',
            'Sorcerer': 'Arcana & Midnight',
            'Warrior': 'Blade & Bone',
            'Wizard': 'Codex & Splendor'
        };
        
        if (this.data.selectedClass && domainsMap[this.data.selectedClass]) {
            domainsDisplay.textContent = domainsMap[this.data.selectedClass];
        } else {
            domainsDisplay.textContent = '';
        }
    }
    
    bindWeaponFields(prefix, dataKey) {
        const fields = ['name', 'trait', 'damage', 'feature'];
        fields.forEach(field => {
            const element = document.getElementById(`${prefix}-weapon-${field}`);
            if (element) {
                element.addEventListener('input', () => {
                    this.data[dataKey][field] = element.value;
                    this.saveCharacter();
                });
            }
        });
    }
    
    bindArmorFields() {
        const fields = ['name', 'thresholds', 'score', 'feature'];
        fields.forEach(field => {
            const element = document.getElementById(`armor-${field}`);
            if (element) {
                element.addEventListener('input', () => {
                    this.data.armor[field] = element.value;
                    this.saveCharacter();
                });
            }
        });
    }
    
    bindInventoryWeaponFields() {
        for (let i = 0; i < 2; i++) {
            const fields = ['name', 'trait', 'damage', 'feature'];
            fields.forEach(field => {
                const element = document.getElementById(`inv-weapon-${i + 1}-${field}`);
                if (element) {
                    element.addEventListener('input', () => {
                        this.data.inventoryWeapons[i][field] = element.value;
                        this.saveCharacter();
                    });
                }
            });
            
            // Weapon type radio buttons
            const primaryRadio = document.getElementById(`inv-weapon-${i + 1}-primary`);
            const secondaryRadio = document.getElementById(`inv-weapon-${i + 1}-secondary`);
            
            if (primaryRadio) {
                primaryRadio.addEventListener('change', () => {
                    if (primaryRadio.checked) {
                        this.data.inventoryWeapons[i].type = 'primary';
                        this.saveCharacter();
                    }
                });
            }
            
            if (secondaryRadio) {
                secondaryRadio.addEventListener('change', () => {
                    if (secondaryRadio.checked) {
                        this.data.inventoryWeapons[i].type = 'secondary';
                        this.saveCharacter();
                    }
                });
            }
        }
    }
    
    bindCardEvents() {
        // Race card
        this.bindCardSlot('race', 0);
        
        // Community card
        this.bindCardSlot('community', 0);
        
        // Class cards
        for (let i = 0; i < 3; i++) {
            this.bindCardSlot('class', i);
        }
        
        // Domain cards
        for (let i = 0; i < 5; i++) {
            this.bindCardSlot('domain', i);
        }
        
        // Vault cards
        for (let i = 0; i < 5; i++) {
            this.bindCardSlot('vault', i);
        }
    }
    /*
    bindCardSlot(type, index) {
        const slots = document.querySelectorAll(`[data-type="${type}"][data-index="${index}"]`);
        const slot = slots[0];
        
        if (!slot) return;
        
        const input = slot.querySelector('.card-input');
        const placeholder = slot.querySelector('.card-placeholder');
        
        if (input && placeholder) {
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imageData = e.target.result;
                        this.setCardImage(slot, imageData, type, index);
                        this.saveCardData(type, index, imageData);
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Click to upload
            placeholder.addEventListener('click', () => {
                input.click();
            });
        }
    }*/
    
    bindDragAndDropEvents() {
        const containers = document.querySelectorAll('.card-slot-container[draggable="true"]');
        
        containers.forEach(container => {
            container.addEventListener('dragstart', (e) => {
                // Armazenar dados do container de origem
                const domainIndex = container.getAttribute('data-domain-index');
                const vaultIndex = container.getAttribute('data-vault-index');
                
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    domainIndex: domainIndex,
                    vaultIndex: vaultIndex
                }));
                
                container.classList.add('dragging');
            });
            
            container.addEventListener('dragend', (e) => {
                containers.forEach(c => c.classList.remove('dragging', 'drop-zone'));
            });
            
            container.addEventListener('dragover', (e) => {
                e.preventDefault();
                container.classList.add('drop-zone');
            });
            
            container.addEventListener('dragleave', (e) => {
                container.classList.remove('drop-zone');
            });
            
            container.addEventListener('drop', (e) => {
                e.preventDefault();
                container.classList.remove('drop-zone');
                
                // Obter dados do container de origem
                const sourceData = JSON.parse(e.dataTransfer.getData('text/plain'));
                
                // Obter dados do container de destino
                const targetDomainIndex = container.getAttribute('data-domain-index');
                const targetVaultIndex = container.getAttribute('data-vault-index');
                
                // Verificar se é uma troca válida (entre domínio e cofre)
                if ((sourceData.domainIndex !== null && targetVaultIndex !== null) || 
                    (sourceData.vaultIndex !== null && targetDomainIndex !== null)) {
                    this.swapCards(sourceData, {
                        domainIndex: targetDomainIndex,
                        vaultIndex: targetVaultIndex
                    });
                }
            });
        });
    }
    
    swapCards(source, target) {
        // Determinar tipos e índices
        const sourceType = source.domainIndex !== null ? 'domains' : 'vault';
        const targetType = target.domainIndex !== null ? 'domains' : 'vault';
        
        const sourceIndex = source.domainIndex !== null ? parseInt(source.domainIndex) : parseInt(source.vaultIndex);
        const targetIndex = target.domainIndex !== null ? parseInt(target.domainIndex) : parseInt(target.vaultIndex);
        
        // Trocar as cartas
        const tempCard = this.data.cards[sourceType][sourceIndex];
        this.data.cards[sourceType][sourceIndex] = this.data.cards[targetType][targetIndex];
        this.data.cards[targetType][targetIndex] = tempCard;
        
        // Calcular índices dos contadores
        const sourceCounterIndex = sourceType === 'domains' ? sourceIndex : sourceIndex + 5;
        const targetCounterIndex = targetType === 'domains' ? targetIndex : targetIndex + 5;
        
        // Trocar os contadores
        const tempCounter = this.data.abilityCounters[sourceCounterIndex];
        this.data.abilityCounters[sourceCounterIndex] = this.data.abilityCounters[targetCounterIndex];
        this.data.abilityCounters[targetCounterIndex] = tempCounter;
        
        // Atualizar a exibição
        this.updateCardDisplays();
        this.updateAllCounterDisplays();
        this.saveCharacter();
        
        this.showNotification('Cartas trocadas com sucesso!', 'success');
    }
    
    setCardImage(slot, imageData, type, index) {
        const placeholder = slot.querySelector('.card-placeholder');
        
        // Remove existing image if any
        const existingImg = slot.querySelector('.card-image');
        if (existingImg) {
            existingImg.remove();
        }
        
        // Remove existing name display if any
        const existingName = slot.querySelector('.card-name-display');
        if (existingName) {
            existingName.remove();
        }
        
        // Create new image
        const img = document.createElement('img');
        img.src = imageData;
        img.className = 'card-image';
        img.alt = `${type} card ${index + 1}`;
        
        // Add remove functionality
        img.addEventListener('dblclick', () => {
            if (confirm('Deseja remover esta carta?')) {
                this.removeCard(slot, type, index);
            }
        });
        
        slot.appendChild(img);
        slot.classList.add('has-image');
        placeholder.style.display = 'none';
    }
    
    removeCard(slot, type, index) {
        const img = slot.querySelector('.card-image');
        const placeholder = slot.querySelector('.card-placeholder');
        
        // Remover do selectedCards
        let cardPath;
        if (type === 'race' || type === 'community') {
            cardPath = this.data.cards[type];
            this.selectedCards[type].clear();
        } else if (type === 'class') {
            cardPath = this.data.cards.class[index];
            this.selectedCards.class.delete(cardPath);
        } else if (type === 'domain') {
            cardPath = this.data.cards.domains[index];
            this.selectedCards.domains.delete(cardPath);
        } else if (type === 'vault') {
            cardPath = this.data.cards.vault[index];
            this.selectedCards.vault.delete(cardPath);
        }
        
        if (img) {
            img.remove();
        }
        
        slot.classList.remove('has-image');
        if (placeholder) {
            placeholder.style.display = 'flex';
        }
        
        this.saveCardData(type, index, null);
    }
    
    saveCardData(type, index, imageData) {
        if (type === 'race' || type === 'community') {
            this.data.cards[type] = imageData;
        } else if (type === 'class') {
            this.data.cards.class[index] = imageData;
        } else if (type === 'domain') {
            this.data.cards.domains[index] = imageData;
        } else if (type === 'vault') {
            this.data.cards.vault[index] = imageData;
        }
        this.saveCharacter();
    }
    
    updateDataFromField(fieldId, value) {
        const fieldMap = {
            'character-name': 'characterName',
            'pronouns': 'pronouns',
            'heritage': 'heritage',
            'class-subclass': 'classSubclass',
            'evasion': 'evasion',
            'armor': 'armor',
            'agility': 'agility',
            'strength': 'strength',
            'finesse': 'finesse',
            'instinct': 'instinct',
            'presence': 'presence',
            'knowledge': 'knowledge',
            'minor-damage': 'minorDamage',
            'major-damage': 'majorDamage',
            'severe-damage': 'severeDamage',
            'hope-feature': 'hopeFeature',
            'class-feature': 'classFeature',
            'inventory': 'inventory'
        };
        
        const dataKey = fieldMap[fieldId];
        if (dataKey) {
            // Convert to number for numeric fields
            if (['evasion', 'armor', 'agility', 'strength', 'finesse', 'instinct', 'presence', 'knowledge'].includes(dataKey)) {
                this.data[dataKey] = parseInt(value) || 0;
            } else {
                this.data[dataKey] = value;
            }
        }
    }
    
    saveCharacter() {
        try {
            localStorage.setItem('daggerheart-character', JSON.stringify(this.data));
        } catch (error) {
            console.error('Erro ao salvar personagem:', error);
            this.showNotification('Erro ao salvar personagem!', 'error');
        }
    }
    
    loadCharacter() {
        try {
            const saved = localStorage.getItem('daggerheart-character');
            if (saved) {
                this.data = { ...this.data, ...JSON.parse(saved) };
                this.populateFields();
                this.updateInteractiveElements();
                this.loadCards();
                this.loadAbilityCounters();
                this.updateAvailableDomains();
                this.loadTiers(); // Nova linha

                // Recarregar cartas selecionadas
                this.loadSelectedCards();
            }
        } catch (error) {
            console.error('Erro ao carregar personagem:', error);
            this.showNotification('Erro ao carregar personagem!', 'error');
        }
        this.updateTierCounters();
    }

    loadSelectedCards() {
        // Recarregar o conjunto de cartas selecionadas
        this.selectedCards = {
            race: new Set(),
            community: new Set(),
            class: new Set(),
            domains: new Set(),
            vault: new Set()
        };
        
        // Popular com as cartas já salvas
        if (this.data.cards.race) {
            this.selectedCards.race.add(this.data.cards.race);
        }
        if (this.data.cards.community) {
            this.selectedCards.community.add(this.data.cards.community);
        }
        
        this.data.cards.class.forEach(card => {
            if (card) this.selectedCards.class.add(card);
        });
        
        this.data.cards.domains.forEach(card => {
            if (card) this.selectedCards.domains.add(card);
        });
        
        this.data.cards.vault.forEach(card => {
            if (card) this.selectedCards.vault.add(card);
        });
    }

    loadAbilityCounters() {
        for (let i = 0; i < 10; i++) {
            this.updateAbilityCounterDisplay(i);
        }
    }
    
    populateFields() {
        // Basic fields
        const fieldMap = {
            'character-name': 'characterName',
            'pronouns': 'pronouns',
            'heritage': 'heritage',
            'class-subclass': 'classSubclass',
            'evasion': 'evasion',
            'armor': 'armor',
            'agility': 'agility',
            'strength': 'strength',
            'finesse': 'finesse',
            'instinct': 'instinct',
            'presence': 'presence',
            'knowledge': 'knowledge',
            'minor-damage': 'minorDamage',
            'major-damage': 'majorDamage',
            'severe-damage': 'severeDamage',
            'hope-feature': 'hopeFeature',
            'class-feature': 'classFeature',
            'inventory': 'inventory'
        };
        
        Object.entries(fieldMap).forEach(([fieldId, dataKey]) => {
            const field = document.getElementById(fieldId);
            if (field && this.data[dataKey] !== undefined) {
                field.value = this.data[dataKey];
            }
        });
        
        // Class selection
        const classSelect = document.getElementById('class-select');
        if (classSelect && this.data.selectedClass) {
            classSelect.value = this.data.selectedClass;
        }
        
        // Level display
        const levelDisplay = document.getElementById('level-display');
        if (levelDisplay) {
            levelDisplay.textContent = this.data.level;
        }
        
        // Weapon fields
        this.populateWeaponFields('primary', 'primaryWeapon');
        this.populateWeaponFields('secondary', 'secondaryWeapon');
        
        // Armor fields
        this.populateArmorFields();
        
        // Inventory weapon fields
        this.populateInventoryWeaponFields();
    }
    
    populateWeaponFields(prefix, dataKey) {
        const fields = ['name', 'trait', 'damage', 'feature'];
        fields.forEach(field => {
            const element = document.getElementById(`${prefix}-weapon-${field}`);
            if (element && this.data[dataKey] && this.data[dataKey][field] !== undefined) {
                element.value = this.data[dataKey][field];
            }
        });
    }
    
    populateArmorFields() {
        const fields = ['name', 'thresholds', 'score', 'feature'];
        fields.forEach(field => {
            const element = document.getElementById(`armor-${field}`);
            if (element && this.data.armor && this.data.armor[field] !== undefined) {
                element.value = this.data.armor[field];
            }
        });
    }
    
    populateInventoryWeaponFields() {
        for (let i = 0; i < 2; i++) {
            const weapon = this.data.inventoryWeapons[i];
            if (!weapon) continue;
            
            const fields = ['name', 'trait', 'damage', 'feature'];
            fields.forEach(field => {
                const element = document.getElementById(`inv-weapon-${i + 1}-${field}`);
                if (element && weapon[field] !== undefined) {
                    element.value = weapon[field];
                }
            });
            
            // Set weapon type radio
            if (weapon.type) {
                const radio = document.getElementById(`inv-weapon-${i + 1}-${weapon.type}`);
                if (radio) {
                    radio.checked = true;
                }
            }
        }
    }
    
    updateInteractiveElements() {
        // Update HP boxes
        this.updateBoxes('hp-boxes', this.data.hp, 'hp-box');
        
        // Update Stress boxes
        this.updateBoxes('stress-boxes', this.data.stress, 'stress-box');
        
        // Update Hope diamonds
        this.updateBoxes('hope-track', this.data.hope, 'hope-diamond');
        
        // Update Experience bars
        this.updateExperienceBars();
        
        // Update Gold circles
        this.updateBoxes('gold-handfuls', this.data.goldHandfuls, 'gold-circle');
        this.updateBoxes('gold-bags', this.data.goldBags, 'gold-circle');
        this.updateBoxes('gold-chest', this.data.goldChest, 'gold-circle');
        
        // Update Proficiency circles
        this.updateBoxes('proficiency-circles', this.data.proficiency, 'proficiency-circle');
        
        // Update Armor boxes
        this.updateBoxes('armor-boxes', this.data.armorBoxes, 'armor-box');
    }
    
    updateBoxes(containerId, dataArray, className) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const boxes = container.querySelectorAll(`.${className}`);
        boxes.forEach((box, index) => {
            if (dataArray[index]) {
                box.classList.add('filled');
            } else {
                box.classList.remove('filled');
            }
        });
    }
    
    updateExperienceBars() {
        const container = document.getElementById('experience-bars');
        if (!container) return;
        
        const bars = container.querySelectorAll('.experience-fill');
        bars.forEach((fill, index) => {
            if (this.data.experience[index] !== undefined) {
                fill.style.width = this.data.experience[index] + '%';
            }
        });
    }
    
    loadCards() {
        // Load race card
        if (this.data.cards.race) {
            const raceSlot = document.querySelector('[data-type="race"][data-index="0"]');
            if (raceSlot) {
                this.setCardImage(raceSlot, this.data.cards.race, 'race', 0);
            }
        }
        
        // Load community card
        if (this.data.cards.community) {
            const communitySlot = document.querySelector('[data-type="community"][data-index="0"]');
            if (communitySlot) {
                this.setCardImage(communitySlot, this.data.cards.community, 'community', 0);
            }
        }
        
        // Load class cards
        this.data.cards.class.forEach((cardData, index) => {
            if (cardData) {
                const classSlot = document.querySelector(`[data-type="class"][data-index="${index}"]`);
                if (classSlot) {
                    this.setCardImage(classSlot, cardData, 'class', index);
                }
            }
        });
        
        // Load domain cards
        this.data.cards.domains.forEach((cardData, index) => {
            if (cardData) {
                const domainSlot = document.querySelector(`[data-type="domain"][data-index="${index}"]`);
                if (domainSlot) {
                    this.setCardImage(domainSlot, cardData, 'domain', index);
                }
            }
        });
        
        // Load vault cards
        this.data.cards.vault.forEach((cardData, index) => {
            if (cardData) {
                const vaultSlot = document.querySelector(`[data-type="vault"][data-index="${index}"]`);
                if (vaultSlot) {
                    this.setCardImage(vaultSlot, cardData, 'vault', index);
                }
            }
        });
    }
    
    updateCardDisplays() {
        // Clear all card images first
        document.querySelectorAll('.card-slot').forEach(slot => {
            const img = slot.querySelector('.card-image');
            const placeholder = slot.querySelector('.card-placeholder');
            
            if (img) {
                img.remove();
            }
            
            slot.classList.remove('has-image');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
        
        // Then reload all cards
        this.loadCards();
    }
    
    updateAllCounterDisplays() {
        for (let i = 0; i < 10; i++) {
            this.updateAbilityCounterDisplay(i);
        }
    }
    
    clearCharacter() {
        // Reset data to defaults
        this.data = {
            characterName: '',
            pronouns: '',
            heritage: '',
            selectedClass: '',
            classSubclass: '',
            level: 1,
            evasion: 10,
            armor: 10,
            armorBoxes: Array(12).fill(false),
            agility: 0,
            strength: 0,
            finesse: 0,
            instinct: 0,
            presence: 0,
            knowledge: 0,
            minorDamage: '',
            majorDamage: '',
            severeDamage: '',
            hp: Array(12).fill(false),
            stress: Array(12).fill(false),
            hope: Array(6).fill(false),
            experience: Array(5).fill(0),
            goldHandfuls: Array(8).fill(false),
            goldBags: Array(8).fill(false),
            goldChest: Array(1).fill(false),
            proficiency: Array(5).fill(false),
            hopeFeature: '',
            classFeature: '',
            inventory: '',
            primaryWeapon: { name: '', trait: '', damage: '', feature: '' },
            secondaryWeapon: { name: '', trait: '', damage: '', feature: '' },
            armor: { name: '', thresholds: '', score: '', feature: '' },
            inventoryWeapons: [
                { name: '', trait: '', damage: '', feature: '', type: '' },
                { name: '', trait: '', damage: '', feature: '', type: '' }
            ],
            cards: {
                race: null,
                community: null,
                class: [null, null, null],
                domains: [null, null, null, null, null],
                vault: [null, null, null, null, null]
            },
            // Tiers data
            tiers: {
                tier2: {
                    checkedBoxes: [],
                    maxChecks: 6
                },
                tier3: {
                    checkedBoxes: [],
                    maxChecks: 6
                },
                tier4: {
                    checkedBoxes: [],
                    maxChecks: 6
                }
            },
            abilityCounters: Array(10).fill(0)
        };

        // Reset displays
        this.updateAllCounterDisplays();

        // Limpar checkboxes dos tiers
        document.querySelectorAll('.tier input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear all form fields
        document.querySelectorAll('input, textarea, select').forEach(field => {
            if (field.type === 'radio') {
                field.checked = false;
            } else if (field.type === 'select-one') {
                field.selectedIndex = 0;
            } else {
                field.value = '';
            }
        });
        
        // Clear all cards
        document.querySelectorAll('.card-slot').forEach(slot => {
            const img = slot.querySelector('.card-image');
            const placeholder = slot.querySelector('.card-placeholder');
            
            if (img) {
                img.remove();
            }
            
            slot.classList.remove('has-image');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
        
        // Reset interactive elements
        this.updateInteractiveElements();
        this.updateAvailableDomains();
        this.updateTierCounters();
        
        // Clear localStorage
        localStorage.removeItem('daggerheart-character');
    }

    // Adicionar este método ao script.js
    updateTierCounters() {
        const tiers = ['2', '3', '4'];
        
        tiers.forEach(tier => {
            const tierKey = `tier${tier}`;
            const counterElement = document.querySelector(`.tier[data-tier="${tier}"] .tier-counter .current`);
            
            if (counterElement) {
                const currentCount = this.data.tiers[tierKey].checkedBoxes.length;
                counterElement.textContent = currentCount;
                
                // Mudar cor se estiver perto do limite
                if (currentCount >= this.data.tiers[tierKey].maxChecks) {
                    counterElement.style.color = '#dc3545';
                } else {
                    counterElement.style.color = '#28a745';
                }
            }
        });
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '5px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: '10000',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });
        
        // Set background color based on type
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            info: '#007bff',
            warning: '#ffc107'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the character sheet when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.character = new DaggerheartCharacter();
    
    // Add smooth scrolling to cards section
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
        // Add a scroll indicator or button if needed
        const scrollToCards = () => {
            cardsSection.scrollIntoView({ behavior: 'smooth' });
        };
        
        // You can add a button or trigger this on scroll
        window.scrollToCards = scrollToCards;
    }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DaggerheartCharacter;
}
