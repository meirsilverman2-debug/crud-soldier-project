export async function errorHandler(err, req, res, next){
    res.status(500 || err.statusCode).json({error: err.message ||"Something went wrong"})
};


export async function checkBody(req, res, next){
    console.log("POST/soldeirs/");
    
    if (Object.keys(req.body).length === 0){
        const err = new Error("Missing body");
        err.statusCode = 400;
        next(err);
    };

    const {name} = req.body;
    const {role} = req.body;
    const {s_rank} = req.body;
    const {unit} = req.body;
    const {age} = req.body;

    if (!name || !role || !s_rank || !unit || !age){
        
        const err = new Error("Missing body paramters");
        err.statusCode = 400;
        next(err);
    };

    if (!(typeof name === "string") || !(typeof role === "string") || !(typeof s_rank === "string") || !(typeof unit === "string") || isNaN(age)){
        const err = new Error("invalid body parameters");
        err.statusCode = 400;
        next(err);

    };

    next();
};


