import { rejects } from 'assert';
import express from 'express';
require('dotenv').config();
import {createPpool, Pool} from 'mysql'
import { resolve } from 'path/posix';
import { connected } from 'process';
// const mysql = require('mysql')
import mysql from 'mysql'


var params = {
          host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        port : process.env.DB_PORT,  
}

const connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params)
    connection.connect((error) => {
        if (error) {
            reject(error)
            return;
        }
        resolve(connection)
    });
    connection.end();
 });

 const Query = async(connection : mysql.Connection, query:string) => new Promise((resolve,reject) => {
     connection.query(query, connection, (error,result) => {
         if(error) {
             reject(error);
             return;
         }
         resolve(result)
       
     });
 });

 const close = async () => new Promise<mysql.Connecion> ((resolve, reject) => {

 })

//  class connection {
//     private static sqlConfig = {
//         host : process.env.DB_HOST,
//         user : process.env.DB_USER,
//         password : process.env.DB_PASSWORD,
//         database : process.env.DB_DATABASE,
//         port : process.env.DB_PORT,
//         };
        
//     public static async conn() {
//         var  connectionDB = mysql.createConnection(this.sqlConfig)
//        connectionDB.query('SELECT 1 + 1 AS solution', (err, rows ,fields) => {
//             if(err) {
//          console.log(err,'errrorrrr')
         
//                 }
  
//            console.log('Database conneted')
//              });
//         }
//     public static async close() {
//     }
// }




export {connect, Query}