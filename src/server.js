const routers = require('./routers');
require('dotenv').config();

const port = process.env.PORT;

routers.listen(port, () => console.log(`server running at port: ${port}`));
