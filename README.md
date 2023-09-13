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

-  Gestione dei dati utente (modifica delle informazioni o rimozione del
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



