const express = require('express');
const app = express(); 

app.get('/', (req, res) => { 
    res.send('Hello from your Express server!'); 
}); 


// 2. /about route 
app.get('/about', (req, res) => { 
    res.send('About page'); 
}); 

// 3. /foo first handler 
app.get('/foo', (req, res, next) => {
  if (Math.random() > 0.5) { 
        res.send('sometimes this'); 
  } else {
    next();
  } 
});

// 4. /foo second handler 
app.get('/foo', (req, res) => { 
  res.send('and sometimes that'); 
});

// 5. Regex route 
app.get(/\/user(name)?/, (req, res) => { 
  res.send('Matched /user or /username'); 
});

// 6. Dynamic route /user/:username 
app.get('/user/:username', (req, res) => { 
    res.send(`Username: ${req.params.username}`); 
}); 

// 7. Query string route /get 
app.get('/get', (req, res) => { 
  res.json(req.query); 
}); 

// 8. 404 handler (must be last) 
app.use((req, res) => { 
    res.status(404).send('404 - Not Found'); 
}); 

app.listen(3000, () => {
 console.log('Server running on port 3000'); 
});