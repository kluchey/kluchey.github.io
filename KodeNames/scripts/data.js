var data = ["Pearl Harbour", "War Economy", "Hitler", "Churchill", "Holocaust", "Fascism", "Dictatorship", "Weimar Republic", "Third Reich", "Zyklon B", "Stalin", "D-Day", "Code Breakers", "Kristallnacht", "Judaism", "Kamikazi", "Concentration Camps", "Blitzkrieg", "Allied Powers", "Axis Powers", "Sturmabteilung", "Schutzstaffel", "National Socialists", "Fat Boy", "Nagasaki", "Little Boy", "Hiroshima"];
var movieData = ["The Shawshank Redemption",
	"The Godfather",
	"The Godfather, Part II",
	"The Dark Knight",
	"Pulp Fiction",
	"The Good, The Bad and The Ugly",
	"12 Angry Men",
	"Schindler's List",
	"The Lord of the Rings: The Return of the King",
	"Fight Club",
	"The Fellowship Of The Ring",
	"Star Wars: Episode V - The Empire Strikes Back",
	"Inception",
	"Forrest Gump",
	"One Flew Over the Cuckoo's Nest",
	"The Lord of the Rings: The Two Towers",
	"Interstellar",
	"Goodfellas",
	"The Matrix",
	"Star Wars: Episode IV - A New Hope",
	"Seven Samurai",
	"City of God",
	"Se7en",
	"The Usual Suspects",
	"The Silence of the Lambs",
	"It's a Wonderful Life",
	"Once Upon a Time in the West",
	"Leon: The Professional",
	"Life Is Beautiful",
	"Casablanca",
	"Raiders of the Lost Ark",
	"American History X",
	"Saving Private Ryan",
	"City Lights",
	"Psycho",
	"Spirited Away",
	"Rear Window",
	"Intouchables",
	"Modern Times",
	"Whiplash",
	"Terminator 2: Judgment Day",
	"Memento",
	"The Green Mile",
	"The Pianist",
	"The Departed",
	"Sunset Boulevard",
	"Apocalypse Now",
	"Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
	"Gladiator",
	"Back to the Future",
	"Alien",
	"The Prestige",
	"The Great Dictator",
	"The Lives of Others",
	"The Lion King",
	"Django Unchained",
	"The Dark Knight Rises",
	"Cinema Paradiso",
	"The Shining",
	"Paths of Glory",
	"American Beauty",
	"Wall-E",
	"North by Northwest",
	"Aliens",
	"Citizen Kane",
	"Vertigo",
	"Amelie",
	"M",
	"Das Boot",
	"Grave of the Fireflies",
	"Toy Story 3",
	"Oldboy",
	"Princess Mononoke",
	"Star Wars: Episode VI - Return of the Jedi",
	"Once Upon a Time in America",
	"A Clockwork Orange",
	"Reservoir Dogs",
	"Taxi Driver",
	"Double Indemnity",
	"Braveheart",
	"Requiem for a Dream",
	"To Kill a Mockingbird",
	"Lawrence of Arabia",
	"Witness for the Prosecution",
	"Eternal Sunshine of the Spotless Mind",
	"Full Metal Jacket",
	"Singin' in the Rain",
	"The Sting",
	"Bicycle Thieves",
	"Amadeus",
	"Monty Python and the Holy Grail",
	"Snatch",
	"Rashomon",
	"L.A. Confidential",
	"For a Few Dollars More",
	"2001: A Space Odyssey",
	"The Kid",
	"All About Eve",
	"The Apartment",
	"Some Like It Hot",
	"Inglourious Basterds",
	"Birdman",
	"Indiana Jones and the Last Crusade",
	"The Treasure of the Sierra Madre",
	"The Third Man",
	"A Seperation",
	"Yojimbo",
	"Toy Story",
	"Batman Begins",
	"Metropolis",
	"Like Stars on Earth",
	"Unforgiven",
	"Scarface",
	"Raging Bull",
	"Up",
	"Chinatown",
	"3 Idiots",
	"The Great Escape",
	"Downfall",
	"Boyhood",
	"Die Hard",
	"On the Waterfront",
	"Pan's Labyrinth",
	"Mr. Smith Goes to Washington",
	"The Hunt",
	"Heat",
	"CM101MMXI Fundamentals",
	"Gone Girl",
	"The Bridge on the River Kwai",
	"Good Will Hunting",
	"The Bandit",
	"My Neighbor Totoro",
	"The Seventh Seal",
	"Ikiru",
	"The Gold Rush",
	"The Elephant Man",
	"The Wolf of Wall Street",
	"Ran",
	"Wild Strawberries",
	"Blade Runner",
	"The General",
	"Lock, Stock and Two Smoking Barrels",
	"The Secret in Their Eyes",
	"Casino",
	"Gran Torino",
	"The Big Lebowski",
	"Warrior",
	"Rebecca",
	"V for Vendetta",
	"Howl's Moving Castle",
	"Paint It Yellow",
	"The Deer Hunter",
	"It Happened One Night",
	"Cool Hand Luke",
	"How to Train Your Dragon",
	"Fargo",
	"Judgment at Nuremberg",
	"Trainspotting",
	"Gone with the Wind",
	"Rush",
	"Into the Wild",
	"The Maltese Falcon",
	"A Beautiful Mind",
	"Dial M for Murder",
	"The Sixth Sense",
	"The Wages of Fear",
	"Hotel Rwanda",
	"The Thing",
	"Finding Nemo",
	"Mary and Max",
	"No Country for Old Men",
	"Butch Cassidy and the Sundance Kid",
	"Kill Bill: Vol. 1",
	"Platoon",
	"Life of Brian",
	"Incendies",
	"Guardians of the Galaxy",
	"Dil Chahta Hai",
	"12 Years a Slave",
	"Network",
	"Touch of Evil",
	"Diabolique (1955)",
	"Annie Hall",
	"The Princess Bride",
	"There Will Be Blood",
	"The Grand Budapest Hotel",
	"Stand by Me",
	"Sin City",
	"Ben-Hur",
	"The 400 Blows",
	"Amores Perros",
	"In the Name of the Father",
	"Million Dollar Baby",
	"The Grapes of Wrath",
	"The Wizard of Oz",
	"Hachi: A Dog's Tale",
	"Persona",
	"The Best Years of Our Lives",
	"The Avengers",
	"Nausicaä of the Valley of the Wind",
	"The Bourne Ultimatum",
	"Gandhi",
	"The Imitation Game",
	"Donnie Darko",
	"8 1/2",
	"Gangs of Wasseypur",
	"Strangers on a Train",
	"Infernal Affairs",
	"Stalker",
	"12 Monkeys",
	"Jaws",
	"Shutter Island",
	"X-Men: Days of Future Past",
	"High Noon",
	"Lagaan: Once Upon a Time in India",
	"Notorious",
	"The Terminator",
	"Before Sunrise",
	"The King's Speech",
	"Groundhog Day",
	"Harry Potter and the Deathly Hallows: Part 2",
	"Fanny and Alexander",
	"Ip Man",
	"The Battle of Algiers",
	"Rocky",
	"Dog Day Afternoon",
	"The Night of the Hunter",
	"Monsters, Inc.",
	"La Haine",
	"Memories of Murder",
	"La Strada",
	"Pirates of the Caribbean: The Curse of the Black Pearl",
	"Who's Afraid of Virginia Woolf?",
	"Barry Lyndon",
	"A Fistful of Dollars",
	"Castle in the Sky",
	"The Truman Show",
	"The Big Sleep",
	"The Help",
	"Jurassic Park",
	"Roman Holiday",
	"The Graduate",
	"The Hustler",
	"Papillon",
	"Beauty and the Beast",
	"In the Mood for Love",
	"The Celebration",
	"Prisoners",
	"Rope",
	"Swades: We, the People"
];

