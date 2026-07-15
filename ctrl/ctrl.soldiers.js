import pool from "../db.js";

export async function createTable() {
    try {
        await pool.execute(`create table if not exists soldiers(id int primary key auto_increment, name varchar(20) not null, role varchar(20) not null, s_rank varchar(20) default 'private', unit varchar(30) not null, age int not null, ststus bool default true, createdAt timestamp default current_timestamp)`);
        console.log("Table has been created successfuly!");
    } catch (e) {
        console.log(e);
    };
};


export async function createSoldier(req, res) {
    try {
         console.log("createSoldier");
    const soldier = req.body;
    console.log(soldier);
    console.log(typeof soldier);
    await pool.execute(`insert into soldiers(name, role, s_rank, unit, age)values(?, ?, ?, ? ,?)`, [soldier.name, soldier.role, soldier.s_rank, soldier.unit, soldier.age]);
    res.status(201).json({success: true, data: soldier})
    } catch (e) {
        console.log(e);
    };
};






