// Import modules needed to instantiate and configure Relay environment
const {
    Environment,
    Network,
    RecordSource,
    Store,
  } = require('relay-runtime')
  
  // Instantiate Store for cache data
  const store = new Store(new RecordSource())
  
  // Create network that knows the GraphQL server. Returns a promise
  const network = Network.create((operation, variables) => {
    // Server endpoint
    return fetch('http://localhost:8080/query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json()
    })
  })
  
  // Instantiate actual Environment
  const environment = new Environment({
    network,
    store,
  })
  
  // export module
  export default environment