var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}))

const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //write error logs
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
  app.get('/', (req,res) => {
    res.send("This is the main end point");
})

const add = (n1,n2) => {
    return n1+n2;
}

app.get("/add", (req,res)=>{
    try{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if(isNaN(n1)) {
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    logger.info('Parameters '+n1+' and '+n2+' received for addition');
    const result = add(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


const subtract= (n1,n2) => {
  return n1-n2;
}
app.get("/subtract", (req,res)=>{
    try{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if(isNaN(n1)) {
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    logger.info('Parameters '+n1+' and '+n2+' received for subtraction');
    const result = subtract(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


const multiply= (n1,n2) => {
  return n1*n2;
}

app.get("/multiply", (req,res)=>{
  try{
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) {
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error("Parsing Error");
  }
  logger.info('Parameters '+n1+' and '+n2+' received for multiplication');
  const result = multiply(n1,n2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

const division= (n1,n2) => {
  return n1/n2;
}

app.get("/division", (req,res)=>{
  try{
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) {
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error("Parsing Error");
  }
  logger.info('Parameters '+n1+' and '+n2+' received for division');
  const result = division(n1,n2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
//square root
app.get("/squareroot", (req,res)=>{
  try{
  const n1 = parseFloat(req.query.n1);

  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
 
  
 
  logger.info('Parameters '+n1+' received for square root');
  const result = Math.sqrt(n1);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
//exponentiation
app.get("/exponentiation", (req,res)=>{
  try{
  const n1 = parseFloat(req.query.n1);

  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
 
 
  logger.info('Parameters '+n1+' received for exponentiation');
  const result = Math.exp(n1);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
//modulooperation
app.get("/modulo", (req,res)=>{
  try{
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) {
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
 
  logger.info('Parameters '+n1+' and '+n2+' received for modulation');
  const result = n1%n2;
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});
app.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);

var port = process.env.port || 4000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
})