const apiKey = process.env.API_KEY;
const listId = 3; //refers to fan-emails 

export default async function addContact(email){
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify({
          email: email,
          listIds: [listId],
        })
      };
      
      fetch('https://api.brevo.com/v3/contacts', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
}