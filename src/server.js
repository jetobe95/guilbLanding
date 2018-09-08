import express from 'express';
import webpack from 'webpack';
import wpDevMdd from 'webpack-dev-middleware';
import wpConfig from '../webpack.config';

//Initializing
const app = express();

//Setting
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(wpDevMdd(webpack(wpConfig)));

//routes
app.get('/', (req,res)=>{
    res.send('Hola mama');
});

app.get('/api', (req,res)=>{
    res.json('work');
})

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
})