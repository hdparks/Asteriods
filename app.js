var requirejs = require('requirejs')

requirejs(['express','http','socket.io','./public/ecs/entityManager'],
  function( express , http , socketio , EntityManager ){
    var app = express();
    var http = http.createServer(app);
    var io = socketio(http);

    let em = new EntityManager()
    console.log(em)

    app.use(express.static("public"));
    app.use("/scripts/",express.static(__dirname + "/node_modules"));

    io.on('connection', (socket)=>{
      console.log("User Connected!");

      socket.on("disconnect",()=>{
        console.log("user disconnected");
      });
    })


    const port = 80
    http.listen(port, ()=> {
      console.log(`Listening on port ${port}`);
    })

  })
