import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

// express-async-handler middleware
// i don't wanna put a try-catch in every route
// it handles exceptions in async express routes & passing to express error handlers

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
