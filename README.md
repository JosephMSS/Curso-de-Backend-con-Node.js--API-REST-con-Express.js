# CRUD

## GET: parámetros query

> Cuando sucede un choque de rutas debido a que estas se parcen como en el siguiente caso:

```
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([{ id: id, name: `Product 1`, price: 3000 }]);
});
app.get('/products/filter', (req, res) => {
  res.send('Products filter');
});

```

- > Si tratamos de acceder a filter las respuesta que nos va a retornar va a ser la de `/products/:id`

> La forma de solucionarlo es estructurar las rutas de manera que **lo especifico va a ir antes que lo dinamico**:

```
app.get('/products/filter', (req, res) => {
  res.send('Products filter');
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([{ id: id, name: `Product 1`, price: 3000 }]);
});
```

## Separación de responsabilidades con express.Router

> Normalmente cuando se tiene API's muy robustas se comienzan a dividir estos endpoints en subrutas o namespaces, ya que estos sistemas pueden estar conectados a diferentes clientes que dependan de las diferentes versiones del sistema. Una manera facil y manteniblke de definir este comportamiento en las rutas puede ser de la siguiente manera:
```
const router = Router();
  /**
  * creamos una ruta global 
  */ 
  app.use('/api/v1', router);
  /**
  * Luego asignamos esa ruta global a 
  * los endpoints 
  */
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
```
