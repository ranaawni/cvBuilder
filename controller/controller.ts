import { NextFunction , Request , Response} from "express";
import { connect, Query } from "../model/db";

export default {
    getAllBooks : async (req: Request, res: Response, next: NextFunction) => {
    
        let query = 'SELECT * FROM login';
    
        connect()
            .then((connection) => {
                Query(connection, query)
                    .then((results) => {
                      console.log(results,'results')
                        // return res.status(200).json({
                        //     results
                        // });
                    })
                    .catch((error) => {
    
                        return res.status(200).json({
                            message: error.message,
                            error
                        });
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
    
                return res.status(200).json({
                    message: error.message,
                    error
                });
            });
    }
    
    
    
}

