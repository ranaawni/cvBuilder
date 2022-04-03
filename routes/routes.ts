import express from 'express'
import controller from "../controller/controller";

const router = express.Router();

router.get('/get/books', controller.getAllBooks);

export = router;