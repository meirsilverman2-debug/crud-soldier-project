export async function errorHandler(err, req, res, next) {
    res.status(500 || err.statusCode).json({ error: err.message || "Something went wrong" })
};


export async function checkBody(req, res, next) {
    console.log("POST/soldeirs/");

    if (Object.keys(req.body).length === 0) {
        const err = new Error("Missing body");
        err.statusCode = 400;
        next(err);
    };

    const { name } = req.body;
    const { role } = req.body;
    const { s_rank } = req.body;
    const { unit } = req.body;
    const { age } = req.body;

    if (!name || !role || !s_rank || !unit || !age) {

        const err = new Error("Missing body paramters");
        err.statusCode = 400;
        next(err);
    };

    if (!(typeof name === "string") || !(typeof role === "string") || !(typeof s_rank === "string") || !(typeof unit === "string") || isNaN(age)) {
        const err = new Error("invalid body parameters");
        err.statusCode = 400;
        next(err);

    };

    next();
};


export async function checkQuery(req, res, next) {
    console.log("GET/soldiers/");
    if (Object.keys(req.query) !== 0) {

        let mysqlQuery = ""
        let queryList = []

        const { name } = req.query;
        const { role } = req.query;
        const { unit } = req.query;
        const { age } = req.query;
        const { s_rank } = req.query;
        const { status } = req.query;

        if ((name && typeof name !== "string") || (role && typeof role !== "string") || (unit && typeof unit !== "string") || (age && isNaN(age)) || (s_rank && typeof s_rank !== "string") || (status && typeof status !== "boolean")) {
            const err = new Error("You use a invaid search");
            err.statusCode = 400;
            next(err);
        };

        if (name && typeof name === "string") {
            mysqlQuery += " and name = ?";
            queryList.push(name);
        }

        if (role && typeof role === "string") {
            mysqlQuery += " and role = ?";
            queryList.push(role);
        };
        if (unit && typeof unit === "string") {
            mysqlQuery += "and unit = ?";
            queryList.push(unit)
        };

        if (age && !isNaN(age)) {
            mysqlQuery += " and age = ?";
            queryList.push(age);
        }
        if (s_rank && typeof s_rank === "string") {
            mysqlQuery += " and s_rank = ?";
            queryList.push(s_rank);
        };
        if (status && typeof status === "boolean") {
            mysqlQuery += " and status = ?";
            queryList.push(status);
        };

        req.querySql = mysqlQuery;
        req.listQuery = queryList;
        console.log(req.querySql);
        console.log(req.listQuery);

        next();
    };
};


export async function checkID(req, res ,next){
    
    const {id} = req.params;
    if (!id || isNaN(id)){
        const err = new Error;
        err.statusCode = 400;
        next(err);
    };

    next();
}
