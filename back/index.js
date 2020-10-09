let express = require('express');
let app = express();
const cors = require('cors');
let bodyParser = require('body-parser');

let appConfig = require('./configs/app');


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
    origin: 'http://localhost:3000', 
    credentials: true,
    })
);

app.use('/tasks', require('./routes/tasks'));

app.listen(appConfig.express_port,() => {
    let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
    console.log(show);
});