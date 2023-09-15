# Esame Programmazione Web

scopo del progetto realizzare un applicazione web Social Network for music.

Sito di gestione per playlist musicali.

gestisce il processo di organizzazione di playlist
musicali di più utenti e la loro condivisione. E composto da tre macro
scenari principali:

* gestione degli utenti;

* gestione delle playlist;

* gestione delle condivisioni.

# Fasi:

1. Registrazione: registrazione utente dove verranno
   collezionate informazioni quali indirizzo email, nome utente (si può decidere se utilizzarne uno indicato dall’utente o un altra informazione già collezionata), password, preferenze musicali, gruppi musicali preferiti e informazioni personali scelte in fase di progettazione dell’applicativo.

2. nella gestione di liste musicali:Per ogni utente si dovranno gestire le informazioni
   inserite nella fase di registrazione. Un utente, una volta registrato,
   può collegarsi all’applicazione e creare/modificare/cancellare liste
   musicali contententi un elenco di canzoni. L’elenco delle canzoni
   viene acquisito tramite le API REST del portale Spotify

3. Il terzo scenario (gestione delle condivisioni) consiste nella classica condivisione di oggetti all’interno di un’applicazione web. Gli utenti possono decidere quale delle playlist da loro composte rendere pubbliche ad altri utenti. In un’area dedicata del portale gli utenti possono ricercare le playlist pubbliche, visualizzare le informazioni principali (elenco delle canzoni, durata, tag e descrizione) e decidere se importarle nel proprio profilo. La ricerca delle playlist pubbliche deve fornire come criteri di ricerca almeno i tag associati e le canzoni in esse contenute.

# Funzionalità

- Registrazione e login al sito

- Gestione dei dati utente (modifica delle informazioni o rimozione del
  profilo);

- Aggiunta/Modifica/Cancellazione delle playlist private;

- Aggiunta/Cancellazione delle playlist pubbliche;

- Visualizzazione di informazioni relative alle playlist, alle canzoni, agli
  utenti;

- Visualizzazione delle canzoni;
* Ricerca delle canzoni (ad es., tipologia, autore, cantante, genere);

* Visualizzazione delle playlist private e delle pubbliche di altri utenti

# API

## Routes

* ```
  /song/:idSong
  ```
  
  restituisce i dettagli della canzone il cui id è idSong

* ```
  /search
  ```
  
  permette la ricerca tramite  testo usando il parametro q='testo da cercare'

# Strutture Dati

* Utente: 
  
  ```js
  const nuovoUtente = {
    nome: 'John',
    cognome: 'Doe',
    email: 'john.doe@example.com',
    password: 'passwordsegreta',
    dataN: '04/04/2004'
  };
  ```

* Playlist:
  
  ```js
  const nuovaPlaylist = {
        titolo: 'Playlist',
        isPublic: 'True',
        tag: ['fun','rock'],
        canzoni: ['id1','id2'],
        autore: 'userID'
  };
  ```

# Note

L'organizzazione dei file in un progetto Node.js è una parte essenziale della gestione del codice, poiché può contribuire a rendere il tuo progetto più leggibile, manutenibile e scalabile. Ecco una possibile struttura di organizzazione dei file che è spesso utilizzata nei progetti Node.js:

```
my-node-project/
|-- node_modules/
|-- public/
|   |-- css/
|   |-- js/
|   |-- images/
|-- src/
|   |-- routes/
|   |   |-- index.js
|   |   |-- auth.js
|   |-- controllers/
|   |   |-- userController.js
|   |   |-- ...
|   |-- models/
|   |   |-- userModel.js
|   |   |-- ...
|   |-- views/
|   |   |-- index.html
|   |   |-- login.html
|-- app.js
|-- package.json
|-- package-lock.json
|-- README.md
```

Ecco una breve spiegazione di come organizzare i file all'interno di questa struttura:

- **node_modules**: Questa directory contiene tutte le dipendenze del progetto installate tramite npm o yarn. Non dovresti modificarla manualmente.

- **public**: In questa directory vanno i file statici del tuo sito web, come fogli di stile CSS, file JavaScript e immagini. Questi file possono essere serviti direttamente al browser.

- **src**: Questa è la directory principale del tuo codice sorgente.
  
  - **routes**: In questa directory puoi organizzare i file che gestiscono le route dell'applicazione. Ad esempio, `index.js` potrebbe gestire le route principali del sito, mentre `auth.js` potrebbe gestire le route di autenticazione.
  
  - **controllers**: Qui puoi mettere i file che contengono la logica del tuo server. I controller ricevono richieste dalle route e gestiscono la logica dietro di esse.
  
  - **models**: Questa directory è utile per organizzare i file che definiscono la struttura dei dati del tuo database, ad esempio con schema Mongoose se stai usando MongoDB.
  
  - **views**: Se stai utilizzando un motore di template come Handlebars o EJS, puoi organizzare i file HTML o di template in questa directory.

- **app.js**: Questo è il file principale dell'applicazione Node.js. Qui vengono inizializzati i moduli principali, i middleware e le route.

- **package.json**: Questo file contiene le informazioni sul progetto, inclusi i moduli Node.js richiesti, le dipendenze e gli script personalizzati. Puoi utilizzare npm o yarn per gestire le dipendenze del progetto.

- **package-lock.json**: Questo file è generato automaticamente da npm e contiene informazioni sulle versioni specifiche delle dipendenze installate.

- **README.md**: Questo file contiene la documentazione del tuo progetto, inclusa la spiegazione del suo scopo, delle istruzioni per l'installazione e l'utilizzo e altre informazioni utili.

Ricorda che questa è solo una delle possibili strutture di organizzazione dei file per un progetto Node.js. La struttura esatta dipende dalle esigenze del tuo progetto e dalla tua preferenza personale. È importante mantenere una struttura organizzata per facilitare la manutenzione futura e la collaborazione con altri sviluppatori.



# To Do

- [ ] Index: fix bg e text
