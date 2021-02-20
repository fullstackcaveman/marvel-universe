import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
// import connectDB from './config/db.js';
import colors from 'colors';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/', (req, res) => {
	res.send('API is running...');
});

// app.use(notFound);

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
			.bold
	)
);
