const MongoClient = require('mongodb').MongoClient;

// URL di connessione al tuo database MongoDB
const url = 'mongodb+srv://tino:tino@pwm.hyl3ops.mongodb.net/'; // Modifica l'URL con il tuo indirizzo del database

// Nome del database
const dbName = 'pwn'; // Sostituisci con il nome del tuo database

async function inserisciUtente(utente) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    // Connessione al server MongoDB
    await client.connect();

    // Selezione del database
    const db = client.db(dbName);

    // Selezione della collezione degli utenti (puoi cambiarla a seconda delle tue esigenze)
    const collezioneUtenti = db.collection('utenti');

    // Inserimento dell'utente nella collezione
    const risultato = await collezioneUtenti.insertOne(utente);


    return risultato.insertedId;
  } finally {
    // Chiudi la connessione al database alla fine dell'operazione
    client.close();
  }
}



// Dati dell'utente da inserire
const nuovoUtente = {
  nome: 'John',
  cognome: 'Doe',
  email: 'john.doe@example.com',
  password: 'passwordsegreta'
};


async function creaPlaylist(playlist) {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    // Connessione al server MongoDB
    await client.connect();

    // Selezione del database
    const db = client.db(dbName);

    // Selezione della collezione degli utenti (puoi cambiarla a seconda delle tue esigenze)
    const collezionePlaylist = db.collection('playlist');

    // Inserimento dell'utente nella collezione
    const risultato = await collezionePlaylist.insertOne(playlist);

    console.log('Plalist creata con successo', risultato.insertedId);

    return risultato.insertedId;
  } finally {
    client.close();
  }
}



inserisciUtente(nuovoUtente)
  .then(insertedUserId => {
    console.log('L\'ID di riferimento dell\'utente creato è:', insertedUserId);
    

    const nuovaPlaylist = {
      titolo: 'Playlist',
      isPublic: 'True',
      tag: ['fun','rock'],
      canzoni: ['id1','id2'],
      autore: insertedUserId
    };

    creaPlaylist(nuovaPlaylist)  .then(idplaylist => {
      console.log('L\'ID di riferimento alla playlist creata è:', insertedUserId);

    });

  })
  .catch(error => console.error('Errore:', error));