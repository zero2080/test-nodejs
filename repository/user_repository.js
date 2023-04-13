const connection = require('../db/connection');
const Member = require('../entity/Member')
exports.getBoardPages = async (pageable)=> {
    return await new Promise((resolve,reject)=>connection(conn => {
        let query = `SELECT b.id,
            b.title, 
            b.writer_id, 
            u.nickname, 
            b.created_at, 
            b.updated_at 
        FROM board AS b 
            LEFT JOIN member AS u 
            ON b.writer_id=u.id
        ORDER BY created_at DESC
        LIMIT ${pageable.page_size}
        OFFSET ${pageable.offset}`;
        conn.query(query, (err, rows, fields) => {
            if(err) reject(err);
            resolve(rows.map(row => new Board(row)));
            
        });
    }));
}

exports.getMember = async (login_id)=>{
    return await new Promise((resolve,reject)=>connection((conn)=>{
        conn.query(`SELECT * FROM member WHERE login_id='${login_id}'`,(err,rows)=>{
            if(err) reject(err);
            console.log(rows);
            resolve(new Member(rows[0]));
        });
    }));
}

exports.signup = async (member)=>{
    return await new Promise((resolve,reject)=>connection(conn=>{
        let query = `INSERT INTO member (login_id,password) VALUES ('${member.login_id}','${member.password}')`;
        conn.query(query,(err,rows)=>{
            if(err) reject(err);
            resolve(rows);
        });
    }));
}