var defaultData = ["Hitler", "War Economy", "Pearl Harbour", "Churchill", "Holocaust", "Fascism", "Dictatorship", "Weimar Republic", "Third Reich", "Zyklon B", "Stalin", "D-Day", "Code Breakers", "Kristallnacht", "Judaism", "Kamikazi", "Concentration Camps", "Blitzkrieg", "Allied Powers", "Axis Powers", "Sturmabteilung", "Schutzstaffel", "National Socialists", "Fat Boy", "Nagasaki", "Little Boy", "Hiroshima"];

var spanishData = [
	"aguila",
	"aguja",
	"agujero",
	"aire",
	"Alemania",
	"algodun",
	"alianza",
	"Alpes",
	"ambulancia",
	"America",
	"angel",
	"anillo",
	"Antartida",
	"antorcha",
	"araoa",
	"archivo",
	"arco",
	"Argentina",
	"articulo",
	"as",
	"Atlantida",
	"azteca",
	"baile",
	"bala",
	"ballena",
	"banco",
	"banda",
	"baoo",
	"barco",
	"barra",
	"bateria",
	"Berlin",
	"Bermudas",
	"bicho",
	"blanco",
	"bloque",
	"boca",
	"bola",
	"bolsa",
	"bomba",
	"bosque",
	"bota",
	"botella",
	"botun",
	"brazo",
	"bruja",
	"caballero",
	"caballo",
	"cabeza",
	"cabina",
	"cabo",
	"cactus",
	"cadena",
	"caja",
	"cama",
	"camara",
	"cambio",
	"campana",
	"campo",
	"canal",
	"canguro",
	"canto",
	"caoa",
	"capa",
	"capital",
	"caqui",
	"cara",
	"caravana",
	"carga",
	"carrera",
	"carro",
	"carta",
	"casco",
	"casino",
	"caza",
	"cementerio",
	"centauro",
	"centro",
	"Cervantes",
	"checo",
	"chocolate",
	"choque",
	"chuleta",
	"cientifico",
	"cinta",
	"cinturun",
	"circulo",
	"clase",
	"coche",
	"cocinero",
	"coco",
	"cudigo",
	"cola",
	"culera",
	"columna",
	"cometa",
	"compas",
	"concierto",
	"conejo",
	"contrabandista",
	"copa",
	"corazun",
	"corneta",
	"corona",
	"corredor",
	"corriente",
	"corte",
	"cresta",
	"cromo",
	"cruz",
	"cuadro",
	"cuarto",
	"cubierta",
	"cubo",
	"cuchillo",
	"cuello",
	"cuerda",
	"cuerno",
	"cura",
	"dama",
	"delta",
	"destino",
	"dia",
	"diamante",
	"diana",
	"diario",
	"diente",
	"dinosaurio",
	"disco",
	"don",
	"dragun",
	"duende",
	"Egipto",
	"embajada",
	"emperador",
	"enano",
	"enfermedad",
	"enfermera",
	"enlace",
	"escorpiun",
	"espacio",
	"espia",
	"estaciun",
	"estadio",
	"estado",
	"estrella",
	"estudio",
	"etiqueta",
	"Europa",
	"extraterrestre",
	"falda",
	"fantasma",
	"faro",
	"ficha",
	"fiesta",
	"figura",
	"flauta",
	"flecha",
	"foso",
	"Francia",
	"frente",
	"fuego",
	"fuente",
	"fuerza",
	"furgoneta",
	"gancho",
	"gato",
	"genio",
	"gigante",
	"golfo",
	"golondrina",
	"golpe",
	"goma",
	"gundola",
	"gota",
	"grado",
	"granada",
	"grano",
	"Grecia",
	"grifo",
	"guante",
	"guardia",
	"guerra",
	"gusano",
	"helado",
	"helicuptero",
	"hielo",
	"hierba",
	"hoja",
	"Hollywood",
	"horca",
	"hospital",
	"hotel",
	"iglesia",
	"iman",
	"india",
	"indice",
	"Inglaterra",
	"Italia",
	"jarra",
	"judia",
	"juicio",
	"kiwi",
	"ladrun",
	"lago Ness",
	"laser",
	"latigo",
	"lengua",
	"leun",
	"libra",
	"lima",
	"limusina",
	"linea",
	"lista",
	"llama",
	"llave",
	"lomo",
	"Londres",
	"luna",
	"luz",
	"maestro",
	"magia",
	"malta",
	"mancha",
	"mando",
	"manga",
	"mango",
	"mano",
	"manzana",
	"maoana",
	"marca",
	"marcha",
	"marfil",
	"masa",
	"mascara",
	"mazo",
	"medico",
	"mercurio",
	"mesa",
	"metro",
	"Mexico",
	"micro",
	"microscopio",
	"mielo",
	"millonario",
	"mina",
	"misil",
	"modelo",
	"mudulo",
	"monitor",
	"mono",
	"mortero",
	"Mosc˙",
	"motor",
	"muelle",
	"muerte",
	"muoeca",
	"muro",
	"naranja",
	"nave",
	"nieve",
	"Nilo",
	"ninja",
	"noche",
	"nota",
	"nudo",
	"Nueva York",
	"obra",
	"ojo",
	"ola",
	"olimpo",
	"upera",
	"orden",
	"urgano",
	"ornitorrinco",
	"oro",
	"oso",
	"pala",
	"palma",
	"pantalla",
	"papel",
	"paracaidas",
	"pase",
	"paso",
	"pasta",
	"pastel",
	"pavo",
	"Pekin",
	"pelicula",
	"pelotun",
	"pendiente",
	"perro",
	"pez",
	"pico",
	"pie",
	"pieza",
	"pila",
	"piloto",
	"pincho",
	"ping¸ino",
	"pinta",
	"pioa",
	"piramide",
	"pirata",
	"pista",
	"pistola",
	"placa",
	"plano",
	"planta",
	"platano",
	"playa",
	"plomo",
	"pluma",
	"policia",
	"polo",
	"portada",
	"portero",
	"potro",
	"prensa",
	"prima",
	"princesa",
	"puente",
	"puerto",
	"pulpo",
	"pulso",
	"punta",
	"punto",
	"radio",
	"rascacielos",
	"ratun",
	"rayo",
	"red",
	"regla",
	"reina",
	"reserva",
	"revoluciun",
	"rey",
	"robot",
	"rojo",
	"Roma",
	"ronda",
	"rosa",
	"ruleta",
	"sable",
	"Sa"
];